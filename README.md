# Acrool React Grid

<a href="https://acrool-react-grid.pages.dev/" title="Acrool React Grid - CSS IN JS following Bootstrap RWD design, composed of React + Styled Component">
    <img src="https://acrool-react-grid.pages.dev/img/og.webp" alt="Acrool React Grid Logo" />
</a>

<p align="center">
    CSS IN JS following Bootstrap RWD design, composed of React + Styled Component
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-grid.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-grid)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-grid?style=for-the-badge)](https://github.com/acrool/@acrool/react-grid/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-grid?style=for-the-badge)](https://github.com/acrool/react-grid/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-grid.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-grid)
[![npm](https://img.shields.io/npm/dt/@acrool/react-grid.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-grid)


</div>


| Version | Styled-component | React       |
|---------|------------------|-------------|
| 6.x     | 6.x              | ^18.3       |
 | 5.x     | 5.x              | 18.0 ~ 18.3 | 


## Documentation

- [Getting Started](https://acrool-react-grid.pages.dev/docs/getting-started)
- [Faq](https://acrool-react-grid.pages.dev/docs/category/faqs)
- [Config](https://acrool-react-grid.pages.dev/docs/config)
- [Utilities](https://acrool-react-grid.pages.dev/docs/utilities)
- [Breakpoints](https://acrool-react-grid.pages.dev/docs/breakpoints)
- [Container](https://acrool-react-grid.pages.dev/docs/container)
- [Grid System](https://acrool-react-grid.pages.dev/docs/category/grid-system)
- [CSS Grid](https://acrool-react-grid.pages.dev/docs/category/css-grid)
- [Storybook](https://acrool-react-grid-storybook.pages.dev)

## Features

- Use `React` + `Styled-component` and `styled-component themeProvider`
- Easier to use
- Refer to the design of `Bootstrap 5` and change it to `CSS IN JS` method
- Provides tool CSS for `Bootstrap 5` layout
- Provide `RWD` Media query method
- Support `NextJS 14` (v5.0.3+)
- Container max width `--container-max-width-?` Change from the middle level

## Installation

```bash
yarn add styled-components @acrool/react-grid
```

in your packages. (Make the version of styled-component you use match the version of styled-component used in acrool-react-gird)

```json
{
    "resolutions": {
        "styled-components": "6.1.17"
    }
}
```


in your App.js add  
`see the example/src/App.js`

```tsx
import {GridThemeProvider, IGridSetting} from '@acrool/react-grid';
import '@acrool/react-grid/dist/index.css';


const gridTheme: IGridSetting = {
    spacer: '1rem',
    gridColumns: 12,
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

***Override css setting***

create folder and file: `src/library/acrool-react-grid/grid.scss`

```scss
$breakpoints: (
      sm: 576px,
      md: 768px,
      lg: 992px,
      xl: 1200px,
      xxl: 1440px
);

$grid-gutters: (
    1: 0.25rem,
    2: 0.5rem,
    3: 0.75rem,
    4: 1rem,
    5: 1.25rem,
    6: 1.5rem,
    7: 1.75rem,
    8: 2rem,
    9: 2.25rem,
    10: 2.5rem,
    11: 2.75rem,
    12: 3rem,
    13: 3.25rem,
    14: 3.5rem,
    15: 3.75rem,
    16: 4rem,
    17: 4.25rem,
    18: 4.5rem
);

@import "@acrool/react-grid/dist/styles.scss";
```


## Examples

use in your page/component:
```tsx
import {Container, Row, Col, Grid, Flex, media} from '@acrool/react-grid';

const MyPage = () => {
    return (
        <Container>
            <MyTitle>acrool-react-grid</MyTitle>
            <Desc isVisible={false}>myDesc</Desc>
            
            <Row>
                <Col col>col2 (50%) </Col>
                <Col col>col2 (50%) </Col>
            </Row>
            <Grid columns={2}>
                <div>Grid Col2</div>
                
                <Flex className="flex-column gap-2">
                    <div>Grid Col3</div>
                    <div>Grid Col3</div>
                </Flex>
                
                
            </Grid>
            <Grid columns="repeat(1, 3fr)">
                <GridCol>Grid Col3</GridCol>
                <GridCol colSpan={2}>Grid Col3</GridCol>
            </Grid>
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

// use rwd props
const Desc = styled.div<{
    isVisible: boolean
}>`
    ${props => media.md`
        display: ${props.isVisible ? 'block': 'flex'}
    `}
    
    // or
    ${props => css`
        font-size: 12px;
        ${media.md`
            display: ${props.isVisible ? 'block': 'flex'}
        `}
    `}
`

```

## MediaConsumer

```tsx
<MediaConsumer sizes={['xxl']}>
    {(mediaSize)=> {

        if(mediaSize === 'xxl'){
            return <Marquee
                autoFill
                play={hoverId === null}
                className="py-8"
            >
                {renderCards(true)}
            </Marquee>;
        }


        return <Container fluid>
            <Flex column className="gap-8">
                {renderCards(false)}
            </Flex>
        </Container>;
    }}
</MediaConsumer>
```


There is also a codesandbox template that you can fork and play with it:

[Acrool React Grid Template](https://github.com/acrool/acrool-react-grid-template)

Use Nextjs example


[Acrool React Grid Nextjs Template](https://github.com/acrool/acrool-react-grid-nextjs)



There is also a storybook that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-grid/main/play-in-example-button.svg)](https://acrool-react-grid-storybook.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)

