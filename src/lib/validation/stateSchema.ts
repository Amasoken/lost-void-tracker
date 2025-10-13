import { CardTypes } from '@/types/enums';
import * as yup from 'yup';

const gearSchemaV0 = yup.object({
    active: yup.array().of(yup.boolean()).length(8),
    badges: yup.array().of(yup.boolean()).length(8),
});

enum CardTypesV0 {
    ultimate = 'Ultimate',
    anomaly = 'Anomaly - Stun',
    dexterity = 'Dexterity',
    adversity = 'Adversity',
}

const cardSchemaV0 = yup.object(
    Object.fromEntries(
        Object.values(CardTypesV0).map((value) => [value, yup.number().integer().min(0).max(6).required()])
    )
);

const dataSchemaV0 = yup
    .array()
    .of(
        yup.object({
            gear: gearSchemaV0,
            cards: cardSchemaV0,
        })
    )
    .length(9)
    .required();

export const stateSchemaV0 = yup.object({
    currentStrategy: yup.number().integer().min(1).max(9).required(),
    data: dataSchemaV0,
});

const gearSchema = yup.object({
    active: yup.array().of(yup.boolean()).length(10),
    badges: yup.array().of(yup.boolean()).length(10),
});

const cardSchema = yup.object(
    Object.fromEntries(
        Object.values(CardTypes).map((value) => [value, yup.number().integer().min(0).max(6).required()])
    )
);

const optionsSchema = yup.object({
    currentStrategy: yup.number().integer().min(1).max(12).required(),
    columns: yup.number().integer().min(0).max(Object.values(CardTypes).length).required(),
    hiddenTypes: yup
        .array(yup.mixed<CardTypes>().oneOf(Object.values(CardTypes)))
        .min(0)
        .max(Object.values(CardTypes).length)
        .required(),
});

const dataSchema = yup
    .array()
    .of(
        yup.object({
            gear: gearSchema,
            cards: cardSchema,
        })
    )
    .length(12)
    .required();

const stateSchema = yup.object({
    options: optionsSchema,
    data: dataSchema,
});

export default stateSchema;
