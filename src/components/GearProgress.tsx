import {
    selectActiveGear,
    selectHiddenGear,
    toggleActiveGear,
    toggleHiddenGear,
} from '@/lib/features/strategy/strategySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { CardTypes } from '@/types/enums';
import Gear from './Gear';

interface Props {
    cardType: CardTypes;
    className?: string;
}

export default function GearProgress({ cardType }: Props) {
    const dispatch = useAppDispatch();
    const activeGear = useAppSelector(selectActiveGear);
    const hiddenGear = useAppSelector(selectHiddenGear);

    const typeIndex = Object.values(CardTypes).indexOf(cardType) + 1;
    const gearIndex = [typeIndex * 2 - 1, typeIndex * 2];
    const hiddenCount = hiddenGear.filter((g) => g).length;

    return (
        <div className='grid grid-cols-2'>
            {gearIndex.map((currentGearIndex) => (
                <Gear
                    key={currentGearIndex}
                    cardType={cardType}
                    index={currentGearIndex}
                    hiddenCount={hiddenCount}
                    isActive={activeGear[currentGearIndex - 1]}
                    setActive={() => dispatch(toggleActiveGear(currentGearIndex - 1))}
                    isHidden={hiddenGear[currentGearIndex - 1]}
                    setHidden={() => dispatch(toggleHiddenGear(currentGearIndex - 1))}
                />
            ))}
        </div>
    );
}
