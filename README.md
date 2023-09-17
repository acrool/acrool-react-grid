# bear-react-grid



<div align="center">
        <a href="https://bear-react-grid.github.io" title="Bear Grid Logo - CSS IN JS following Bootstrap RWD design, composed of React + Styled Component">
            <img src="https://github.com/imagine10255/bear-react-grid/blob/main/logo.png" alt="Bear React Grid Logo - Most modern mobile touch slider with hardware accelerated transitions for ReactJS" />
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
  <a href="https://bear-react-grid.github.io/docs/grid-system">Grid System</a>
  <a href="https://bear-react-grid.github.io/docs/css-grid">CSS Grid</a>
</p>


## Features

- Use `React` + `Styled-component` and `styled-component themeProvider`
- Easier to use
- Refer to the design of `bootstrap 5` and change it to `CSS IN JS` method
- Provides tool CSS for `Bootstrap 5` layout
- Provide `RWD` Media query method

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
    gridGutterWidthMedia: {
        sm: '.625rem',
        md: '.625rem',
        lg: '.625rem',
        xl: '.625rem',
        xxl: '.625rem',
    }
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

[Component and setup docs](./docs/component.md)


## License

MIT © [imagine10255](https://github.com/imagine10255)
````
