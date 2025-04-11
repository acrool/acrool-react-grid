import {NoXsMediaSize, IGridSetting} from '../types';
import {gutterUnit} from './config';






/**
 * 判斷是否為空
 * @param args
 */
const suffix = (args: {code?: number|string, sizeName?: NoXsMediaSize}) => {
    const str = [];
    if(typeof args?.sizeName !== 'undefined') str.push(args.sizeName);
    if(typeof args?.code !== 'undefined') str.push(args.code);

    if(str.length > 0){
        return `-${str.join('-')}`;
    }
    return '';
};



/**
 * 計算帶單位的數字
 * @param unitSize
 * @param fn
 */
export const calcUnitSize = (unitSize: string, fn: (num: number) => number): string => {
    const match = unitSize.match(/([-+]?\d*\.?\d+)([a-zA-Z]+)/);
    if (!match) {
        // 如果字符串不包含數字和單位，返回原始值
        return unitSize;
    }

    const num = parseFloat(match[1]);
    const unit = match[2];

    if (isNaN(num)) {
        // 如果無法解析數字部分，返回原始值
        return unitSize;
    }

    // 使用提供的函數計算數字部分
    const result = fn(num);

    // 將計算結果和單位部分組合成字符串
    return `${result}${unit}`;
};

const calcSpacer = (spacer: string ,idx: number|'auto') => {
    if(typeof idx === 'number'){
        return calcUnitSize(spacer, num => num * gutterUnit[idx]);
    }
    return 'auto';
};


export const renderGutterStyle = (sizeName?: NoXsMediaSize) => {
    return Array.from({length: 10}).map((row,idx) => {
        return `
        .g${suffix({code: idx, sizeName})}, .gy${suffix({code: idx, sizeName})} {--acrool-gutter-y: ${idx === 0 ? 0: `var(--acrool-gutter-${idx})`};}
        .g${suffix({code: idx, sizeName})}, .gx${suffix({code: idx, sizeName})} {--acrool-gutter-x: ${idx === 0 ? 0: `var(--acrool-gutter-${idx})`};}
        `;
    });
};



