export const fetchAnimals = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
          .then(response => response.json())
          .catch(error => error.message)
}

export const fetchDonations = () => {
  return fetch('http://localhost:3001/api/v1/donations')
          .then(response => response.json())
          .catch(error => error.message)
}

export const postDonation = donation => {
  let option = {
    method: 'POST',
    body: JSON.stringify(donation),
    headers: {
      'content-type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/donations/', option)
          .catch(error => error.message)
}