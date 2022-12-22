import request from 'superagent'

export function getRandomeMeal() {
  return request.get('/api/v1/meals/random').then((res) => res.body)
}

export function getDetails(id) {
  return request.get(`/api/v1/meals/details/${id}`).then((res) => res.body)
}

export function getMeal(name) {
  return request.get(`/api/v1/meals/search/${name}`).then((res) => res.body)
}
