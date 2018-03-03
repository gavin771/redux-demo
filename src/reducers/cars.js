export default function (state = {}, action) {
  switch (action.type) {
    case 'SEARCH_CARS':
      return { ...state, list: action.payload }
    case 'VIEW_CAR':
      return { ...state, detail: action.payload }
    default:
      return state
  }
}