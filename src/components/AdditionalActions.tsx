import {
    importState,
    resetCurrentBadges,
    resetCurrentCards,
    resetCurrentGear,
    resetCurrentGearAndCards,
    resetState,
    selectState,
} from '@/lib/features/strategy/strategySlice';
import { useAppDispatch } from '@/lib/hooks';
import stateSchema from '@/lib/validation/stateSchema';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BaseButton, { Props as ButtonProps } from './common/Button';

const withSpacing = (WrappedComponent: React.FC<ButtonProps>) => {
    return function ButtonWithSpacing(props: ButtonProps) {
        const { className = '', ...restProps } = props;
        return <WrappedComponent className={`mb-2 px-2 ${className}`} {...restProps} />;
    };
};

const Button = withSpacing(BaseButton);

export default function AdditionalActions() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const state = useSelector(selectState);

    const handleClearBadges = () => {
        if (confirm('Reset every badge for the current Strategy?')) {
            dispatch(resetCurrentBadges());
        }
    };

    const handleClearState = () => {
        if (confirm('Reset every Card, Gear, badges for every strategy?')) {
            dispatch(resetState());
        }
    };

    const handleExport = () => {
        prompt("Here's your data. Copy it and store somewhere", JSON.stringify(state));
    };

    const handleImport = () => {
        const data = prompt('Enter the data to import:');
        if (!data) {
            return;
        }

        const showError = (error: unknown) => {
            alert(`Please provide a valid JSON you got with export.\nError: ${error}`);
        };

        let json;

        try {
            json = JSON.parse(data);
        } catch (error) {
            return showError(error);
        }

        stateSchema
            .validate(json)
            .then(() => {
                dispatch(importState({ state: json }));
                alert('Import success!');
            })
            .catch(showError);
    };

    return (
        <div className='z-40 left-4 sm:left-10 -top-4 absolute'>
            <Button
                className='px-4 max-w-fit mb-0'
                border={menuOpen ? 'border-lime-400' : 'border-neutral-800 hover:border-lime-400'}
                background={`${menuOpen ? 'bg-neutral-700' : 'bg-neutral-800'} hover:bg-neutral-700`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                More actions ►
            </Button>

            {menuOpen && (
                <div className='bg-neutral-800 rounded-xl w-80 h-max p-4 border-4 border-solid border-lime-400'>
                    <div className='bg-neutral-900 rounded-xl flex flex-col max-w-80 px-4 py-6'>
                        <Button onClick={() => dispatch(resetCurrentGearAndCards())}>Clear Cards and Gear</Button>
                        <div className='flex'>
                            <Button onClick={() => dispatch(resetCurrentCards())}>Clear Cards</Button>
                            <Button onClick={() => dispatch(resetCurrentGear())}>Clear Gear</Button>
                        </div>
                        <br />
                        <Button onClick={handleExport}>Export data</Button>
                        <Button onClick={handleImport}>Import data</Button>
                        <br />
                        <Button onClick={handleClearBadges} className='opacity-50 hover:opacity-100'>
                            Clear Badges (this Strategy)
                        </Button>
                        <Button onClick={handleClearState} className='opacity-50 hover:opacity-100'>
                            Clear EVERYTHING
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
