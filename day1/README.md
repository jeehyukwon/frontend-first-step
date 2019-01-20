# 1일차 (JavaScript)

## Express.js 웹서버 만들기
Express.js를 활용해 간단한 웹서버를 제작합니다

- 프로젝트를 시작하는데 필요한 Dependencies를 설치합니다
```bash
$ yarn init               # 새로운 Node 프로젝트를 생성합니다
$ yarn add express        # Express를 설치합니다
$ yarn add body-parser    # body-parser를 설치합니다
$ yarn add cors           # cors를 설치합니다
$ yarn add --dev nodemon  # 개발용 nodemon을 설치합니다
```

- 프로젝트 폴더 내에 `index.js` 파일을 만듭니다

```javascript
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { resources } = require('./routes')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/resources', resources)

app.get('/', function (req, res) {
  res.json({
    message: 'Hello, World',
  })
})

app.listen(PORT, function () {
  console.log('http://localhost:' + PORT + '에서 서버가 동작중입니다')
})
```

- 다음 명령어로 서버가 정상적으로 작동하는지 테스트 합니다
```bash
$ npx nodemon ./index.js
```

- 프로젝트 폴더 내에 `routes` 폴더를 만듭니다
- `routes` 폴더 내에 `resources.js` 파일을 만듭니다
```javascript
const { Router } = require('express')

const router = Router()

const resources = [
  { id: 0, name: 'Tony' },
  { id: 1, name: 'Luna' },
  { id: 2, name: 'Stella' },
]

router.get('/', (req, res) => {
  res.json(resources)
})

router.get('/:id', (req, res) => {
  const resource = resources.find((resource) => (
    resource.id === Number(req.params.id)
  ))

  if (resource !== undefined) {
    res.json(resource)
  } else {
    res.status(404).json({
      error: true,
      message: req.params.id + '에 해당하는 Resource를 찾지 못했습니다',
    })
  }
})

router.post('/', (req, res) => {
  const lastResource = resources[resources.length - 1]
  const createdResource = {
    id: lastResource.id + 1,
    name: req.body.name,
  }

  resources.push(createdResource)

  res.json(createdResource)
})

router.put('/:id', (req, res) => {
  const resource = resources.find((resource) => (
    resource.id === Number(req.params.id)
  ))

  if (resource !== undefined) {
    resource.name = req.body.name
    res.json(resource)
  } else {
    res.status(404).json({
      error: true,
      message: req.params.id + '에 해당하는 Resource를 찾지 못했습니다',
    })
  }
})

router.delete('/:id', (req, res) => {
  const resourceIndex = resources.findIndex((resource) => (
    resource.id === Number(req.params.id)
  ))

  if (resourceIndex !== -1) {
    const deletedResource = resources[resourceIndex]
    resources.splice(resourceIndex, 1)
    res.json(deletedResource)
  } else {
    res.status(404).json({
      error: true,
      message: req.params.id + '에 해당하는 Resource를 찾지 못했습니다',
    })
  }
})

module.exports = router
```

- `routes` 폴더 내에 `index.js` 파일을 생성합니다
```javascript
const resources = require('./resources')

module.exports = {
  resources,
}
```

- `server.js` 파일 내에 다음을 삽입합니다
```javascript
const { resources } = require('./routes')

app.use('/resources', resources)
```

- `package.json`에 `scripts`를 추가합니다
```javascript
{
  "scripts": {
    "dev": "nodemon ./index.js",
    "start": "PORT=80 node ./index.js"
  }
}
```
