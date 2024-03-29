type Procedure<A extends unknown[], T> = (...args: A) => T;

export function once<A extends unknown[], T>(function_: Procedure<A, T>): Procedure<A, T> {
    let called = false;
    let result: T;

    return function (this: unknown, ...args: A) {
        if (!called) {
            called = true;
            result = function_.apply(this, args);
        }

        return result;
    };
}