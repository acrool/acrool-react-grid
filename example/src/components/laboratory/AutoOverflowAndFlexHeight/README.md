## Auto Overflow And Flex Height

內容高度自動稱滿, 但是超過內容仍然保有 scrollbar 捲動

```tsx
<html>
    <body>
        <Container className="container">
            <Navbar/>
            <Content className="content"/>
            <Footer/>
        </Container>
    </body>
</html>
```

依照容器為準，有的時候可能是 #app 或者 body,
容器層的CSS設定必須為

```css
.container{
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
```

他的外層必須是顯示高度100%
所以

```css
 html, body {height: 100%}
```

而 content 則是

```css
.content {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
} 

```
