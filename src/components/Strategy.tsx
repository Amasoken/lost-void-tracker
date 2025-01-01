import Image from 'next/image';
import Badge from './Badge';

interface Props {
    name: string;
    index: number;
    value: number;
    isActive: boolean;
    onClick: () => void;
}

export default function Strategy({ name, index, value, isActive, onClick }: Props) {
    return (
        <div
            className={`w-full max-w-48 text-center cursor-pointer rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 border-solid border-2 ${
                isActive ? 'border-lime-400' : 'border-neutral-900'
            }`}
            onClick={onClick}
        >
            <div className='relative flex flex-col items-center p-4 pb-0 w-full'>
                <Badge
                    className={`z-20 absolute flex justify-center items-center size-12 bg-neutral-700 rounded-full -top-2 -right-2 border-solid border-2 border-l-transparent border-b-transparent ${
                        isActive ? 'border-lime-400' : 'border-neutral-900'
                    }`}
                >
                    {value || 'X'}
                </Badge>

                <Image
                    className='z-10 rounded-md border-2 border-neutral-900'
                    src={`/strategy/${index}.webp`}
                    alt={name + ' Strategy'}
                    width={154}
                    height={126}
                />
            </div>
            <div className='h-8 text-xs text-neutral-300 font-semibold sm:text-base md:text-sm lg:h-12'>{name}</div>
        </div>
    );
}
