import { type HTMLAttributes, type ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    border?: string;
    background?: string;
}

export default function Button({
    children,
    className = '',
    border = 'border-neutral-600',
    background = 'bg-neutral-900 hover:bg-neutral-700',
    ...restProps
}: Props) {
    return (
        <button
            className={`w-full pointer h-10 rounded-lg border-2 border-solid ${border} ${background} text-slate-50 text-md ${className}`}
            {...restProps}
        >
            {children}
        </button>
    );
}
