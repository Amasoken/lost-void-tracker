import {
    selectCurrentStrategy,
    selectStrategyProgress,
    setCurrentStrategy,
} from '@/lib/features/strategy/strategySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Strategy from './Strategy';

const strategyList: string[] = [
    'Resonium Passion Strategy',
    'Treasure Hunter Strategy',
    'Fully Armed Strategy',
    'Entrepreneurs Strategy',
    'Recovery Strategy',
    'Looting Strategy',
    'Defence Strategy',
    'Ambush Strategy',
    'Reinforcement Strategy',
];

export default function StrategyProgress() {
    const dispatch = useAppDispatch();
    const currentStrategy = useAppSelector(selectCurrentStrategy);
    const strategyProgress = useAppSelector(selectStrategyProgress);

    return (
        <div className='w-full min-w-max flex justify-between'>
            {strategyList.map((strategy, index) => (
                <Strategy
                    key={strategy}
                    name={strategy}
                    index={index + 1}
                    value={strategyProgress[index]}
                    isActive={index + 1 === currentStrategy}
                    onClick={() => dispatch(setCurrentStrategy(index + 1))}
                />
            ))}
        </div>
    );
}
