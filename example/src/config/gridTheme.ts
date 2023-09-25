import {GridThemeProvider, IGridSetting} from 'bear-react-grid';

export const gridTheme: IGridSetting = {
    spacer: '1rem',
    gutter: '20px',
    gridColumns: 24,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1234,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1234,
    },
};


export default gridTheme;