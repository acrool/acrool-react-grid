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
    renderGColspanStyle
} from './utils';
import {noXsMediaSizes} from '../config';
import media from '../media';



const generateRWDStyled = (setting: IGridSetting) => {
    return noXsMediaSizes
        .map(sizeName => {
            return media[sizeName]`
            ${renderDisplayStyle(sizeName)}
            ${renderPositionStyle(sizeName)}
            ${renderFlexStyle(sizeName)}
            ${renderFlexAlignStyle(sizeName)}
            ${renderGColspanStyle(sizeName)}

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
            --bear-border-width: 1px;
            --bear-border-style: solid;
            --bear-border-color: #495057;
            --bear-border-radius: 0.375rem;
            --bear-border-radius-sm: 0.25rem;
            --bear-border-radius-lg: 0.5rem;
            --bear-border-radius-xl: 1rem;
            --bear-border-radius-xxl: 2rem;
            --bear-border-radius-2xl: var(--bear-border-radius-xxl);
            --bear-border-radius-pill: 50rem;

            --bear-spacer-1: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .25)};
            --bear-spacer-2: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .5)};
            --bear-spacer-3: ${props.theme.bearReactGrid.spacer};
            --bear-spacer-4: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 1.5)};
            --bear-spacer-5: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 3)};

            --bear-gutter-1: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .25)};
            --bear-gutter-2: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * .5)};
            --bear-gutter-3: ${props.theme.bearReactGrid.spacer};
            --bear-gutter-4: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 1.5)};
            --bear-gutter-5: ${calcUnitSize(props.theme.bearReactGrid.spacer, num => num * 3)};


        }

        ${renderDisplayStyle()}
        ${renderPositionStyle()}
        ${renderFlexStyle()}
        ${renderFlexAlignStyle()}
        ${renderGColspanStyle()}

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
