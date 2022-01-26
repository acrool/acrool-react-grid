import {IsNumberFn, SuffixFn} from './types';

export const isNumber: IsNumberFn = value => !Number(value) !== true;
export const suffix: SuffixFn = value => {
    if (isNumber(value)) {
        return `-${value}`;
    } if (value === 'auto') {
        return '-auto';
    }
    return '';
};
export const isEmpty = (value: any, isCheckNumber0 = false) => (
    value === undefined
        || value === null
        || value === false
        || (isCheckNumber0 && value === 0)
        || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0)
        || (typeof value === 'string' && value.trim().length === 0)
);
