import { CardTypes } from '@/types/enums';
import Image from 'next/image';
import CardGradient from './CardGradient';

interface Props {
    cardType: CardTypes;
    isActive: boolean;
    index: number;
    onClick: () => void;
    className?: string;
}

export default function Card({ isActive, index, onClick, className = '', cardType }: Props) {
    const activeClass = `${isActive ? '' : 'opacity-20 hover:opacity-50'} ${className}`;
    const levelHint = index % 2 === 0 ? 'lvl ' + (Math.floor(index / 2) + 1) : '';

    return (
        <CardGradient
            className={`cursor-pointer flex flex-col items-center justify-between aspect-[3/4] w-24 max-w-full rounded-md border-2 border-solid border-transparent hover:border-lime-400 ${activeClass}`}
            onClick={onClick}
            cardType={cardType}
        >
            <div className='relative w-full max-w-full aspect-square flex items-center justify-center lg:w-[80%]'>
                <span className='z-10 text-xl text-slate-100 text-shadow lg:text-3xl'>{index}</span>
                <Image
                    className='absolute z-0 w-full'
                    src={`/cards/${cardType}.webp`}
                    alt={cardType + ' card'}
                    width={113}
                    height={113}
                />
            </div>
            {levelHint && (
                <span className='z-10 text-center text-xs text-slate-100 text-shadow leading-none lg:text-base'>
                    {levelHint}
                </span>
            )}
        </CardGradient>
    );
}
