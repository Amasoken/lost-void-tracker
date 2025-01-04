'use client';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

interface NoopStorageReturnType {
    getItem: (_key: any) => Promise<null>;
    setItem: (_key: any, value: any) => Promise<any>;
    removeItem: (_key: any) => Promise<void>;
}

const noopStorage: NoopStorageReturnType = {
    getItem: (_key) => Promise.resolve(null),
    setItem: (_key, value) => Promise.resolve(value),
    removeItem: (_key) => Promise.resolve(),
};

const createNoopStorage = (): NoopStorageReturnType => {
    return noopStorage;
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

export default storage;
