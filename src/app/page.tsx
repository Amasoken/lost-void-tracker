import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex items-center justify-center w-screen h-screen font-[family-name:var(--font-geist-sans)]'>
            <main className='bg-neutral-800 rounded-xl p-4 max-w-screen-sm w-full max-h-[50%] h-full'>
                <div className='bg-neutral-900 rounded-xl p-4 w-full h-full'>
                    <div className='bg-neutral-900'>
                        <Link href='/tracker'>
                            <button className='mb-2 w-full h-12 text-xl pointer rounded-lg border-2 border-solid border-neutral-600 bg-neutral-900 hover:bg-neutral-700 text-slate-50'>
                                Lost Void Tracker
                            </button>
                        </Link>
                        <ol>
                            <li>Lost Void tracker for Zenless Zone Zero.</li>
                            <li>Made to keep track of your Gear challenges per Strategy.</li>
                            <li>Think of this as a notepad on a separate window or screen.</li>
                            <br />
                            <li>Mark your Gear and Cards in your Lost Void run,</li>
                            <li>
                                Aim to finish the run with some Gear and at least 4 Cards of the corresponding type,
                            </li>
                            <li>
                                And when you get the shiny badge, mark it so you know which Gear you do or do not want
                                in yout next run.
                            </li>
                            <br />
                            <li>Repeat until all the Strategies have all 8 Gear challenge completed,</li>
                            <li>And the entire Strategy collection has shiny 8 badges.</li>
                        </ol>
                    </div>
                </div>
            </main>

            <div className='max-w-[80%] fixed right-0 bottom-0'>
                <Image src={'/404.webp'} width={512} height={512} alt='' priority />
            </div>

            <div className='fixed right-0 bottom-0 py-1 px-2 text-shadow'>UID: NOTHANKYOU</div>
        </div>
    );
}
