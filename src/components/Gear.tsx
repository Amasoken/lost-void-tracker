import { CardTypes } from '@/types/enums';
import Image from 'next/image';
import Badge from './Badge';
import Button from './common/Button';

interface Props {
    cardType: CardTypes;
    index: number;
    hiddenCount: number;
    isActive: boolean;
    setActive: () => void;
    isHidden: boolean;
    setHidden: () => void;
    className?: string;
}

export default function Gear({ index, hiddenCount, isActive, setActive, isHidden, setHidden }: Props) {
    return (
        <div className='flex flex-col justify-self-center items-center mx-1'>
            <div className={`w-fit relative min-w-fit min-h-fit`}>
                {isHidden && <Badge>{hiddenCount}</Badge>}
                <div
                    className={`z-0 bg-transparent w-full h-full rounded-full absolute border-solid border-[6px] lg:border-8 ${
                        isActive ? 'border-lime-400' : 'border-neutral-700'
                    }`}
                />
                <Image className='z-10' src={`/gear/${index}.webp`} alt={`Gear #${index}`} width={115} height={115} />
            </div>

            <div className='flex flex-col whitespace-nowrap w-full max-w-full h-full justify-between mt-2 '>
                <Button onClick={setActive} className='lg:h-12 lg:text-xl'>
                    {isActive ? 'Remove' : 'Add +'}
                </Button>
                <Button onClick={setHidden} className='mt-2 lg:h-12 lg:text-xl'>
                    {isHidden ? 'Badge –' : 'Badge +'}
                </Button>
            </div>
        </div>
    );
}
