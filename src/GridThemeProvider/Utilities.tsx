import {createGlobalStyle, css} from 'styled-components';
import {TStyledProps, TThemeProps} from '../types';
import {calcUnitSize, generateRWDStyled} from './utils';

export const Utilities = createGlobalStyle`

    ${(props: TStyledProps<TThemeProps>) => css`
        :root{
            --bear-border-radius: .375rem;
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

        ${generateRWDStyled(props)}
    `}

`;
