import styled from 'styled-components';

import {themeName} from '../../config';
import {calcUnitSize} from '../../GridThemeProvider/utils';
import {IRowProps, IRowStdProps,TStyledProps} from '../../types';


// - align-items 若預設加上 flex-start, 會讓鄰居Col高度不會一致
// - 設定會 width 100% 會產生 margin 抵銷失敗
// - padding-inline-start 避免 ul 預設樣式位移

/**
 * Row Component
 *
 * Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to uniformly apply column sizing and gutter classes to change the spacing of your content.
 *
 * By [Layout Grid System Row](https://acrool-react-grid.pages.dev/docs/layout/grid-system/row)
 */
const RowStd = styled.div<
    { 'data-grid-row'?: string } & TStyledProps<IRowStdProps>
>`

`;




const Row = (props: IRowProps) => {
    const {forwardAs, ref, children, onClick, ...htmlProps} = props;
    return <RowStd
        {...htmlProps}

        data-grid="row"
        data-class="row"
        as={forwardAs}
        ref={ref}

        children={children}
        onClick={onClick}
    />;
};


export default Row;

