import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Lost Void Tracker | Zenless Zone Zero',
    applicationName: 'Lost Void Tracker',
    description:
        'A fan-made tool for tracking your Gear and Strategy progress in the Lost Void gamemode of Zenless Zone Zero.',
    keywords: ['Lost Void', 'Zenless Zone Zero', 'Tracker'],
    creator: 'Amasoken',
    authors: [{ name: 'Amasoken' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://lost-void-tracker.vercel.app/',
        title: 'Lost Void Tracker',
        description: 'Track your Gear badges and Strategy progress in the Lost Void gamemode of Zenless Zone Zero.',
        siteName: 'Lost Void Tracker',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Image of the Lost Void Tracker website',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lost Void Tracker',
        description: 'Track your Gear badges and Strategy progress in the Lost Void gamemode of Zenless Zone Zero.',
        images: ['/og-image.jpg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen bg-neutral-900`}
            >
                {children}
            </body>
        </html>
    );
}
