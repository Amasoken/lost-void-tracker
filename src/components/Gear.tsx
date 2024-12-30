import { CardTypes } from '@/types/enums';
import Image from 'next/image';

interface Props {
    cardType: CardTypes;
    index: number;
    hiddenCount: number;
    active: boolean;
    setActive: () => void;
    hidden: boolean;
    setHidden: () => void;
    className?: string;
}

export default function Gear({ index, hiddenCount, active, setActive, hidden, setHidden }: Props) {
    return (
        <div className='bg-amber-300 flex flex-col justify-self-center mx-2 mt-4'>
            <div className={`bg-green-600 w-fit relative min-w-fit min-h-fit`}>
                {hidden && (
                    <div className='z-20 bg-slate-600 w-9 h-9 text-center text-2xl text-slate-300 select-none rounded-full absolute border-slate-400 border-solid border-4 leading-tight'>
                        {hiddenCount}
                    </div>
                )}
                <div
                    className={`z-0 bg-transparent w-full h-full rounded-full absolute border-solid border-8 ${
                        active ? 'border-lime-400' : 'border-slate-800'
                    }`}
                ></div>
                <Image className={`z-10`} src={`/artifacts/${index}.webp`} alt='bruh' width={115} height={115} />
            </div>
            <div className='flex w-fit bg-red-400 max-w-fit h-full justify-between'>
                <button
                    onClick={setActive}
                    className='pointer rounded-lg border-2 border-solid border-slate-800 bg-slate-500 text-2xl text-slate-50 w-16 h-12'
                >
                    {active ? '-' : '+'}
                </button>
                <button
                    onClick={setHidden}
                    className='pointer rounded-lg border-2 border-solid border-slate-800 bg-slate-500 text-2xl text-slate-50 w-16 h-12'
                >
                    {hidden ? 'x' : '✔'}
                </button>
            </div>
        </div>
    );
}
