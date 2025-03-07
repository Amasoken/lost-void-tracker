'use client';

import { setupListeners } from '@reduxjs/toolkit/query';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { type Persistor, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import type { AppStore } from './store';
import { makeStore } from './store';

interface Props {
    readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null);
    const persistorRef = useRef<Persistor>({} as Persistor);

    if (!storeRef.current) {
        storeRef.current = makeStore();
        persistorRef.current = persistStore(storeRef.current);
    }

    useEffect(() => {
        if (storeRef.current !== null) {
            const unsubscribe = setupListeners(storeRef.current.dispatch);
            return unsubscribe;
        }
    }, []);

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    );
};
