'use client';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

interface NoopStorageReturnType {
    getItem: (_key: string) => Promise<null>;
    setItem: (_key: string, value: unknown) => Promise<unknown>;
    removeItem: (_key: string) => Promise<void>;
}

const noopStorage: NoopStorageReturnType = {
    getItem: () => Promise.resolve(null),
    setItem: (_key, value) => Promise.resolve(value),
    removeItem: () => Promise.resolve(),
};

const createNoopStorage = (): NoopStorageReturnType => {
    return noopStorage;
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

export default storage;
