import { CardTypes } from '@/types/enums';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GearState {
    [CardTypes.ultimate]: number;
    [CardTypes.anomaly]: number;
    [CardTypes.dexterity]: number;
    [CardTypes.adversity]: number;
}

const initialState: GearState = {
    [CardTypes.ultimate]: 0,
    [CardTypes.anomaly]: 0,
    [CardTypes.dexterity]: 0,
    [CardTypes.adversity]: 0,
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCardCount: (state, action: PayloadAction<{ cardType: CardTypes; value: number }>) => {
            state[action.payload.cardType] = action.payload.value;
        },
    },
    selectors: {
        [CardTypes.ultimate]: (state) => state[CardTypes.ultimate],
        [CardTypes.anomaly]: (state) => state[CardTypes.anomaly],
        [CardTypes.dexterity]: (state) => state[CardTypes.dexterity],
        [CardTypes.adversity]: (state) => state[CardTypes.adversity],
    },
});

export const { setCardCount } = cardSlice.actions;
export const { ...cardSelectors } = cardSlice.selectors;

export default cardSlice.reducer;
