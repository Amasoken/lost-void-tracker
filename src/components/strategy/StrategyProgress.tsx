import { selectBadgeCount, selectCurrentStrategy, setCurrentStrategy } from '@/lib/features/strategy/strategySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Strategy from './Strategy';

const strategyList: string[] = [
    'Sneak Attack',
    'Upper Hand',
    'Speed Combo',
    'Resonium Passion',
    'Treasure Hunter',
    'Fully Armed',
    'Entrepreneurs',
    'Recovery',
    'Looting',
    'Defence',
    'Ambush',
    'Reinforcement',
];

export default function StrategyProgress() {
    const dispatch = useAppDispatch();
    const currentStrategy = useAppSelector(selectCurrentStrategy);
    const progressByStrategy = useAppSelector(selectBadgeCount);

    return (
        <div className='w-full grid justify-items-center grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12'>
            {strategyList.map((strategy, index) => (
                <Strategy
                    key={strategy}
                    name={strategy}
                    index={index + 1}
                    value={progressByStrategy[index]}
                    isActive={index + 1 === currentStrategy}
                    onClick={() => dispatch(setCurrentStrategy(index + 1))}
                />
            ))}
        </div>
    );
}
