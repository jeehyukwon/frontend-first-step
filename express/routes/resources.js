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
