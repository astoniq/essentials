export type AssertFunction = <E extends Error>(value: unknown, error: E) => asserts value;

const assert: AssertFunction = (value, error): asserts value => {
    if (!value) {
        throw error;
    }
};

export {assert}