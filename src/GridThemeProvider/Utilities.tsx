import {createGlobalStyle, css} from 'styled-components';
import {TStyledProps, TThemeProps} from '../types';
import {calcUnitSize} from './utils';
import {gutterUnit} from './config';

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

            --acrool-gutter: ${props.theme.acroolGrid.spacer};

            --acrool-gutter-1: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[1])}; // 4
            --acrool-gutter-2: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[2])};  // 8
            --acrool-gutter-3: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[3])};  // 12

            --acrool-gutter-4: var(--acrool-gutter);

            --acrool-gutter-5: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[5])}; // 20
            --acrool-gutter-6: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[6])}; // 24
            --acrool-gutter-7: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[7])}; // 28
            --acrool-gutter-8: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[8])}; // 32
            --acrool-gutter-9: ${calcUnitSize(props.theme.acroolGrid.spacer, num => num * gutterUnit[9])};
        }
    `}
`;
