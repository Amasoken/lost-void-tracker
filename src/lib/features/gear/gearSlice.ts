import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface GearState {
    active: boolean[];
    hidden: boolean[];
}

const initialState: GearState = {
    active: [false, false, false, false, false, false, false, false],
    hidden: [false, false, false, false, false, false, false, false],
};

export const gearSlice = createSlice({
    name: 'gear',
    initialState,
    reducers: {
        toggleActive: (state, action: PayloadAction<number>) => {
            state.active[action.payload] = !state.active[action.payload];
        },
        toggleHidden: (state, action: PayloadAction<number>) => {
            state.hidden[action.payload] = !state.hidden[action.payload];
        },
        resetGear: () => {
            return initialState;
        },
    },
    selectors: {
        selectActive: (state) => state.active,
        selectHidden: (state) => state.hidden,
    },
});

export const { toggleActive, toggleHidden, resetGear } = gearSlice.actions;
export const { selectActive, selectHidden } = gearSlice.selectors;

export default gearSlice.reducer;
