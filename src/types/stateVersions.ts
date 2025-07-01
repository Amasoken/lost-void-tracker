import { type PersistedState } from 'redux-persist';
import { CardTypes } from './enums';

interface V0StoreState {
    currentStrategy: number;
    data: {
        gear: {
            active: boolean[]; // 8 gears
            badges: boolean[]; // 8 gears
        };
        cards: {
            [CardTypes.ultimate]: number;
            [CardTypes.anomaly]: number;
            [CardTypes.dexterity]: number;
            [CardTypes.adversity]: number;
        };
    }[]; // 9 strategies
}

export type V0PersistedState = {
    strategy: V0StoreState;
} & Exclude<PersistedState, undefined>;

// three new strategies, two new [Mobile] gear
interface V1StoreState {
    currentStrategy: number;
    data: {
        gear: {
            active: boolean[]; // 10 gears
            badges: boolean[]; // 10 gears
        };
        cards: {
            [CardTypes.mobile]: number;
            [CardTypes.ultimate]: number;
            [CardTypes.anomaly]: number;
            [CardTypes.dexterity]: number;
            [CardTypes.adversity]: number;
        };
    }[]; // 12 strategies
}

export type V1PersistedState = {
    strategy: V1StoreState;
} & Exclude<PersistedState, undefined>;
