interface Props {
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen font-[family-name:var(--font-geist-sans)]'>
            <main role='main' className='bg-neutral-800 rounded-xl p-4 max-w-screen-sm w-full max-h-[60%] h-full'>
                <div className='bg-neutral-900 rounded-xl p-4 w-full h-full'>
                    <div className='h-full flex flex-col'>{children}</div>
                </div>
            </main>

            <footer className='fixed w-full py-1 px-4 bg-neutral-800 text-neutral-500 bottom-0 text-center'>
                <p>
                    This is a fan-made website and is not affiliated with or endorsed by miHoYo. All in-game content is
                    the property of miHoYo Co., Ltd.
                </p>
            </footer>
        </div>
    );
}
