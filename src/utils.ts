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
 * @param unit
 */
function repeat(count: number, unit: TGridColNumberSizeUnit){
    return `repeat(${count}, ${unit})`;
}

/**
 * Grid 產生器 repeat
 * @param count
 */
export function fr(count: number){
    return repeat(count, '1fr');
}

/**
 * Grid 產生器 repeat
 * @param count
 */
export function auto(count: number){
    return repeat(count, 'auto');
}

/**
 * Grid 產生器 minmax
 * @param min
 * @param max
 */
export function minmax(min: TGridColNumberSizeUnit, max: TGridColNumberSizeUnit){
    return `minmax(${min}, ${max})`;
}
