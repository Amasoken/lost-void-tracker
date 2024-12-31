'use client';

import Section from '@/components/Section';
import StrategyProgress from '@/components/StrategyProgress';
import { CardTypes } from '@/types/enums';

export default function Page() {
    return (
        <div className='w-full h-full overflow-x-hidden'>
            <div className='mt-4 flex w-full max-w-screen-2xl max-h-full p-6 rounded-xl bg-neutral-800 mx-auto'>
                <div className='flex w-full px-6 py-4 rounded-xl bg-neutral-900 mx-auto overflow-y-auto'>
                    <StrategyProgress />
                </div>
            </div>

            <div className='flex w-full max-w-screen-2xl p-10 rounded-xl bg-neutral-800 mx-auto'>
                <div className='flex justify-between w-full p-10 rounded-xl bg-neutral-900 mx-auto'>
                    {Object.values(CardTypes).map((type) => (
                        <Section key={type} cardType={type} className='mx-2' />
                    ))}
                </div>
            </div>
        </div>
    );
}
