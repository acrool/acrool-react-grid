import {createGlobalStyle, css} from 'styled-components';

import {TStyledProps, TThemeProps} from '../types';


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
        }

    `}
`;
