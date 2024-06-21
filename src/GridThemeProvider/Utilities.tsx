import {createGlobalStyle, css} from 'styled-components';
import {TStyledProps, TThemeProps, IGridSetting} from '../types';
import {
    calcUnitSize,
    renderMarginStyle,
    renderPaddingStyle,
    renderGapStyle,
    renderGutterStyle,
    renderRoundStyle,
    renderTextStyle,
    renderOrderStyle,
    renderOverflowStyle,
    renderWidthStyle,
    renderHeightStyle,
    renderDisplayStyle,
    renderFlexStyle,
    renderFlexAlignStyle,
    renderPositionStyle,
    renderAutoFlowStyle, renderGColStyle, renderGRowStyle
} from './utils';
import {noXsMediaSizes} from '../config';
import media from '../media';



const generateRWDStyled = (setting: IGridSetting) => {
    return noXsMediaSizes
        .map(sizeName => {
            return media[sizeName]`
            ${renderDisplayStyle(sizeName)}
            ${renderPositionStyle(sizeName)}
            ${renderAutoFlowStyle()}

            ${renderFlexStyle(sizeName)}
            ${renderFlexAlignStyle(sizeName)}
            ${renderGColStyle(sizeName)}
            ${renderGRowStyle(sizeName)}

            ${renderHeightStyle(sizeName)}
            ${renderWidthStyle(sizeName)}
            ${renderTextStyle(sizeName)}
            ${renderRoundStyle(sizeName)}
            ${renderMarginStyle(setting, sizeName)}
            ${renderPaddingStyle(setting, sizeName)}
            ${renderGapStyle(setting, sizeName)}
            ${renderGutterStyle(sizeName)}
            ${renderOrderStyle(sizeName)}
            ${renderOverflowStyle(sizeName)}

        `;
        });
};


export const Utilities = createGlobalStyle`

    ${(props: TStyledProps<TThemeProps>) => css`
        :root{
            --acrool-border-width: 1px;
            --acrool-border-style: solid;
            --acrool-border-color: #495057;
            --acrool-border-radius: 0.375rem;
            --acrool-border-radius-sm: 0.25rem;
            --acrool-border-radius-md: var(--acrool-border-radius);
            --acrool-border-radius-lg: 1rem;
            --acrool-border-radius-xl: 1.5rem;
            --acrool-border-radius-xxl: 2rem;
            --acrool-border-radius-pill: 50%;

            --acrool-gutter: ${props.theme.bearReactGrid.spacer};

            --acrool-gutter-1: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .25)}; // 4
            --acrool-gutter-2: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .5)};  // 8
            --acrool-gutter-3: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .75)};  // 12

            --acrool-gutter-4: var(--acrool-gutter);

            --acrool-gutter-6: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 1.25)}; // 20
            --acrool-gutter-7: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 1.5)}; // 24
            --acrool-gutter-8: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 1.75)}; // 28
            --acrool-gutter-9: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 2)}; // 32
        }

        ${renderDisplayStyle()}
        ${renderPositionStyle()}
        ${renderAutoFlowStyle()}

        ${renderFlexStyle()}
        ${renderFlexAlignStyle()}
        ${renderGColStyle()}
        ${renderGRowStyle()}

        ${renderWidthStyle()}
        ${renderHeightStyle()}
        ${renderTextStyle()}
        ${renderRoundStyle()}
        ${renderMarginStyle(props.theme.bearReactGrid)}
        ${renderPaddingStyle(props.theme.bearReactGrid)}
        ${renderGapStyle(props.theme.bearReactGrid)}
        ${renderGutterStyle()}
        ${renderOrderStyle()}
        ${renderOverflowStyle()}

        ${generateRWDStyled(props.theme.bearReactGrid)}
    `}

`;
