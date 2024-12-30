import { CardTypes } from '@/types/enums';
import type { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    cardType: CardTypes;
    className: string;
    children: ReactNode;
}

const gradients = {
    [CardTypes.ultimate]: 'bg-gradient-to-b from-[#C66915] via-[#FFAD20] to-[#C66915] from-0% via-30%',
    [CardTypes.anomaly]: 'bg-gradient-to-b from-[#2F711F] via-[#58B241] to-[#2F711F] from-0% via-30%',
    [CardTypes.dexterity]: 'bg-gradient-to-b from-[#F14719] via-[#F9D203] to-[#F14719] from-0% via-30%',
    [CardTypes.adversity]: 'bg-gradient-to-b from-[#646464] via-[#EBE6E6] to-[#646464] from-0% via-30%',
};

export default function CardGradient({ cardType, children, className = '', ...rest }: Props) {
    return (
        <div className={`${gradients[cardType]} ${className}`} {...rest}>
            {children}
        </div>
    );
}
