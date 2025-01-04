import { CardTypes } from '@/types/enums';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CardState {
    [CardTypes.ultimate]: number;
    [CardTypes.anomaly]: number;
    [CardTypes.dexterity]: number;
    [CardTypes.adversity]: number;
}

interface GearState {
    active: boolean[];
    hidden: boolean[];
}

// gear and card state stored per strategy, in other words "save slots"
export interface StrategyState {
    currentStrategy: number;
    data: { gear: GearState; cards: CardState }[];
}

const initialState: StrategyState = {
    currentStrategy: 1,
    data: Array.from({ length: 9 }, () => ({
        gear: {
            active: [false, false, false, false, false, false, false, false],
            hidden: [false, false, false, false, false, false, false, false],
        },
        cards: {
            [CardTypes.ultimate]: 0,
            [CardTypes.anomaly]: 0,
            [CardTypes.dexterity]: 0,
            [CardTypes.adversity]: 0,
        },
    })),
};

function getCurrentData(state: StrategyState) {
    const index = state.currentStrategy - 1;
    return state.data[index];
}

function getCurrentGear(state: StrategyState) {
    return getCurrentData(state).gear;
}

function getCurrentCards(state: StrategyState) {
    return getCurrentData(state).cards;
}

export const strategySlice = createSlice({
    name: 'strategy',
    initialState,
    reducers: {
        setCurrentStrategy: (state, action: PayloadAction<number>) => {
            state.currentStrategy = action.payload;
        },
        toggleActiveGear: (state, action: PayloadAction<number>) => {
            getCurrentGear(state).active[action.payload] = !getCurrentGear(state).active[action.payload];
        },
        toggleHiddenGear: (state, action: PayloadAction<number>) => {
            getCurrentGear(state).hidden[action.payload] = !getCurrentGear(state).hidden[action.payload];
        },
        setCardCount: (state, action: PayloadAction<{ cardType: CardTypes; value: number }>) => {
            getCurrentCards(state)[action.payload.cardType] = action.payload.value;
        },
    },
    selectors: {
        selectCurrentStrategy: (state) => state.currentStrategy,
        selectStrategyData: (state) => state.data,

        selectActiveGear: (state) => getCurrentGear(state).active,
        selectHiddenGear: (state) => getCurrentGear(state).hidden,

        [CardTypes.ultimate]: (state) => getCurrentCards(state)[CardTypes.ultimate],
        [CardTypes.anomaly]: (state) => getCurrentCards(state)[CardTypes.anomaly],
        [CardTypes.dexterity]: (state) => getCurrentCards(state)[CardTypes.dexterity],
        [CardTypes.adversity]: (state) => getCurrentCards(state)[CardTypes.adversity],
    },
});

export const { setCurrentStrategy, toggleActiveGear, toggleHiddenGear, setCardCount } = strategySlice.actions;

export const { selectCurrentStrategy, selectActiveGear, selectHiddenGear, selectStrategyData, ...cardSelectors } =
    strategySlice.selectors;

export default strategySlice.reducer;
