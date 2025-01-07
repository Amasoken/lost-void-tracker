import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='bg-neutral-800 rounded-xl p-4 mx-8 max-w-screen-sm w-full max-h-[50%] h-full'>
                <div className='bg-neutral-900 rounded-xl p-4 w-full h-full'>
                    <h1>404 Not Found</h1>
                    <h2>That's not the page you're looking for.</h2>
                    <br />
                    <Link href='/'>
                        <h3>Return Home</h3>
                    </Link>
                </div>
            </div>

            <div className='z-10 fixed whitespace-nowrap right-0 bottom-0 py-1 px-2 text-shadow'>UID: NOTHANKYOU</div>
            <div className='z-0 fixed max-w-[80%] right-0 bottom-0'>
                <Image src={'/404.webp'} width={512} height={512} alt='' priority />
            </div>
        </div>
    );
}
