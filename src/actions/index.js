const URL_ROOT = 'http://localhost:3000'

export function getCars (keywords) {
  const url = `${URL_ROOT}/carsIndex?q=${keywords}`;
  const request = fetch(url, { method: 'GET' }).then(res => res.json())

  return {
    type: 'SEARCH_CARS',
    payload: request
  }
}

export function getCarDetail (id) {
  const url = `${URL_ROOT}/carsIndex?id=${id}`;
  const request = fetch(url, { method: 'GET' }).then(res => res.json())

  return {
    type: 'VIEW_CAR',
    payload: request
  }
}