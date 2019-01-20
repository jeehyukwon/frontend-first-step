# 1. Parcel을 활용한 기본적인 웹 개발 환경 설정
*[Parcel](https://parceljs.org/)을 활용해 쉽게  HTML/CSS 개발 환경을 설정합니다 [이동](./parcel)*

- 프로젝트를 시작하는데 필요한 Dependencies를 설치합니다
```bash
$ yarn init                       # 새로운 Node 프로젝트를 생성합니다
$ yarn add --dev parcel-bundler   # Parcel Bundler를 설치합니다
```

- 프로젝트 폴더 내에 `src` 폴더를 만듭니다
- `src` 폴더 내에 `index.html` 파일을 만듭니다
```html
<!doctype html>
<html>
  <head>
    <title>Hello, World</title>
    <link rel="stylesheet" href="./styles/main.scss" />
  </head>
  <body>
    <div id="app">
      Hello, World
    </div>
    <script src="./main.js"></script>
  </body>
</html>
```

- `src` 폴더 내에 `main.js` 파일을 만듭니다
```javascript
console.log('Hello, World')
```

- `src` 폴더 내에 `styles` 폴더를 만든 후에 `main.scss`를 만듭니다
```scss
body {
  padding: 0;
  margin: 0;
}

#app {
  color: blue;
}
```

- 프로젝트 폴더 내 `package.json`에 다음 항목을 추
가합니다
```json
{
  "scripts": {
    "dev": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html"
  }
}
```

- Parcel을 통해 ES6와 SCSS를 사용하는 프로젝트를 설정 없이 간단하게 생성가능합니다.
- 빠른 모듈 교체(HMR: Hot Module Replacement)를 지원하므로, 새로고침 없이 쉽고 빠르게 개발하실 수 있습니다.
- Babel 설정 등 간단한 설정을 바꾸고 싶으시다면, [Parcel 웹사이트](https://parceljs.org/)를 참고해주시고,
- 각종 `loader`의 복잡한 설정을 직접 하고 싶으시다면, [Webpack](https://webpack.js.org)을 사용하세요
> Component 수가 적지 않은 (20-30개 이상) Production 레벨의 Web Application을 개발하신다면, Webpack을 사용을 추천합니다.