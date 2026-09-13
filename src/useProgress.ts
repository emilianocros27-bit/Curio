import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { emptyProgress, mergeEvents, Progress } from './progress';
import { readProgress, writeProgress } from './storage';
function timeout<T>(promise:Promise<T>,ms=12000):Promise<T> { return new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('timeout')),ms);promise.then(v=>{clearTimeout(timer);resolve(v);},e=>{clearTimeout(timer);reject(e);});}); }
export function useProgress() {
 const [progress,setProgress]=useState<Progress>(emptyProgress); const current=useRef(progress);
 const [loaded,setLoaded]=useState(false); const [loadError,setLoadError]=useState(''); const [saveError,setSaveError]=useState('');
 const [sync,setSync]=useState<'waiting'|'syncing'|'saved'|'error'>('waiting'); const [syncMessage,setSyncMessage]=useState('');
 const queue=useRef(Promise.resolve()); const alive=useRef(true); const syncing=useRef(false);
 const commit=useCallback((update:(p:Progress)=>Progress):Promise<void>=>{
  const operation=queue.current.then(async()=>{const next=update(current.current);await writeProgress(next);current.current=next;if(alive.current){setProgress(next);setSaveError('');}});
  queue.current=operation.catch(()=>{}); return operation.catch(error=>{if(alive.current)setSaveError('No pudimos guardar en este dispositivo. Liberá espacio y volvé a intentar; tu clase sigue abierta.');throw error;});
 },[]);
 const reload=useCallback(async()=>{setLoadError('');try {const p=await readProgress();current.current=p;setProgress(p);setLoaded(true);}catch{setLoadError('No pudimos leer tu progreso. Tus datos se conservan; volvé a intentar.');}},[]);
 useEffect(()=>{alive.current=true;void reload();return()=>{alive.current=false;};},[reload]);
 const syncNow=useCallback(async()=>{
  if(syncing.current || !loaded) return; syncing.current=true;setSync('syncing');
  try {
   const cloud=await import('./firebase'); const remote=await timeout(cloud.fetchCloud());
   await commit(p=>({ ...p,profile:p.profile||remote.profile,events:mergeEvents(remote.events,p.events) }));
   const snapshot=current.current;
   if(snapshot.profile) await timeout(cloud.pushCloud(snapshot.profile,snapshot.events));
   if(alive.current){setSync('saved');setSyncMessage('Tu progreso está sincronizado.');}
  } catch(error) { if(alive.current) { setSync('error'); const code=(error as {code?:string})?.code||''; setSyncMessage(code.includes('permission-denied')?'Tu avance está guardado aquí. Firebase todavía no permite sincronizar los datos de Curio.':code.includes('admin-restricted')||code.includes('operation-not-allowed')||code.includes('configuration-not-found')?'Tu avance está guardado aquí. Falta habilitar la autenticación anónima en Firebase.':'Tu avance está guardado aquí. Reintentaremos la sincronización al recuperar la conexión.'); } }
  finally {syncing.current=false;}
 },[loaded,commit]);
 useEffect(()=>{if(!loaded)return;const timer=setTimeout(()=>{void syncNow();},900);return()=>clearTimeout(timer);},[loaded,progress.profile,progress.events.length,syncNow]);
 useEffect(()=>{if(!loaded)return;const timer=setInterval(()=>{void syncNow();},60000);const sub=AppState.addEventListener('change',s=>{if(s==='active')void syncNow();});return()=>{clearInterval(timer);sub.remove();};},[loaded,syncNow]);
 return {progress,loaded,loadError,saveError,commit,reload,sync,syncMessage,syncNow};
}
