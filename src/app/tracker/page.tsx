'use client';

import OptionsMenu from '@/components/optionsMenu/OptionsMenu';
import Section from '@/components/Section';
import StrategyProgress from '@/components/strategy/StrategyProgress';
import { selectColumnCount, selectHiddenTypes } from '@/lib/features/strategy/strategySlice';
import { CardTypes } from '@/types/enums';
import { useSelector } from 'react-redux';

const sectionLayout: { [k: number]: string } = {
    0: 'flex justify-around flex-wrap xl:flex-nowrap',
    1: 'grid grid-cols-1',
    2: 'grid grid-cols-2',
    3: 'grid grid-cols-3',
    4: 'grid grid-cols-4',
    5: 'grid grid-cols-5',
} as const;

export default function Page() {
    const columns = useSelector(selectColumnCount);
    const hiddenTypes = useSelector(selectHiddenTypes);

    const sectionClassName = columns ? 'min-w-fit' : '';

    return (
        <main role='main' className='select-none w-full h-full overflow-x-hidden pt-2'>
            <div className='mt-4 w-full max-w-screen-2xl max-h-fit p-0 rounded-xl bg-neutral-800 mx-auto sm:p-4 mb-4'>
                <div className='w-full p-4 py-0 rounded-xl bg-neutral-900 mx-auto sm:p-4'>
                    <StrategyProgress />
                </div>
            </div>

            <div className='relative h-2 w-full max-w-screen-2xl mx-auto my-6 sm:mb-0'>
                <OptionsMenu />
            </div>

            <div className='select-none w-full max-w-screen-2xl p-0 rounded-xl bg-neutral-800 mx-auto mb-10 sm:p-4'>
                <div
                    className={`p-2 rounded-xl bg-neutral-900 mx-auto sm:p-4 overflow-hidden overflow-x-auto place-items-center ${sectionLayout[columns]}`}
                >
                    {Object.values(CardTypes).map((type) =>
                        hiddenTypes.includes(type) ? null : (
                            <Section key={type} cardType={type} className={sectionClassName} />
                        )
                    )}
                </div>
            </div>
        </main>
    );
}
