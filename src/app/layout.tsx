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
    title: 'Lost Void Tracker',
    applicationName: 'Lost Void Tracker',
    description: "Track your Gear and Strategy progress in Zenless Zone Zero's gamemode Lost Void.",
    keywords: ['Lost Void', 'Zenless Zone Zero', 'Tracker'],
    creator: 'Amasoken',
    authors: [{ name: 'Amasoken' }],
    robots: 'index, follow',
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
