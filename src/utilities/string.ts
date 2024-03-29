import {Nullable} from "./types.js";


export function toTitle(string: string) {
    return string
        .toLowerCase()
        .replaceAll(/(?:^|\s|-)\S/g, (value) => value.toUpperCase())
        .replaceAll('-', ' ');
}

const replaceNonUrlSafeCharacters = (base64String: string) =>
    base64String.replaceAll('+', '-').replaceAll('/', '_').replaceAll(/=+$/g, '');
const restoreNonUrlSafeCharacters = (base64String: string) =>
    base64String.replaceAll('-', '+').replaceAll('_', '/');

export const urlSafeBase64 = {
    isSafe: (input: string) => /^[\w-]*$/.test(input),
    encode: (rawString: string) => {
        const encodedString = btoa(unescape(encodeURIComponent(rawString)));

        return replaceNonUrlSafeCharacters(encodedString);
    },
    decode: (encodedString: string) => {
        const nonUrlSafeEncodedString = restoreNonUrlSafeCharacters(encodedString);

        return decodeURIComponent(escape(atob(nonUrlSafeEncodedString)));
    },
    replaceNonUrlSafeCharacters,
    restoreNonUrlSafeCharacters,
};

export const yes = (value?: Nullable<string>) =>
    !!value && ['1', 'true', 'y', 'yes', 'yep', 'yeah'].includes(value.toLowerCase());