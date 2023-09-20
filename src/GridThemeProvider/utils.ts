import {TStyledProps, IRowProps, NoXsMediaSize} from '../types';
import {mediaSizes} from '../config';
import media from '../media';


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


const renderMarginStyle = (sizeName: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .m-${sizeName}-${idx} {margin: var(--bear-spacer-${idx}) !important;}
        .mt-${sizeName}-${idx}, .my-${sizeName}-${idx} {margin-top: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        .mr-${sizeName}-${idx}, .mx-${sizeName}-${idx} {margin-right: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        .mb-${sizeName}-${idx}, .my-${sizeName}-${idx} {margin-bottom: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        .ml-${sizeName}-${idx}, .mx-${sizeName}-${idx} {margin-left: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        `;
    }).join('');
};

const renderPaddingStyle = (sizeName: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .p-${sizeName}-${idx} {padding: var(--bear-spacer-${idx}) !important;}
        .pt-${sizeName}-${idx}, .py-${sizeName}-${idx} {padding-top: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        .pr-${sizeName}-${idx}, .px-${sizeName}-${idx} {padding-right: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        .pb-${sizeName}-${idx}, .py-${sizeName}-${idx} {padding-bottom: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        .pl-${sizeName}-${idx}, .px-${sizeName}-${idx} {padding-left: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        `;
    }).join('');
};

const renderGutterStyle = (sizeName: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .g-${sizeName}-${idx}, .g-y-${sizeName}-${idx} {--bear-gutter-y: ${idx === 0 ? 0: `var(--bear-gutter-${idx})`} !important;}
        .g-${sizeName}-${idx}, .g-x-${sizeName}-${idx} {--bear-gutter-x: ${idx === 0 ? 0: `var(--bear-gutter-${idx})`} !important;}
        `;
    }).join('');
};
const renderGapStyle = (sizeName: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .gap-${sizeName}-${idx}, .gap-column-${sizeName}-${idx} {row-column: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        .gap-${sizeName}-${idx}, .gap-row-${sizeName}-${idx} {row-gap: ${idx === 0 ? 0: `var(--bear-spacer-${idx})`} !important;}
        `;
    }).join('');
};

const renderOrderStyle = (sizeName: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .order-${sizeName}-${idx} {order: ${idx}!important;}
        `;
    }).join('');
};


/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IRowProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            .d-${sizeName}-none {display: none !important;}
            .d-${sizeName}-inline {display: inline !important;}
            .d-${sizeName}-inline-block {display: inline-block !important;}
            .d-${sizeName}-block {display: block !important;}
            .d-${sizeName}-flex {display: flex !important;}
            .d-${sizeName}-inline-flex {display: inline-flex !important;}
            .d-${sizeName}-table-cell {display: table-cell !important;}
            .d-${sizeName}-table {display: table !important;}
            .d-${sizeName}-table-row {display: table-row !important;}

            .flex-${sizeName}-row {flex-direction: row !important;}
            .flex-${sizeName}-column {flex-direction: column !important;}
            .flex-${sizeName}-row-reverse {flex-direction: row-reverse !important;}
            .flex-${sizeName}-column-reverse {flex-direction: column-reverse !important;}

            .flex-${sizeName}-wrap {flex-wrap: wrap !important;}
            .flex-${sizeName}-nowrap {flex-nowrap: nowrap !important;}
            .flex-${sizeName}-wrap-reverse {flex-nowrap: wrap-reverse !important;}

            .flex-${sizeName}-fill {flex: 1 1 auto !important;}
            .flex-${sizeName}-grow-0 {flex-grow: 0 !important;}
            .flex-${sizeName}-grow-1 {flex-grow: 1 !important;}
            .flex-${sizeName}-shrink-0 {flex-shrink: 0 !important;}
            .flex-${sizeName}-shrink-1 {flex-shrink: 1 !important;}

            .justify-content-${sizeName}-start {justify-content: flex-start !important;}
            .justify-content-${sizeName}-end {justify-content: flex-end !important;}
            .justify-content-${sizeName}-center {justify-content: flex-center !important;}
            .justify-content-${sizeName}-between {justify-content: space-between !important;}
            .justify-content-${sizeName}-around {justify-content: space-around !important;}

            .align-items-${sizeName}-start {align-items: flex-start !important;}
            .align-items-${sizeName}-end {align-items: flex-end !important;}
            .align-items-${sizeName}-center {align-items: center !important;}
            .align-items-${sizeName}-baseline {align-items: baseline !important;}
            .align-items-${sizeName}-stretch {align-items: stretch !important;}

            .align-content-${sizeName}-start {align-content: start !important;}
            .align-content-${sizeName}-end {align-content: flex-end !important;}
            .align-content-${sizeName}-center {align-content: center !important;}
            .align-content-${sizeName}-between {align-content: between !important;}
            .align-content-${sizeName}-around {align-content: around !important;}
            .align-content-${sizeName}-stretch {align-content: stretch !important;}

            .align-self-${sizeName}-start {align-self: flex-start !important;}
            .align-self-${sizeName}-end {align-self: flex-end !important;}
            .align-self-${sizeName}-center {align-self: center !important;}
            .align-self-${sizeName}-baseline {align-self: baseline !important;}
            .align-self-${sizeName}-stretch {align-self: stretch !important;}

            .text-${sizeName}-justify {text-align: justify !important;}
            .text-${sizeName}-left {text-align: left !important;}
            .text-${sizeName}-right {text-align: right !important;}
            .text-${sizeName}-center {text-align: center !important;}

            .m-${sizeName}-auto {margin: var(--bear-spacer-auto) !important;}
            .mt-${sizeName}-auto, .my-${sizeName}-auto {margin-top: auto !important;}
            .mr-${sizeName}-auto, .mx-${sizeName}-auto {margin-right: auto !important;}
            .mb-${sizeName}-auto, .my-${sizeName}-auto {margin-bottom: auto !important;}
            .ml-${sizeName}-auto, .mx-${sizeName}-auto {margin-left: auto !important;}

            ${renderMarginStyle(sizeName)}
            ${renderPaddingStyle(sizeName)}
            ${renderGutterStyle(sizeName)}
            ${renderGapStyle(sizeName)}
            ${renderOrderStyle(sizeName)}

            .order-${sizeName}-first {order: -1 !important;}
            .order-${sizeName}-last {order: 6 !important;}

            .overflow-x-${sizeName}-hidden {overflow-x: hidden !important;}
            .overflow-y-${sizeName}-hidden {overflow-y: hidden !important;}
            .overflow-x-${sizeName}-auto {overflow-x: auto !important;}
            .overflow-y-${sizeName}-auto {overflow-y: auto !important;}
        `;
        });
};

