import type { PackageJson } from 'type-fest';
import { execProcess } from './process.js';

export async function runLifecycle(cwd: string, scriptName: keyof PackageJson.Scripts, args: string[] = []) {
	await execProcess('yarn', ['run', '--ignore-scripts', scriptName, ...args], cwd);
}
