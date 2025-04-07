

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
