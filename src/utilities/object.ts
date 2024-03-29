export const isObject = (object: unknown): object is object =>
    object !== null && typeof object === 'object';

export const isKeyInObject = <Key extends string>(
    object: unknown,
    key: Key
): object is object & Record<Key, unknown> => isObject(object) && key in object;


type RemoveUndefinedKeys<T> = {
    [Key in keyof T as T[Key] extends undefined ? never : Key]: Exclude<T[Key], undefined>;
};

export const removeUndefinedKeys = <T extends object>(object: T): RemoveUndefinedKeys<T> =>
    // eslint-disable-next-line no-restricted-syntax
    Object.fromEntries(
        Object.entries(object).filter(([, value]) => value !== undefined)
    ) as RemoveUndefinedKeys<T>;