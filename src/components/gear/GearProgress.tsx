import {
    selectActiveGear,
    selectGearBadges,
    toggleActiveGear,
    toggleGearBadge,
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
    const gearBadges = useAppSelector(selectGearBadges);

    const typeIndex = Object.values(CardTypes).indexOf(cardType) + 1;
    const gearIndex = [typeIndex * 2 - 1, typeIndex * 2];
    const badgeCount = gearBadges.filter((g) => g).length;

    return (
        <div className='grid grid-cols-2'>
            {gearIndex.map((currentGearIndex) => (
                <Gear
                    key={currentGearIndex}
                    cardType={cardType}
                    index={currentGearIndex}
                    badge={gearBadges[currentGearIndex - 1] ? badgeCount : 0}
                    isActive={activeGear[currentGearIndex - 1]}
                    setActive={() => dispatch(toggleActiveGear(currentGearIndex - 1))}
                    toggleBadge={() => dispatch(toggleGearBadge(currentGearIndex - 1))}
                />
            ))}
        </div>
    );
}
