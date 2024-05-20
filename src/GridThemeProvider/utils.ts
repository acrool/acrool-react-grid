import {TStyledProps, IRowProps, NoXsMediaSize, IGridThemeProviderProps, IGridSetting} from '../types';
import {noXsMediaSizes} from '../config';
import media from '../media';





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

const gutterUnit = [0, .25, .5, 1, 1.5, 3];
const calcSpacer = (spacer: string ,idx: number|'auto') => {
    if(typeof idx === 'number'){
        return calcUnitSize(spacer, num => num * gutterUnit[idx]);
    }
    return 'auto';
};




export const renderRoundStyle = (sizeName?: NoXsMediaSize) => {
    return `
      .rounded${suffix({sizeName})} {border-radius: .25rem !important;}
      .rounded${suffix({code: 'top', sizeName})} {border-top-left-radius: var(--acrool-border-radius) !important;border-top-right-radius: var(--acrool-border-radius) !important;}
      .rounded${suffix({code: 'end', sizeName})} {border-top-right-radius: var(--acrool-border-radius) !important;border-bottom-right-radius: var(--acrool-border-radius) !important;}
      .rounded${suffix({code: 'bottom', sizeName})} {border-bottom-right-radius: var(--acrool-border-radius) !important;border-bottom-left-radius: var(--acrool-border-radius) !important;}
      .rounded${suffix({code: 'start', sizeName})} {border-bottom-left-radius: var(--acrool-border-radius) !important;border-top-left-radius: var(--acrool-border-radius) !important;}
      .rounded${suffix({code: 'circle', sizeName})} {border-radius: 50% !important;}
      .rounded${suffix({code: 0, sizeName})} {border-radius: 0!important;}
      .rounded${suffix({code: 1, sizeName})} {border-radius: var(--acrool-border-radius-sm)!important;}
      .rounded${suffix({code: 2, sizeName})} {border-radius: var(--acrool-border-radius)!important;}
      .rounded${suffix({code: 3, sizeName})} {border-radius: var(--acrool-border-radius-lg)!important;}
      .rounded${suffix({code: 4, sizeName})} {border-radius: var(--acrool-border-radius-xl)!important;}
      .rounded${suffix({code: 5, sizeName})} {border-radius: var(--acrool-border-radius-xxl)!important;}
      .rounded${suffix({code: 6, sizeName})} {border-radius: var(--acrool-border-radius-2xl)!important;}
    `;
};

export const renderTextStyle = (sizeName?: NoXsMediaSize) => {
    return `
      .text${suffix({code: 'justify', sizeName})} {text-align: justify !important;}
      .text${suffix({code: 'left', sizeName})} {text-align: left !important;}
      .text${suffix({code: 'right', sizeName})} {text-align: right !important;}
      .text${suffix({code: 'center', sizeName})} {text-align: center !important;}
    `;
};


export const renderPaddingStyle = (setting: IGridSetting, sizeName?: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .p${suffix({code: idx, sizeName})} {padding: ${calcSpacer(setting.spacer, idx)} !important;}
        .py${suffix({code: idx, sizeName})} {
            padding-top: ${calcSpacer(setting.spacer, idx)} !important;
            padding-bottom: ${calcSpacer(setting.spacer, idx)} !important;
        }
        .px${suffix({code: idx, sizeName})} {
            padding-left: ${calcSpacer(setting.spacer, idx)} !important;
            padding-right: ${calcSpacer(setting.spacer, idx)} !important;
        }
        .pt${suffix({code: idx, sizeName})} {padding-top: ${calcSpacer(setting.spacer, idx)} !important;}
        .pr${suffix({code: idx, sizeName})} {padding-right: ${calcSpacer(setting.spacer, idx)} !important;}
        .pb${suffix({code: idx, sizeName})} {padding-bottom: ${calcSpacer(setting.spacer, idx)} !important;}
        .pl${suffix({code: idx, sizeName})} {padding-left: ${calcSpacer(setting.spacer, idx)} !important;}
        `;
    });
};

export const renderMarginStyle = (setting: IGridSetting, sizeName?: NoXsMediaSize) => {
    const data: Array<number|'auto'> = [0, 1, 2, 3, 4, 5, 'auto'];
    return data.map((code,idx) => {
        return `
        .m${suffix({code, sizeName})} {margin: ${calcSpacer(setting.spacer, code)} !important;}
        .my${suffix({code, sizeName})} {
            margin-top: ${calcSpacer(setting.spacer, code)} !important;
            margin-bottom: ${calcSpacer(setting.spacer, code)} !important;
        }
        .mx${suffix({code, sizeName})} {
            margin-left: ${calcSpacer(setting.spacer, code)} !important;
            margin-right: ${calcSpacer(setting.spacer, code)} !important;
        }
        .mt${suffix({code, sizeName})} {margin-top: ${calcSpacer(setting.spacer, code)} !important;}
        .mr${suffix({code, sizeName})} {margin-right: ${calcSpacer(setting.spacer, code)} !important;}
        .mb${suffix({code, sizeName})} {margin-bottom: ${calcSpacer(setting.spacer, code)} !important;}
        .ml${suffix({code, sizeName})} {margin-left: ${calcSpacer(setting.spacer, code)} !important;}
        `;
    });
};

export const renderGapStyle = (setting: IGridSetting, sizeName?: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .gap${suffix({code: idx, sizeName})} {gap: ${calcSpacer(setting.spacer, idx)} !important;}
        .column-gap${suffix({code: idx, sizeName})} {column-gap: ${calcSpacer(setting.spacer, idx)} !important;}
        .row-gap${suffix({code: idx, sizeName})} {row-gap: ${calcSpacer(setting.spacer, idx)} !important;}
        `;
    });
};

