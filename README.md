# react-styled-grid

> Most modern rwd grid system by react + styled-component


[![NPM](https://img.shields.io/npm/v/imagine-react-styled-grid.svg)](https://www.npmjs.com/package/react-styled-grid)
[![npm](https://img.shields.io/npm/dm/imagine-react-styled-grid.svg)](https://www.npmjs.com/package/react-styled-grid)

This project is generated from [react-typescript-library template](https://github.com/alioguzhan/react-typescript-library).


https://codesandbox.io/s/react-styled-grid-hmyod?file=/src/App.js

## Install

```bash
yarn add imagine-react-styled-grid
```

## Usage
in your index.js add  
`see the example/src/index.js`

```tsx
import {GridThemeProvider} from 'styled-bs-grid';
import 'imagine-react-styled-grid/dist/index.css'

<GridThemeProvider gridTheme={{
          gridGutterWidth: 10,
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
              xs: 540,
              sm: 540,
              md: 720,
              lg: 960,
              xl: 1140,
              xxl: 1141,
          },
      }}>
    <App/>
</GridThemeProvider>
```

use in your page/component:
```tsx
import {Container, Row, Col, media} from 'imagine-react-styled-grid';

const MyPage = () => {
    return (
        <Container>
            <MyTitle>styled-bs-grid</MyTitle>
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

[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-styled-grid-hmyod?file=/src/App.js)

[Component and setup docs](./docs/component.md)


## npm package manager

```bash
npm publish --access public
```


## License

MIT © [imagine10255](https://github.com/imagine10255)
