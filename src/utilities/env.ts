import process from 'process';
import {assert} from "./assert.js";
export const getEnv = (key: string, fallback = ''): string => process?.env[key] ?? fallback;

export const getEnvAsStringArray = (envKey: string, fallback: string[] = []): string[] => {
    const rawValue = getEnv(envKey);

    if (!rawValue) {
        return fallback;
    }

    return rawValue
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);
};

export const assertEnv = (key: string): string => {
    const value = process?.env[key];
    assert(value, new Error(`env variable ${key} not found`));

    return value;
};