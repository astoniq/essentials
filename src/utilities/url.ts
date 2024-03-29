export const joinPath = (...segments: string[]) => {
    const result: string[] = [];

    for (const segment of segments.join('/').split('/')) {
        if (!segment || segment === '.') {
            continue;
        }

        if ([...segment].every((char) => char === '.')) {
            result.pop();
            continue;
        }

        result.push(segment);
    }

    return '/' + result.join('/');
};

export const appendPath = (baseUrl: URL, ...pathNames: string[]) =>
    new URL(joinPath(baseUrl.pathname, ...pathNames), baseUrl);