import MainLayout from '@/components/common/MainLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <MainLayout>
            <div className='relative w-1/3 aspect-square'>
                <h1 className='text-nowrap'>404 Not Found</h1>

                <div className='w-full aspect-square absolute bottom-0'>
                    <Link
                        href='https://zenless.hoyoverse.com/en-us/news/127524'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image src={'/Miyabi02.webp'} width={512} height={512} alt='' priority />
                    </Link>
                </div>
            </div>

            <h2>
                That&apos;s not the page you&apos;re looking for. <Link href='/'>Return Home</Link>
            </h2>

            <div className='z-20 fixed whitespace-nowrap right-0 bottom-0 py-1 px-2 text-shadow'>UID: NOTHANKYOU</div>
            <div className='z-10 fixed right-0 bottom-0 max-w-[50%] max-h-[80%] aspect-square'>
                <div className='w-[512px] h-[512px] max-w-full max-h-full overflow-hidden aspect-square bg-[url(/404.webp)] bg-cover'></div>
            </div>
        </MainLayout>
    );
}
