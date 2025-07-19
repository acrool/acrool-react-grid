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
    // spacer: {
    //   xs: '1rem',
    //   lg: '40px',  
    // },
    containerFluidMargin: '40px',
    // containerFluidMargin: {
    //     xs: '40px',
    //     lg: '80px',
    // },
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
@use "@acrool/react-grid/dist/styles.scss" with (

    // 定义断点
    $breakpoints: (
        sm: 576px,
        md: 768px,
        lg: 992px,
        xl: 1200px,
        xxl: 1440px
    ),

    // 网格系统变量
    $grid-gutters: (
        1: 2px,
        2: 4px,
        3: 6px,
        4: 8px,
        5: 10px,
        6: 12px,
        7: 14px,
        8: 16px,
        9: 18px,
        10: 20px,
        11: 22px,
        12: 24px,
        13: 26px,
        14: 28px,
        15: 30px,
        16: 32px,
        17: 34px,
        18: 36px,
        19: 38px,
        20: 40px,
        21: 42px,
        22: 44px,
        23: 46px,
        24: 48px,
        25: 50px,
        26: 52px,
        27: 54px,
        28: 56px,
        29: 58px,
        30: 60px,
        31: 62px,
        32: 64px,
        33: 66px,
        34: 68px,
        35: 70px,
        36: 72px,
        37: 74px,
        38: 76px,
        39: 78px,
        40: 80px,
        41: 82px,
        42: 84px,
        43: 86px,
        44: 88px,
        45: 90px,
        46: 92px,
        47: 94px,
        48: 96px,
        49: 98px,
        50: 100px,
        51: 102px,
        52: 104px,
        53: 106px,
        54: 108px,
        55: 110px,
        56: 112px,
        57: 114px,
        58: 116px,
        59: 118px,
        60: 120px,
        61: 122px,
        62: 124px,
        63: 126px,
        64: 128px,
        65: 130px,
        66: 132px,
        67: 134px,
        68: 136px,
        69: 138px,
        70: 140px,
        71: 142px,
        72: 144px,
        73: 146px,
        74: 148px,
        75: 150px,
        76: 152px,
        77: 154px,
        78: 156px,
        79: 158px,
        80: 160px,
        81: 162px,
        82: 164px,
        83: 166px,
        84: 168px,
        85: 170px,
        86: 172px,
        87: 174px,
        88: 176px,
        89: 178px,
        90: 180px,
        91: 182px,
        92: 184px,
        93: 186px,
        94: 188px,
        95: 190px,
        96: 192px,
        97: 194px,
        98: 196px,
        99: 198px,
        100: 200px
    )
);

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


## Common Props

```tsx
export interface FCProps {
    id?: string
    style?: CSS.Properties
    className?: string
}

export interface FCChildrenProps extends FCProps {
    children?: ReactNode
}

export interface IFormFieldProps<G extends HTMLElement, T = string> {
    ref?: RefObject<G> | RefCallback<G>
    name?: string
    value?: T
    onChange?: ChangeEventHandler<G>
    placeholder?: string
}

export type TSetState<T> = (newValue: T) => void | Dispatch<SetStateAction<T>>
```

## Experiments

https://github.com/acrool/acrool-frontend-experiments

## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)

