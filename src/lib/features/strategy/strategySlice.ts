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
    badges: boolean[];
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
            badges: [false, false, false, false, false, false, false, false],
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
        toggleGearBadge: (state, action: PayloadAction<number>) => {
            getCurrentGear(state).badges[action.payload] = !getCurrentGear(state).badges[action.payload];
        },
        setCardCount: (state, action: PayloadAction<{ cardType: CardTypes; value: number }>) => {
            getCurrentCards(state)[action.payload.cardType] = action.payload.value;
        },

        resetCurrentCards: (state) => {
            getCurrentData(state).cards = { ...initialState.data[0].cards };
        },
        resetCurrentGear: (state) => {
            getCurrentGear(state).active = getCurrentGear(state).active.map(() => false);
        },
        resetCurrentGearAndCards: (state) => {
            getCurrentGear(state).active = getCurrentGear(state).active.map(() => false);
            getCurrentData(state).cards = { ...initialState.data[0].cards };
        },
        resetCurrentBadges: (state) => {
            getCurrentGear(state).badges = getCurrentGear(state).badges.map(() => false);
        },

        // reset state but keep the current strategy
        importState: (state, action: PayloadAction<{ state: StrategyState }>) => {
            state.data = [...action.payload.state.data];
        },
        resetState: (state) => {
            state.data = [...initialState.data];
        },
    },
    selectors: {
        selectCurrentStrategy: (state) => state.currentStrategy,
        selectStrategyData: (state) => state.data,
        selectState: (state) => state,

        selectActiveGear: (state) => getCurrentGear(state).active,
        selectGearBadges: (state) => getCurrentGear(state).badges,

        [CardTypes.ultimate]: (state) => getCurrentCards(state)[CardTypes.ultimate],
        [CardTypes.anomaly]: (state) => getCurrentCards(state)[CardTypes.anomaly],
        [CardTypes.dexterity]: (state) => getCurrentCards(state)[CardTypes.dexterity],
        [CardTypes.adversity]: (state) => getCurrentCards(state)[CardTypes.adversity],
    },
});

export const {
    setCurrentStrategy,
    toggleActiveGear,
    toggleGearBadge,
    setCardCount,
    resetCurrentCards,
    resetCurrentGear,
    resetCurrentGearAndCards,
    resetCurrentBadges,
    importState,
    resetState,
} = strategySlice.actions;

export const {
    selectCurrentStrategy,
    selectActiveGear,
    selectGearBadges,
    selectStrategyData,
    selectState,
    ...cardSelectors
} = strategySlice.selectors;

export default strategySlice.reducer;
