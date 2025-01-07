import type { ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Badge({ className = '', children }: Props) {
    return (
        <div className={className}>
            <div className='z-30 bg-transparent size-9 max-w-full max-h-full rounded-full absolute border-neutral-300 border-solid border-4'></div>
            <div className='z-20 flex items-center justify-center bg-neutral-800 size-9 max-w-full max-h-full rounded-full absolute border-purple-500 border-solid border-[6px]'>
                <div className='text-xl text-slate-300 font-semibold lg:text-2xl'>{children}</div>
            </div>
        </div>
    );
}
