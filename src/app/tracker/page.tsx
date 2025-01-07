'use client';

import AdditionalActions from '@/components/AdditionalActions';
import Section from '@/components/Section';
import StrategyProgress from '@/components/strategy/StrategyProgress';
import { CardTypes } from '@/types/enums';

export default function Page() {
    return (
        <main role='main' className='select-none w-full h-full overflow-x-hidden pt-2'>
            <div className='mt-4 w-full max-w-screen-2xl max-h-full p-0 rounded-xl bg-neutral-800 mx-auto sm:p-4 mb-4'>
                <div className='w-full p-4 py-0 rounded-xl bg-neutral-900 mx-auto sm:p-4'>
                    <StrategyProgress />
                </div>
            </div>

            <div className='relative h-2 w-full max-w-screen-2xl mx-auto my-6 sm:mb-0'>
                <AdditionalActions />
            </div>

            <div className='select-none w-full max-w-screen-2xl p-0 rounded-xl bg-neutral-800 mx-auto mb-8 md:mb-0 sm:p-4'>
                <div className='flex justify-between flex-wrap w-full p-2 rounded-xl bg-neutral-900 mx-auto sm:p-4 md:flex-nowrap'>
                    {Object.values(CardTypes).map((type) => (
                        <Section key={type} cardType={type} />
                    ))}
                </div>
            </div>
        </main>
    );
}
