import { CardTypes } from '@/types/enums';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface Props {
    cardType: CardTypes;
    index: number;
    hiddenCount: number;
    active: boolean;
    setActive: () => void;
    hidden: boolean;
    setHidden: () => void;
    className?: string;
}

interface ButtonProps {
    className?: string;
    onClick: () => void;
    children: ReactNode;
}

function Button({ className, onClick, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`pointer rounded-lg border-2 border-solid border-neutral-600 bg-neutral-900 hover:bg-neutral-700 text-xl text-slate-50 w-full h-12 ${className}`}
        >
            {children}
        </button>
    );
}

interface BadgeProps {
    children: ReactNode;
}

function Badge({ children }: BadgeProps) {
    return (
        <>
            <div className='z-30 bg-transparent w-9 h-9 rounded-full absolute border-neutral-300 border-solid border-4'></div>
            <div className='z-20 bg-neutral-800 w-9 h-9 text-center text-2xl text-slate-300 font-semibold rounded-full absolute border-purple-500 border-solid border-[6px] leading-none'>
                {children}
            </div>
        </>
    );
}

export default function Gear({ index, hiddenCount, active, setActive, hidden, setHidden }: Props) {
    return (
        <div className='flex flex-col justify-self-center items-center mx-2 mt-4 select-none'>
            <div className={`w-fit relative min-w-fit min-h-fit`}>
                {hidden && <Badge>{hiddenCount}</Badge>}
                <div
                    className={`z-0 bg-transparent w-full h-full rounded-full absolute border-solid border-8 ${
                        active ? 'border-lime-400' : 'border-neutral-700'
                    }`}
                />
                <Image className={`z-10`} src={`/artifacts/${index}.webp`} alt='bruh' width={115} height={115} />
            </div>

            <div className='flex flex-col w-full max-w-full h-full justify-between mt-2'>
                <Button onClick={setActive}>{active ? 'Remove' : 'Add +'}</Button>
                <Button onClick={setHidden} className='mt-2'>
                    {hidden ? 'Badge –' : 'Badge +'}
                </Button>
            </div>
        </div>
    );
}
