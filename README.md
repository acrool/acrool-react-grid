# bear-react-grid



<div align="center">
        <a href="https://bear-react-grid.github.io" title="Bear Grid Logo - CSS IN JS following Bootstrap RWD design, composed of React + Styled Component">
            <img src="https://github.com/imagine10255/bear-react-grid/blob/main/logo.png" alt="Bear React Grid Logo - CSS IN JS following Bootstrap RWD design, composed of React + Styled Component" />
        </a>
</div>

<div align="center">



[![NPM](https://img.shields.io/npm/v/bear-react-grid.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-grid)
[![npm downloads](https://img.shields.io/npm/dm/bear-react-grid.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-grid)
[![npm](https://img.shields.io/npm/dt/bear-react-grid.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-grid)
[![npm](https://img.shields.io/npm/l/bear-react-grid?style=for-the-badge)](https://github.com/imagine10255/bear-react-grid/blob/main/LICENSE)

</div>

<p align="center">
  <a href="https://bear-react-grid.github.io/docs/getting-started">Get started</a> |
  <a href="https://bear-react-grid.github.io/docs/config">Config</a> |
  <a href="https://bear-react-grid.github.io/docs/utilities">Utilities</a> |
  <a href="https://bear-react-grid.github.io/docs/grid-system">Grid System</a> |
  <a href="https://bear-react-grid.github.io/docs/css-grid">CSS Grid</a>
</p>


## Features

- Use `React` + `Styled-component` and `styled-component themeProvider`
- Easier to use
- Refer to the design of `Bootstrap 5` and change it to `CSS IN JS` method
- Provides tool CSS for `Bootstrap 5` layout
- Provide `RWD` Media query method
- Support NextJS 13 (v5.0.3+)

## Install

```bash
yarn add bear-react-grid
```

in your packages. (Make the version of styled-component you use match the version of styled-component used in bear-react-gird)

```json
"resolutions": {
   "styled-components": "5.3.9"
}
```


## Usage
in your App.js add  
`see the example/src/App.js`

```tsx
import {GridThemeProvider, IGridSetting} from 'bear-react-grid';
import 'bear-react-grid/dist/index.css';


const gridTheme: IGridSetting = {
    spacer: '1rem',
    gridGutterWidth: '.625rem',
    gridColumns: 24,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1141,
    },
}


<GridThemeProvider gridTheme={gridTheme}>
    <App/>
</GridThemeProvider>
```

use in your page/component:
```tsx
import {Container, Row, Col, media} from 'bear-react-grid';

const MyPage = () => {
    return (
        <Container>
            <MyTitle>bear-react-grid</MyTitle>
            <Row>
                <Col col>col2 (50%) </Col>
                <Col col>col2 (50%) </Col>
            </Row>
        </Container>
    );
}

// use rwd
const MyTitle = styled.div`
    font-size: 12px;
    ${media.md`
        font-size: 14px;
    `}
`

```

There is also a codesandbox template that you can fork and play with it:

[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/bear-react-grid-lqsn6)

Use Nextjs example


[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/bear-react-grid/bear-react-grid-nextjs/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clmp2dzvb000i3b6jx2a07e5g%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clmp2dzvb000e3b6j3kmcxpc5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clmp2dzvb000g3b6jdxrcas6h%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clmp2dzvb000h3b6jbuji8m8f%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clmp2dzvb000e3b6j3kmcxpc5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clmp2dzva000d3b6jf3ui1ue0%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clmp2dzvb000e3b6j3kmcxpc5%2522%252C%2522activeTabId%2522%253A%2522clmp2dzva000d3b6jf3ui1ue0%2522%257D%252C%2522clmp2dzvb000h3b6jbuji8m8f%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clmp2dzvb000h3b6jbuji8m8f%2522%257D%252C%2522clmp2dzvb000g3b6jdxrcas6h%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clmp2dzvb000f3b6j1rzxipse%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clmp2e02l000pe7h58qrt1ok2%2522%257D%255D%252C%2522id%2522%253A%2522clmp2dzvb000g3b6jdxrcas6h%2522%252C%2522activeTabId%2522%253A%2522clmp2dzvb000f3b6j1rzxipse%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)



## License

MIT © [imagine10255](https://github.com/imagine10255)
````
