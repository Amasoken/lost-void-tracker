import { CardTypes } from '@/types/enums';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

interface CardState {
    [CardTypes.mobile]: number;
    [CardTypes.ultimate]: number;
    [CardTypes.anomaly]: number;
    [CardTypes.dexterity]: number;
    [CardTypes.adversity]: number;
}

interface GearState {
    active: boolean[];
    badges: boolean[];
}

interface StrategyData {
    gear: GearState;
    cards: CardState;
}

interface Options {
    currentStrategy: number;
    columns: number;
    hiddenTypes: CardTypes[];
}

// gear and card state stored per strategy, in other words "save slots"
export interface StrategyState {
    options: Options;
    data: StrategyData[];
}

export const getInitialStrategyState = () => {
    return {
        gear: {
            active: Array.from({ length: 10 }, () => false),
            badges: Array.from({ length: 10 }, () => false),
        },
        cards: {
            [CardTypes.mobile]: 0,
            [CardTypes.ultimate]: 0,
            [CardTypes.anomaly]: 0,
            [CardTypes.dexterity]: 0,
            [CardTypes.adversity]: 0,
        },
    };
};

const initialState: StrategyState = {
    options: {
        currentStrategy: 1,
        columns: 0,
        hiddenTypes: [],
    },
    data: Array.from({ length: 12 }, getInitialStrategyState),
};

function getCurrentData(state: StrategyState) {
    const index = state.options.currentStrategy - 1;
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
        // options
        setCurrentStrategy: (state, action: PayloadAction<number>) => {
            state.options.currentStrategy = action.payload;
        },
        setColumnCount: (state, action: PayloadAction<number>) => {
            state.options.columns = action.payload;
        },
        toggleHiddenType: (state, action: PayloadAction<CardTypes>) => {
            const isPresent = state.options.hiddenTypes.includes(action.payload);
            if (isPresent) {
                state.options.hiddenTypes = state.options.hiddenTypes.filter((t) => t !== action.payload);
            } else {
                state.options.hiddenTypes.push(action.payload);
            }
        },

        // general controls
        toggleActiveGear: (state, action: PayloadAction<number>) => {
            getCurrentGear(state).active[action.payload] = !getCurrentGear(state).active[action.payload];
        },
        toggleGearBadge: (state, action: PayloadAction<number>) => {
            getCurrentGear(state).badges[action.payload] = !getCurrentGear(state).badges[action.payload];
        },
        setCardCount: (state, action: PayloadAction<{ cardType: CardTypes; value: number }>) => {
            getCurrentCards(state)[action.payload.cardType] = action.payload.value;
        },

        // reset options
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

        // reset state but keep the current strategy and options
        importState: (state, action: PayloadAction<{ state: StrategyState }>) => {
            state.data = [...action.payload.state.data];
        },
        resetState: (state) => {
            state.data = [...initialState.data];
        },
    },
    selectors: {
        selectCurrentStrategy: (state) => state.options.currentStrategy,
        selectColumnCount: (state) => state.options.columns,
        selectHiddenTypes: (state) => state.options.hiddenTypes,

        selectStrategyData: (state) => state.data,

        selectBadgeCount: createSelector([(state: StrategyState) => state.data], (data) => {
            return data.map((data) => data.gear.badges.filter((status) => status).length);
        }),

        selectState: (state) => state,

        selectActiveGear: (state) => getCurrentGear(state).active,
        selectGearBadges: (state) => getCurrentGear(state).badges,

        [CardTypes.mobile]: (state) => getCurrentCards(state)[CardTypes.mobile],
        [CardTypes.ultimate]: (state) => getCurrentCards(state)[CardTypes.ultimate],
        [CardTypes.anomaly]: (state) => getCurrentCards(state)[CardTypes.anomaly],
        [CardTypes.dexterity]: (state) => getCurrentCards(state)[CardTypes.dexterity],
        [CardTypes.adversity]: (state) => getCurrentCards(state)[CardTypes.adversity],
    },
});

export const {
    setCurrentStrategy,
    setColumnCount,
    toggleHiddenType,
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
    selectColumnCount,
    selectHiddenTypes,
    selectActiveGear,
    selectGearBadges,
    selectStrategyData,
    selectState,
    selectBadgeCount,
    ...cardSelectors
} = strategySlice.selectors;

export default strategySlice.reducer;
