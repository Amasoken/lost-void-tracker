import { CardTypes } from '@/types/enums';
import BaseButton, { type Props as ButtonProps } from '../common/Button';
import CardGradient from '../card/CardGradient';

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
    hiddenTypes: CardTypes[];
    toggleType: (type: CardTypes) => void;
}

export default function TypeDisplay({ isOpen, setOpen, hiddenTypes, toggleType }: Props) {
    return (
        <div className='flex ml-2'>
            <Button
                className='px-2 md:px-4 max-w-fit mb-0 text-nowrap text-sm sm:text-base'
                border={'border-neutral-800 hover:border-lime-400'}
                background={`bg-neutral-800 hover:bg-neutral-700`}
                onClick={() => setOpen(!isOpen)}
            >
                Type {isOpen ? '◄' : '►'}
            </Button>

            {isOpen &&
                Object.values(CardTypes).map((type) => (
                    <div
                        className='bg-neutral-900 rounded-lg mb-2 ml-2 aspect-square has-tooltip'
                        data-tooltip={`[ ${type} ]`}
                        key={type}
                    >
                        <CardGradient
                            className={`rounded-lg w-full h-full hover:opacity-100 ${
                                hiddenTypes.includes(type) ? 'opacity-10' : 'opacity-70'
                            }`}
                            cardType={type}
                        >
                            <Button
                                className='w-12 bg-transparent h-full'
                                border='border-neutral-800'
                                background=''
                                onClick={() => toggleType(type)}
                                key={type}
                            ></Button>
                        </CardGradient>
                    </div>
                ))}
        </div>
    );
}
