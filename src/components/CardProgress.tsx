import { cardSelectors, setCardCount } from '@/lib/features/card/cardSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { CardTypes } from '@/types/enums';
import Card from './Card';

interface Props {
    cardType: CardTypes;
}

export default function CardProgress({ cardType }: Props) {
    const dispatch = useAppDispatch();
    const cardAmount = useAppSelector(cardSelectors[cardType]);

    return (
        <div className='flex min-w-max'>
            <div className='grid grid-cols-3'>
                {new Array(6).fill(null).map((_, index) => (
                    <Card
                        key={index}
                        active={cardAmount >= index + 1}
                        index={index + 1}
                        cardType={cardType}
                        onClick={() => dispatch(setCardCount({ cardType, value: index + 1 }))}
                    />
                ))}
            </div>
        </div>
    );
}
