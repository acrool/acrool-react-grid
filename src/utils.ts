import {RecordOption, TMediaSize, TGridColNumberSizeUnit} from './types';

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


/**
 * Grid 產生器 repeat
 * @param count
 * @param unitNum
 */
export function repeat(count: number, unitNum: TGridColNumberSizeUnit){
    return `repeat(${count}, ${unitNum})`;
}

/**
 * Grid 產生器 minmax
 * @param min
 * @param max
 */
export function minmax(min: TGridColNumberSizeUnit, max: TGridColNumberSizeUnit){
    return `minmax(${min}, ${max})`;
}
