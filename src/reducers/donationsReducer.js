const donationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GATHER_DONATIONS':
      return action.donations
    default:
      return state
  }
}

export default donationsReducer;