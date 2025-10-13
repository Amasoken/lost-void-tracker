import {
    importState,
    resetCurrentBadges,
    resetCurrentCards,
    resetCurrentGear,
    resetCurrentGearAndCards,
    resetState,
    selectColumnCount,
    selectHiddenTypes,
    selectState,
    setColumnCount as setColumnCountAction,
    type StrategyState,
    toggleHiddenType,
} from '@/lib/features/strategy/strategySlice';
import { useAppDispatch } from '@/lib/hooks';
import stateSchema, { stateSchemaV0 } from '@/lib/validation/stateSchema';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AdditionalActions from './AdditionalActions';
import TypeDisplay from './TypeDisplay';

const importData = async (inportState: (data: StrategyState) => void) => {
    const data = prompt('Enter the data to import:');
    if (!data) {
        return;
    }

    const showError = (error: unknown) => {
        alert(`Please provide a valid JSON you got with export.\nError: ${error}`);
    };

    let json: StrategyState;

    try {
        json = JSON.parse(data);
    } catch (error) {
        return showError(error);
    }

    const error = await stateSchema
        .validate(json)
        .then(() => {
            inportState(json);
            alert('Import success!');
        })
        .catch((error) => error);

    if (error) {
        // check if it's the older version of exported data
        stateSchemaV0
            .validate(json)
            .then(() => {
                // manually set state and let the migrations handle the rest
                localStorage.setItem(
                    'persist:root',
                    JSON.stringify({
                        strategy: JSON.stringify(json),
                        _persist: JSON.stringify({ version: -1, rehydrated: false }),
                    })
                );

                alert('Import success! Old data version detected, page will reload now.');
                window.location.reload();
            })
            .catch(() => {
                // not an older data, so just show the error
                showError(error);
            });
    }
};

export default function OptionsMenu() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [cardTypeOpen, setCardTypeOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const state = useSelector(selectState);
    const columns = useSelector(selectColumnCount);
    const hiddenTypes = useSelector(selectHiddenTypes);

    const handleClearBadges = () => {
        if (confirm('Reset every badge for the current Strategy?')) {
            dispatch(resetCurrentBadges());
        }
    };

    const handleClearState = () => {
        if (confirm('Reset every Card, Gear, badges for EVERY strategy?')) {
            dispatch(resetState());
        }
    };

    const handleExport = () => {
        prompt("Here's your data. Copy it and store somewhere", JSON.stringify(state));
    };

    const handleImport = async () => {
        await importData((data: StrategyState) => dispatch(importState({ state: data })));
    };

    return (
        <div className='flex z-40 left-4 sm:left-10 -top-4 absolute'>
            <AdditionalActions
                isOpen={menuOpen}
                setOpen={setMenuOpen}
                exportData={handleExport}
                importData={handleImport}
                resetGearAndCards={() => dispatch(resetCurrentGearAndCards())}
                resetGear={() => dispatch(resetCurrentGear())}
                resetCards={() => dispatch(resetCurrentCards())}
                clearBadges={handleClearBadges}
                clearState={handleClearState}
                columns={columns}
                setColumns={(count) => dispatch(setColumnCountAction(count))}
            />

            <TypeDisplay
                isOpen={cardTypeOpen}
                setOpen={setCardTypeOpen}
                hiddenTypes={hiddenTypes}
                toggleType={(type) => dispatch(toggleHiddenType(type))}
            />
        </div>
    );
}
