'use client';

import Section from '@/components/Section';
import { CardTypes } from '@/types/enums';

export default function Page() {
    return (
        <div className='grid grid-flow-col w-full max-h-full bg-red-900'>
            {Object.values(CardTypes).map((type) => (
                <Section key={type} cardType={type} className='mx-2' />
            ))}
        </div>
    );
}
