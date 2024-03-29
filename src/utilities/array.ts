export const normalizeValueToStringArray = (value?: string | string[]): string[] => {
    if (value) {
        return Array.isArray(value) ? value : [value];
    }

    return [];
};

export const repeat = <T>(times: number, initial: T, iterate: (accumulator: T) => T) => {
    let result = initial;

    while (times--) {
        result = iterate(result);
    }

    return result;
};

export const deduplicate = <T>(array: T[]) => [...new Set(array)];