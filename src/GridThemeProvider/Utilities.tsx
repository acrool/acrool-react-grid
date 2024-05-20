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
            --acrool-border-radius-lg: 0.5rem;
            --acrool-border-radius-xl: 1rem;
            --acrool-border-radius-xxl: 2rem;
            --acrool-border-radius-2xl: var(--acrool-border-radius-xxl);
            --acrool-border-radius-pill: 50rem;

            --acrool-gutter-1: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .25)};
            --acrool-gutter-2: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .5)};
            --acrool-gutter-3: ${props.theme.bearReactGrid.spacer};
            --acrool-gutter-4: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 1.5)};
            --acrool-gutter-5: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 3)};

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
