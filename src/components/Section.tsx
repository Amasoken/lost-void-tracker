import type { CardTypes } from '@/types/enums';
import CardProgress from './CardProgress';
import GearProgress from './GearProgress';

interface Props {
    cardType: CardTypes;
    className: string;
}

export default function Section({ cardType, className = '' }: Props) {
    return (
        <div className={'flex flex-col justify-between max-w-fit ' + className}>
            <div className='text-center text-4xl text-slate-100 text-shadow py-2'>{`[${cardType}]`}</div>
            <CardProgress cardType={cardType} />
            <GearProgress cardType={cardType} />
        </div>
    );
}
