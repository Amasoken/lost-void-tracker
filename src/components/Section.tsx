import type { CardTypes } from '@/types/enums';
import CardProgress from './CardProgress';
import GearProgress from './GearProgress';

interface Props {
    cardType: CardTypes;
    className: string;
}

export default function Section({ cardType, className = '' }: Props) {
    return (
        <div className={'bg-teal-400 flex flex-col justify-between max-w-fit ' + className}>
            <CardProgress cardType={cardType} />
            <div className='bg-blue-400 text-center text-4xl py-2'>{`[${cardType}]`}</div>
            <GearProgress cardType={cardType} />
        </div>
    );
}
