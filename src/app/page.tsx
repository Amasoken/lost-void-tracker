import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen font-[family-name:var(--font-geist-sans)]'>
            <main className='bg-neutral-800 rounded-xl p-4 max-w-screen-sm w-full max-h-[50%] h-full'>
                <div className='bg-neutral-900 rounded-xl p-4 w-full h-full'>
                    <div className='h-full flex flex-col'>
                        <Link href='/tracker'>
                            <button className='mb-2 w-full h-12 text-xl pointer rounded-lg border-2 border-solid border-neutral-600 bg-neutral-900 hover:bg-neutral-700 text-slate-50'>
                                Lost Void Tracker
                            </button>
                        </Link>
                        <div className='max-h-full overflow-y-auto text-justify'>
                            <ol>
                                <br />
                                <li>Lost Void tracker for Zenless Zone Zero.</li>
                                <li>Made to keep track of your Gear badges per Strategy.</li>
                                <li>Think of this as a notepad on a separate window or screen.</li>
                                <br />
                                <li>Mark your Gear and Cards in your Lost Void run,</li>
                                <li>
                                    Aim to finish the run with some Gear and at least 4 Cards of the corresponding type,
                                </li>
                                <li>
                                    And when you get the shiny badge, mark it so you know which Gear you do or do not
                                    want in yout next run.
                                </li>
                                <br />
                                <li>Repeat until all the Strategies have all 8 Gear challenge completed,</li>
                                <li>And the entire Strategy collection has shiny 8 badges.</li>
                                <br />

                                <li>
                                    You can find the project on{' '}
                                    <Link
                                        href='https://github.com/Amasoken/lost-void-tracker'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        GitHub
                                    </Link>
                                </li>
                            </ol>
                        </div>
                    </div>
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
