import { CardTypes } from '@/types/enums';
import * as yup from 'yup';

const gearSchema = yup.object({
    active: yup.array().of(yup.boolean()).length(8),
    badges: yup.array().of(yup.boolean()).length(8),
});

const cardSchema = yup.object(
    Object.fromEntries(
        Object.values(CardTypes).map((value) => [value, yup.number().integer().min(0).max(6).required()])
    )
);

const dataSchema = yup
    .array()
    .of(
        yup.object({
            gear: gearSchema,
            cards: cardSchema,
        })
    )
    .length(9)
    .required();

const stateSchema = yup.object({
    currentStrategy: yup.number().integer().min(1).max(9).required(),
    data: dataSchema,
});

export default stateSchema;
