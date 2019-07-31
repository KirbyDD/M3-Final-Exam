const animalsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GATHER_DATA':
      return action.data
    default:
      return state
  }
}

export default animalsReducer;