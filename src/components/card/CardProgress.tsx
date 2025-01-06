import { cardSelectors, setCardCount } from '@/lib/features/strategy/strategySlice';
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
        <div className='grid grid-cols-3 w-full gap-1 lg:gap-2 xl:gap-3 2xl:gap-4'>
            {Array.from({ length: 6 }, (_, index) => {
                const isActive = cardAmount >= index + 1;
                const isCurrent = cardAmount === index + 1;

                return (
                    <Card
                        key={index}
                        isActive={isActive}
                        index={index + 1}
                        cardType={cardType}
                        onClick={() => dispatch(setCardCount({ cardType, value: isCurrent ? index : index + 1 }))}
                    />
                );
            })}
        </div>
    );
}
