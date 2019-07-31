export const gatherData = data => ({
  type: 'GATHER_DATA',
  data
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})