export const renderGutterStyle = (sizeName?: NoXsMediaSize) => {
    return Array.from({length: 6}).map((row,idx) => {
        return `
        .g${suffix({code: idx, sizeName})}, .gy${suffix({code: idx, sizeName})} {--acrool-gutter-y: ${idx === 0 ? 0: `var(--acrool-gutter-${idx})`};}
        .g${suffix({code: idx, sizeName})}, .gx${suffix({code: idx, sizeName})} {--acrool-gutter-x: ${idx === 0 ? 0: `var(--acrool-gutter-${idx})`};}
        `;
    });
};


export const renderGColStyle = (sizeName?: NoXsMediaSize) => {
    return Array.from({length: 5}).map((row,idx) => {
        return `
            .g-col${suffix({code: idx+1, sizeName})} {grid-column: auto/span ${idx+1} !important;}
        `;
    });
};
export const renderGRowStyle = (sizeName?: NoXsMediaSize) => {
    return Array.from({length: 5}).map((row,idx) => {
        return `
            .g-row${suffix({code: idx+1, sizeName})} {grid-row: auto/span ${idx+1} !important;}
        `;
    });
};



export const renderOrderStyle = (sizeName?: NoXsMediaSize) => {
    const data: Array<{code: string|number, value: number}> = [
        {code: 0, value: 0},
        {code: 1, value: 1},
        {code: 2, value: 2},
        {code: 3, value: 3},
        {code: 4, value: 4},
        {code: 5, value: 5},
        {code: 'first', value: -1},
        {code: 'last', value: 6},
    ];
    return data.map((row,idx) => {
        return `
        .order${suffix({code:row.code, sizeName})} {order: ${row.value} !important;}
       `;
    });
};

export const renderOverflowStyle = (sizeName?: NoXsMediaSize) => {
    const data: Array<string> = ['initial','hidden','auto', 'scroll'];

    return data.map((code,idx) => {
        return `
         .overflow${suffix({code, sizeName})} {overflow: ${code} !important;}
         .overflow-x${suffix({code, sizeName})} {overflow-x: ${code} !important;}
         .overflow-y${suffix({code, sizeName})} {overflow-y: ${code} !important;}
       `;
    });
};



export const renderDisplayStyle = (sizeName?: NoXsMediaSize) => {
    const data: Array<string> = ['none','inline','inline-block', 'block', 'flex', 'inline-flex', 'grid', 'inline-grid'];

    return data.map((code,idx) => {
        return `
         .d${suffix({code, sizeName})} {display: ${code} !important;}
       `;
    });
};

export const renderPositionStyle = (sizeName?: NoXsMediaSize) => {
    const data: Array<string> = ['static','relative'];

    return data.map((code,idx) => {
        return `
            .position${suffix({code, sizeName})} {position: ${code} !important;}
       `;
    });
};


export const renderAutoFlowStyle = (sizeName?: NoXsMediaSize) => {
    const data: Array<{code: string|number, value: string|number}> = [
        {code: 'col', value: 'column'},
        {code: 'row', value: 'row'},
        {code: 'dense', value: 'dense'},
        {code: 'row-dense', value: 'row dense'},
        {code: 'col-dense', value: 'column dense'},
    ];

    return data.map((row,idx) => {
        return `
            .grid-flow-${suffix({code: row.code, sizeName})} { grid-auto-flow: ${row.value} !important;}
       `;
    });
};

export const renderWidthStyle = (sizeName?: NoXsMediaSize) => {
    const data: Array<{code: string|number, value: string|number}> = [
        {code: 0, value: 0},
        {code: 100, value: '100%'},
        {code: 'auto', value: 'auto'},
        {code: 'inherit', value: 'inherit'},
    ];

    return data.map((row,idx) => {
        return `
          .w${suffix({code: row.code, sizeName})} {width: ${row.value} !important;}
       `;
    });
};



export const renderHeightStyle = (sizeName?: NoXsMediaSize) => {
    const data: Array<{code: string|number, value: string|number}> = [
        {code: 0, value: 0},
        {code: 100, value: '100%'},
        {code: 'auto', value: 'auto'},
        {code: 'inherit', value: 'inherit'},
    ];

    return data.map((row,idx) => {
        return `
          .h${suffix({code: row.code, sizeName})} {height: ${row.value} !important;}
       `;
    });
};



