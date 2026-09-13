import AsyncStorage from '@react-native-async-storage/async-storage';
import { emptyProgress, parseProgress, Progress } from './progress';
const KEY='curio.progress.v1';
export async function readProgress(): Promise<Progress> { const raw=await AsyncStorage.getItem(KEY); return raw ? parseProgress(raw) : emptyProgress(); }
export async function writeProgress(progress: Progress): Promise<void> { await AsyncStorage.setItem(KEY,JSON.stringify(progress)); }
