const express = require('express')
const request = require('superagent')

const router = express.Router()

// GET / api / v1 / meals
router.get('/random', (req, res) => {
  try {
    return request
      .get('www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => res.json(response.body))
  } catch (error) {
    console.error(error)
  }
})

// GET / api / v1 / details

router.get('/details/:id', (req, res) => {
  try {
    const id = req.params.id
    return request
      .get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => res.json(response.body))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// GET / api / v1 / meals

router.get('/search/:meal', (req, res) => {
  try {
    const meal = req.params.meal
    return request
      .get(`www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((response) => res.json(response.body))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
