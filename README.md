# imreact-styled-grid

> Most modern mobile touch slider with hardware accelerated transitions by react

[![NPM](https://img.shields.io/npm/v/imreact-styled-grid.svg)](https://www.npmjs.com/package/imreact-styled-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add imreact-styled-grid
```

## Usage
add the your global css:

```css
html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}
```

in your index.js add  
`see the example/src/index.js`

```tsx
import {GridThemeProvider} from 'styled-bs-grid';

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
import {Container, Row, Col, media} from 'imreact-styled-grid';

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

const MyTitle = styled.div`
    font-size: 12px;
    ${media.md`
        font-size: 14px;
    `}
`

export default MyPage;
```

## npm Push
```bash
npm publish
```


## License

MIT © [imagine10255](https://github.com/imagine10255)
