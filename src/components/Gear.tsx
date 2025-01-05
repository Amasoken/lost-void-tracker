import { CardTypes } from '@/types/enums';
import Image from 'next/image';
import type { ReactNode } from 'react';
import Badge from './Badge';

interface Props {
    cardType: CardTypes;
    index: number;
    hiddenCount: number;
    isActive: boolean;
    setActive: () => void;
    isHidden: boolean;
    setHidden: () => void;
    className?: string;
}

interface ButtonProps {
    className?: string;
    onClick: () => void;
    children: ReactNode;
}

function Button({ className = '', onClick, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`pointer rounded-lg border-2 border-solid border-neutral-600 bg-neutral-900 hover:bg-neutral-700 text-md text-slate-50 w-full h-10 ${className}`}
        >
            {children}
        </button>
    );
}

export default function Gear({ index, hiddenCount, isActive, setActive, isHidden, setHidden }: Props) {
    return (
        <div className='flex flex-col justify-self-center items-center mx-1'>
            <div className={`w-fit relative min-w-fit min-h-fit`}>
                {isHidden && <Badge>{hiddenCount}</Badge>}
                <div
                    className={`z-0 bg-transparent w-full h-full rounded-full absolute border-solid border-[6px] lg:border-8 ${
                        isActive ? 'border-lime-400' : 'border-neutral-700'
                    }`}
                />
                <Image
                    className='z-10'
                    src={`/gear/${index}.webp`}
                    alt={`Gear #${index}`}
                    width={115}
                    height={115}
                />
            </div>

            <div className='flex flex-col whitespace-nowrap w-full max-w-full h-full justify-between mt-2 '>
                <Button onClick={setActive} className='lg:h-12 lg:text-xl'>
                    {isActive ? 'Remove' : 'Add +'}
                </Button>
                <Button onClick={setHidden} className='mt-2 lg:h-12 lg:text-xl'>
                    {isHidden ? 'Badge –' : 'Badge +'}
                </Button>
            </div>
        </div>
    );
}
