import { CardTypes } from '@/types/enums';
import { type V0PersistedState, type V1PersistedState } from '@/types/stateVersions';
import { createMigrate } from 'redux-persist';

const getV1StrategyInitialState = () => {
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

const migrations = {
    1: (state: V0PersistedState) => {
        try {
            return {
                ...state,
                strategy: {
                    currentStrategy: state.strategy.currentStrategy + 3,
                    data: [
                        ...Array.from({ length: 3 }, getV1StrategyInitialState),
                        ...state.strategy.data.map(({ gear, cards }) => ({
                            gear: {
                                active: [false, false, ...gear.active],
                                badges: [false, false, ...gear.badges],
                            },
                            cards: {
                                [CardTypes.mobile]: 0,
                                ...cards,
                            },
                        })),
                    ],
                },
            } as V1PersistedState;
        } catch (error) {
            console.log('Error:', error);
        }

        return state;
    },
};

//@ts-expect-error
// MigrationManifest doesn't seem to consider that
// aside from '_persist' there will be actual state fields with types
// { _persist: { version: 0, rehydrated: true }, strategy: { /* state, not undefined */} };
export const persistMigrate = createMigrate(migrations, { debug: true });
