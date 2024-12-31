import type { ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Badge({ className = '', children }: Props) {
    return (
        <div className={className}>
            <div className='z-30 bg-transparent w-9 h-9 rounded-full absolute border-neutral-300 border-solid border-4'></div>
            <div className='z-20 bg-neutral-800 w-9 h-9 text-center text-2xl text-slate-300 font-semibold rounded-full absolute border-purple-500 border-solid border-[6px] leading-none'>
                {children}
            </div>
        </div>
    );
}
