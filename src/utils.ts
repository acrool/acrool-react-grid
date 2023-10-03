import {RecordOption, TMediaSize} from './types';

/**
 * 取得預設的尺寸(最小的)
 * @param column
 */
export function getDefaultSizeValue<D>(column?: RecordOption<TMediaSize, D> | D): D|undefined {
    if(column && typeof column === 'object' && 'xs' in column){
        return column.xs;
    }
    return column as D; // or undefined
}
