import { StoreProvider } from '@/lib/StoreProvider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

interface Props {
    readonly children: ReactNode;
}

export const metadata: Metadata = {
    title: 'Lost Void Tracker',
    applicationName: 'Lost Void Tracker',
    description: "Track your Gear and Strategy progress in Zenless Zone Zero's gamemode Lost Void.",
    keywords: ['Lost Void', 'Zenless Zone Zero', 'Tracker'],
    creator: 'Amasoken',
    authors: [{ name: 'Amasoken' }],
    robots: 'index, follow',
};

export default function TrackerLayout({ children }: Props) {
    return <StoreProvider>{children}</StoreProvider>;
}
