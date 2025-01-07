import { StoreProvider } from '@/lib/StoreProvider';
import type { ReactNode } from 'react';

interface Props {
    readonly children: ReactNode;
}

export default function TrackerLayout({ children }: Props) {
    return <StoreProvider>{children}</StoreProvider>;
}
