import { topics, makeQuestion } from './catalog';
export type Profile = { name: string; avatar: number; interests: string[]; weeklyGoal: number; difficulty?: 'easy'|'medium'|'hard'; photoUrl?: string; createdAt: number };
export type Completion = { id: string; topicId: string; lesson: number; day: string; completedAt: number; answers: number[]; questions: number[]; score: number; missed: string[]; kind: 'lesson' | 'review' | 'daily' };
export type Progress = { version: 1; profile: Profile | null; events: Completion[] };
export const emptyProgress = (): Progress => ({ version:1, profile:null, events:[] });
export function dayKey(date = new Date()): string { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
export function shiftDay(day: string, amount: number): string { const [y,m,d] = day.split('-').map(Number); const date = new Date(y,m-1,d,12); date.setDate(date.getDate()+amount); return dayKey(date); }
export function isDay(day: unknown): day is string { return typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) && shiftDay(day,0) === day; }
export function streak(days: string[], today = dayKey()): number { const set = new Set(days); let cursor = set.has(today) ? today : shiftDay(today,-1); let result=0; while(set.has(cursor)) { result++; cursor=shiftDay(cursor,-1); } return result; }
export function longestStreak(days: string[]): number { const sorted = [...new Set(days)].sort(); let best=0, run=0, previous=''; for(const day of sorted) { run = previous && shiftDay(previous,1)===day ? run+1 : 1; best=Math.max(best,run); previous=day; } return best; }
export function topicDays(p: Progress, topicId: string): string[] { return [...new Set(p.events.filter(e=>e.topicId===topicId && e.kind==='lesson').map(e=>e.day))]; }
export function mastered(p: Progress): string[] { return topics.filter(t=>longestStreak(topicDays(p,t.id))>=7).map(t=>t.id); }
export function completedLessons(p: Progress, topicId: string): number[] { return [...new Set(p.events.filter(e=>e.topicId===topicId && e.kind==='lesson').map(e=>e.lesson))]; }
export function xp(p: Progress): number { return p.events.reduce((sum,e)=>sum+(e.kind==='review'?10:20)+e.score*5,0); }
export function monday(day=dayKey()): string { const [y,m,d]=day.split('-').map(Number); const weekday = new Date(y,m-1,d,12).getDay(); return shiftDay(day,-((weekday+6)%7)); }
export function weekDays(offset=0, today=dayKey()): string[] { const start=shiftDay(monday(today),offset*7); return Array.from({length:7},(_,i)=>shiftDay(start,i)); }
export function validateProfile(value: unknown): value is Profile { if(!value || typeof value!=='object') return false; const p=value as Profile; return typeof p.name==='string' && p.name.trim().length>=2 && p.name.length<=24 && !/[\u0000-\u001f]/.test(p.name) && Number.isInteger(p.avatar) && p.avatar>=0 && p.avatar<6 && Array.isArray(p.interests) && p.interests.length>=1 && p.interests.length<=25 && new Set(p.interests).size===p.interests.length && p.interests.every(id=>topics.some(t=>t.id===id)) && Number.isInteger(p.weeklyGoal) && p.weeklyGoal>=1 && p.weeklyGoal<=7 && (p.difficulty===undefined || ['easy','medium','hard'].includes(p.difficulty)) && Number.isSafeInteger(p.createdAt) && p.createdAt>0; }
export function validateEvent(value: unknown): value is Completion {
 if(!value || typeof value!=='object') return false; const e=value as Completion;
 if(e.kind==='daily') return typeof e.id==='string' && e.id===`general:${e.day}:daily` && e.topicId==='general' && isDay(e.day) && Array.isArray(e.answers) && e.answers.length===15 && Array.isArray(e.questions) && e.questions.length===15 && e.answers.every(a=>Number.isInteger(a)&&a>=0&&a<=2) && e.questions.every(q=>Number.isInteger(q)&&q>=0&&q<15) && Number.isInteger(e.score) && e.score>=0&&e.score<=15 && Array.isArray(e.missed) && Number.isSafeInteger(e.completedAt);
 const shape = typeof e.id==='string' && /^[a-z0-9-]+:\d{4}-\d{2}-\d{2}:(lesson|review)$/.test(e.id) && topics.some(t=>t.id===e.topicId) && Number.isInteger(e.lesson) && e.lesson>=0 && e.lesson<7 && isDay(e.day) && e.id===`${e.topicId}:${e.day}:${e.kind}` && Number.isSafeInteger(e.completedAt) && e.completedAt>0 && (e.kind==='lesson'||e.kind==='review') && Array.isArray(e.questions) && (e.questions.length===3||e.questions.length===10) && e.questions.every(q=>Number.isInteger(q)&&q>=0&&q<21) && Array.isArray(e.answers) && e.answers.length===e.questions.length && e.answers.every(a=>Number.isInteger(a)&&a>=0&&a<=2) && Number.isInteger(e.score) && e.score>=0 && e.score<=e.questions.length && Array.isArray(e.missed) && e.missed.length<=e.questions.length;
 if(!shape) return false;
 if(e.questions.length!==3) return e.score>=0 && e.score<=e.questions.length;
 const topic=topics.find(t=>t.id===e.topicId)!;
 const wrong=e.questions.filter((index,i)=>makeQuestion(topic,index).correct!==e.answers[i]).map(index=>`${e.topicId}:${index}`);
 return e.score===3-wrong.length && JSON.stringify(wrong)===JSON.stringify(e.missed); 
}
export function parseProgress(raw: string): Progress { const data=JSON.parse(raw); if(data.version!==1 || !Array.isArray(data.events)) throw new Error('El archivo de progreso no tiene un formato válido.'); if(data.profile!==null){const p=data.profile as Profile;const interests=Array.isArray(p.interests)?p.interests.filter(id=>topics.some(t=>t.id===id)):[];data.profile={...p,interests}; if(!validateProfile(data.profile)) data.profile=null;} const events=data.events.filter(validateEvent); return {...data,events:mergeEvents(events,[])}; }
export function mergeEvents(a: Completion[], b: Completion[]): Completion[] { const byId=new Map<string,Completion>(); for(const event of [...a,...b]) if(validateEvent(event) && !byId.has(event.id)) byId.set(event.id,event); return [...byId.values()].sort((x,y)=>x.completedAt-y.completedAt); }
export function addCompletion(p: Progress, event: Completion): Progress { if(!validateEvent(event)) throw new Error('No se pudo validar la clase.'); return {...p,events:mergeEvents(p.events,[event])}; }
export function missedQuestions(p: Progress): string[] {
 const pending = new Set<string>();
 for (const e of p.events) {
  for (const index of e.questions) {
   const id = `${e.topicId}:${index}`;
   if (e.missed.includes(id)) pending.add(id); else pending.delete(id);
  }
 }
 return [...pending];
}
