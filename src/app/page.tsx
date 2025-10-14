import Button from '@/components/common/Button';
import MainLayout from '@/components/common/MainLayout';
import Link from 'next/link';

export default function Home() {
    return (
        <MainLayout>
            <Link className='m-2' href='/tracker'>
                <Button className='h-12 text-xl'>Lost Void Tracker</Button>
            </Link>

            <div className='mx-2 max-h-full overflow-y-auto text-justify'>
                <p className='mt-4'>
                    Lost Void tracker for{' '}
                    <Link href='https://zenless.hoyoverse.com/en-us/' target='_blank' rel='noopener noreferrer'>
                        Zenless Zone Zero
                    </Link>{' '}
                    is made to keep track of your Gear badges per Strategy. Think of this as a notepad on a separate
                    window or screen.
                </p>

                <p className='mt-4'>
                    Mark your Gear and Cards in your Lost Void run. Aim to finish the run with some Gear and at least 4
                    Cards of the corresponding type. When you get the shiny badge, mark it so you know which Gear you do
                    or do not want in your next run.
                </p>

                <p className='mt-4'>
                    Repeat until all the Strategies have all 8 Gear challenge (badges) completed, and the entire
                    Strategy collection has shiny 8 badges.
                </p>

                <p className='mt-4'>
                    You can find this project on{' '}
                    <Link
                        href='https://github.com/Amasoken/lost-void-tracker'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </Link>
                </p>
                <p className='mt-4'>
                    Have feedback? Leave a comment on{' '}
                    <Link
                        href='https://www.reddit.com/r/ZZZ_Official/comments/1hwnjze/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Reddit
                    </Link>{' '}
                    or open an{' '}
                    <Link
                        href='https://github.com/Amasoken/lost-void-tracker/issues'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        issue
                    </Link>{' '}
                    on GitHub. You can also <Link href='/tracker/reset-data'>clear your saved data</Link> if you
                    experience errors.
                </p>
            </div>
        </MainLayout>
    );
}
