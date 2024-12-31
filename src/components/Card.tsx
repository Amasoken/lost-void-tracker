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
    const activeClass = `${isActive ? '' : 'opacity-20 hover:opacity-70'} ${className}`;
    const levelHint = index % 2 === 0 ? 'lvl ' + (Math.floor(index / 2) + 1) : '';

    return (
        <CardGradient
            className={`cursor-pointer select-none flex flex-col items-center justify-between w-24 h-32 m-1 rounded-md border-2 border-solid border-transparent hover:border-lime-400 ${activeClass}`}
            onClick={onClick}
            cardType={cardType}
        >
            <div className='relative w-20 h-20 flex items-center justify-center mt-1'>
                <span className='z-10 text-4xl text-slate-100 text-shadow '>{index}</span>
                <Image
                    className='absolute z-0'
                    src={`/cards/${cardType}.webp`}
                    alt={cardType + ' card'}
                    width={113}
                    height={113}
                />
            </div>
            {levelHint && <span className='z-10 text-center text-lg text-slate-100 text-shadow'>{levelHint}</span>}
        </CardGradient>
    );
}
