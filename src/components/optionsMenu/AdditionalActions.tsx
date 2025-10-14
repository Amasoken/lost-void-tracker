import { CardTypes } from '@/types/enums';
import BaseButton, { type Props as ButtonProps } from '../common/Button';

const withSpacing = (WrappedComponent: React.FC<ButtonProps>) => {
    return function ButtonWithSpacing(props: ButtonProps) {
        const { className = '', ...restProps } = props;
        return <WrappedComponent className={`mb-2 px-2 ${className}`} {...restProps} />;
    };
};

const Button = withSpacing(BaseButton);

interface Props {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    exportData: () => void;
    importData: () => Promise<void>;
    resetGearAndCards: () => void;
    resetGear: () => void;
    resetCards: () => void;
    clearBadges: () => void;
    clearState: () => void;
    columns: number;
    setColumns: (count: number) => void;
}

export default function AdditionalActions({
    isOpen,
    setOpen,
    exportData,
    importData,
    resetGearAndCards,
    resetGear,
    resetCards,
    clearBadges,
    clearState,
    columns,
    setColumns,
}: Props) {
    return (
        <div>
            <Button
                className='px-2 md:px-4 max-w-fit mb-0 text-nowrap text-sm sm:text-base'
                border={isOpen ? 'border-lime-400' : 'border-neutral-800 hover:border-lime-400'}
                background={`${isOpen ? 'bg-neutral-700' : 'bg-neutral-800'} hover:bg-neutral-700`}
                onClick={() => setOpen(!isOpen)}
            >
                Options {isOpen ? '▲' : '▼'}
            </Button>

            {isOpen && (
                <div className='bg-neutral-800 rounded-xl w-80 h-max p-4 border-4 border-solid border-lime-400 absolute'>
                    <div className='bg-neutral-900 rounded-xl flex flex-col max-w-80 px-4 py-6'>
                        <div className='mb-8'>
                            <span>Fix column amount to:</span>
                            <div className='flex'>
                                <BaseButton
                                    border={
                                        columns === 0 ? 'border-lime-400' : 'border-neutral-800 hover:border-lime-400'
                                    }
                                    onClick={() => setColumns(0)}
                                >
                                    Auto
                                </BaseButton>
                                {Object.values(CardTypes).map((type, i) => (
                                    <BaseButton
                                        border={
                                            columns === i + 1
                                                ? 'border-lime-400'
                                                : 'border-neutral-800 hover:border-lime-400'
                                        }
                                        key={type}
                                        onClick={() => setColumns(i + 1)}
                                    >
                                        {i + 1}
                                    </BaseButton>
                                ))}
                            </div>
                        </div>

                        <Button onClick={resetGearAndCards}>Clear Cards and Gear</Button>
                        <div className='flex'>
                            <Button onClick={resetGear}>Clear Cards</Button>
                            <Button className='mb-8' onClick={resetCards}>
                                Clear Gear
                            </Button>
                        </div>

                        <Button onClick={exportData}>Export data</Button>
                        <Button className='mb-8' onClick={importData}>
                            Import data
                        </Button>

                        <Button onClick={clearBadges} className='opacity-50 hover:opacity-100'>
                            Clear Badges (this Strategy)
                        </Button>
                        <Button onClick={clearState} className='opacity-50 hover:opacity-100'>
                            Clear EVERYTHING
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