export const renderFlexStyle = (sizeName?: NoXsMediaSize) => {
    return `
       .flex${suffix({code: 'row', sizeName})} {flex-direction: row !important;}
       .flex${suffix({code: 'column', sizeName})} {flex-direction: column !important;}
       .flex${suffix({code: 'row-reverse', sizeName})} {flex-direction: row-reverse !important;}
       .flex${suffix({code: 'column-reverse', sizeName})} {flex-direction: column-reverse !important;}

       .flex${suffix({code: 'wrap', sizeName})} {flex-wrap: wrap !important;}
       .flex${suffix({code: 'nowrap', sizeName})} {flex-nowrap: nowrap !important;}
       .flex${suffix({code: 'wrap-reverse', sizeName})} {flex-nowrap: wrap-reverse !important;}

       .flex${suffix({code: 'fill', sizeName})} {flex: 1 1 auto !important;}
       .flex${suffix({code: 'grow-0', sizeName})} {flex-grow: 0 !important;}
       .flex${suffix({code: 'grow-1', sizeName})} {flex-grow: 1 !important;}
       .flex${suffix({code: 'shrink-0', sizeName})} {flex-shrink: 0 !important;}
       .flex${suffix({code: 'shrink-1', sizeName})} {flex-shrink: 1 !important;}
   `;
};



export const renderFlexAlignStyle = (sizeName?: NoXsMediaSize) => {
    return `
        .justify-content${suffix({code: 'auto', sizeName})} {justify-content: normal !important;}
        .justify-content${suffix({code: 'start', sizeName})} {justify-content: flex-start !important;}
        .justify-content${suffix({code: 'end', sizeName})} {justify-content: flex-end !important;}
        .justify-content${suffix({code: 'center', sizeName})} {justify-content: center !important;}
        .justify-content${suffix({code: 'between', sizeName})} {justify-content: space-between !important;}
        .justify-content${suffix({code: 'around', sizeName})} {justify-content: space-around !important;}

        .justify-items${suffix({code: 'auto', sizeName})} {justify-items: normal !important;}
        .justify-items${suffix({code: 'start', sizeName})} {justify-items: flex-start !important;}
        .justify-items${suffix({code: 'end', sizeName})} {justify-items: flex-end !important;}
        .justify-items${suffix({code: 'center', sizeName})} {justify-items: center !important;}
        .justify-items${suffix({code: 'stretch', sizeName})} {justify-items: stretch !important;}

        .justify-self${suffix({code: 'auto', sizeName})} {justify-self: auto !important;}
        .justify-self${suffix({code: 'start', sizeName})} {justify-self: flex-start !important;}
        .justify-self${suffix({code: 'end', sizeName})} {justify-self: flex-end !important;}
        .justify-self${suffix({code: 'center', sizeName})} {justify-self: center !important;}

        .align-items${suffix({code: 'auto', sizeName})} {align-items: normal !important;}
        .align-items${suffix({code: 'start', sizeName})} {align-items: flex-start !important;}
        .align-items${suffix({code: 'end', sizeName})} {align-items: flex-end !important;}
        .align-items${suffix({code: 'center', sizeName})} {align-items: center !important;}
        .align-items${suffix({code: 'baseline', sizeName})} {align-items: baseline !important;}
        .align-items${suffix({code: 'stretch', sizeName})} {align-items: stretch !important;}

        .align-content${suffix({code: 'auto', sizeName})} {align-content: normal !important;}
        .align-content${suffix({code: 'start', sizeName})} {align-content: start !important;}
        .align-content${suffix({code: 'end', sizeName})} {align-content: flex-end !important;}
        .align-content${suffix({code: 'center', sizeName})} {align-content: center !important;}
        .align-content${suffix({code: 'between', sizeName})} {align-content: between !important;}
        .align-content${suffix({code: 'around', sizeName})} {align-content: around !important;}
        .align-content${suffix({code: 'stretch', sizeName})} {align-content: stretch !important;}

        .align-self${suffix({code: 'auto', sizeName})} {align-self: auto !important;}
        .align-self${suffix({code: 'start', sizeName})} {align-self: flex-start !important;}
        .align-self${suffix({code: 'end', sizeName})} {align-self: flex-end !important;}
        .align-self${suffix({code: 'center', sizeName})} {align-self: center !important;}
        .align-self${suffix({code: 'baseline', sizeName})} {align-self: baseline !important;}
        .align-self${suffix({code: 'stretch', sizeName})} {align-self: stretch !important;}

        .place-items${suffix({code: 'auto', sizeName})} {place-items: normal !important;}
        .place-items${suffix({code: 'start', sizeName})} {place-items: start !important;}
        .place-items${suffix({code: 'end', sizeName})} {place-items: end !important;}
        .place-items${suffix({code: 'center', sizeName})} {place-items: center !important;}
   `;
};

