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
            className={` max-w-[10%] m-2 min-h-max max-h-100 text-center select-none cursor-pointer rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 border-solid border-2 ${
                isActive ? 'border-lime-400' : 'border-neutral-900'
            }`}
            onClick={onClick}
        >
            <div className='relative p-4 h-52'>
                <Badge
                    className={`z-20 absolute flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full -top-2 -right-2 border-solid border-2 border-l-transparent border-b-transparent ${
                        isActive ? 'border-lime-400' : 'border-neutral-900'
                    }`}
                >
                    {value}
                </Badge>

                <Image
                    className='z-10 rounded-md border-2 border-neutral-900'
                    src={`/strategy/${index}.webp`}
                    alt={name}
                    width={154}
                    height={126}
                />
                <div className='bg-cyan-800 relative flex'>
                    <span className='w-full absolute top-[-0.5rem] text-xl text-neutral-300 font-sans font-semibold text-shadow'>
                        {name}
                    </span>
                </div>
            </div>
        </div>
    );
}
