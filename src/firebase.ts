import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { initializeApp, getApps } from 'firebase/app';
import * as FirebaseAuth from 'firebase/auth';
import { Persistence } from 'firebase/auth';
import { getAuth, initializeAuth, signInAnonymously, Auth } from 'firebase/auth';
import { doc, getFirestore, setDoc, getDocs, getDoc, collection } from 'firebase/firestore';
import { Completion, Profile, validateEvent, validateProfile } from './progress';
const config = {
 apiKey:'AIzaSyDec5nyuT3wlhoYfU3s-1ugozvilQ34EVg', authDomain:'sabio-8fd6f.firebaseapp.com', projectId:'sabio-8fd6f',
 storageBucket:'sabio-8fd6f.firebasestorage.app', messagingSenderId:'477033353573', appId:'1:477033353573:web:13c635a2ccc31686edd18c'
};
const app = getApps().find(a=>a.name==='curio') || initializeApp(config,'curio');
let auth: Auth;
try { auth=Platform.OS==='web' ? getAuth(app) : initializeAuth(app,{ persistence:(FirebaseAuth as typeof FirebaseAuth & {getReactNativePersistence:(storage:typeof AsyncStorage)=>Persistence}).getReactNativePersistence(AsyncStorage) }); }
catch(error:any) { if(error.code==='auth/already-initialized') auth=getAuth(app); else throw error; }
const db=getFirestore(app);
export async function identity(): Promise<string> { await auth.authStateReady(); return auth.currentUser?.uid || (await signInAnonymously(auth)).user.uid; }
export async function fetchCloud(): Promise<{profile:Profile|null;events:Completion[]}> {
 const uid=await identity(); const [profileDoc,events]=await Promise.all([getDoc(doc(db,'curioUsers',uid)),getDocs(collection(db,'curioUsers',uid,'completions'))]);
 const profile=profileDoc.data()?.profile;
 return {profile:validateProfile(profile)?profile:null,events:events.docs.map(d=>d.data()).filter(validateEvent)};
}
export async function pushCloud(profile:Profile, events:Completion[]): Promise<void> {
 const uid=await identity();
 await setDoc(doc(db,'curioUsers',uid),{profile,version:1});
 const remote=await getDocs(collection(db,'curioUsers',uid,'completions')); const ids=new Set(remote.docs.map(d=>d.id));
 for(const event of events) { if(!ids.has(event.id)) await setDoc(doc(db,'curioUsers',uid,'completions',event.id),event); }
}
export function cloudError(error:unknown): string { const code=(error as {code?:string})?.code || ''; if(code.includes('permission-denied')) return 'Tu avance está guardado aquí. Falta habilitar las reglas de Curio en Firebase para sincronizar.'; if(code.includes('admin-restricted')||code.includes('operation-not-allowed')||code.includes('configuration-not-found')) return 'Tu avance está guardado aquí. Falta habilitar el acceso anónimo en Firebase.'; if(code.includes('network')||code.includes('unavailable')) return 'Sin conexión. Tu avance está guardado aquí y volveremos a intentar sincronizar.'; return 'No pudimos sincronizar. Tu avance está guardado aquí; podés reintentar.'; }
