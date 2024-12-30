import { selectActive, selectHidden, toggleActive, toggleHidden } from '@/lib/features/gear/gearSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { CardTypes } from '@/types/enums';
import Gear from './Gear';

interface Props {
    cardType: CardTypes;
    className?: string;
}

export default function GearProgress({ cardType }: Props) {
    const dispatch = useAppDispatch();
    const activeGear = useAppSelector(selectActive);
    const hiddenGear = useAppSelector(selectHidden);

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
                    active={activeGear[currentGearIndex - 1]}
                    setActive={() => dispatch(toggleActive(currentGearIndex - 1))}
                    hidden={hiddenGear[currentGearIndex - 1]}
                    setHidden={() => dispatch(toggleHidden(currentGearIndex - 1))}
                />
            ))}
        </div>
    );
}
