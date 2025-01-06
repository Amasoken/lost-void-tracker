import type { CardTypes } from '@/types/enums';
import CardProgress from './card/CardProgress';
import GearProgress from './gear/GearProgress';

interface Props {
    cardType: CardTypes;
    className: string;
}

export default function Section({ cardType, className = '' }: Props) {
    return (
        <div className={'mb-2 rounded-xl flex flex-col justify-between max-w-[45%] bg-neutral-800 lg:p-4 ' + className}>
            <CardProgress cardType={cardType} />
            <div className='mb-2 text-center text-md whitespace-nowrap text-slate-100 text-shadow py-2 sm:text-xl lg:text-2xl xl:text-4xl'>{`[${cardType}]`}</div>
            <GearProgress cardType={cardType} />
        </div>
    );
}
