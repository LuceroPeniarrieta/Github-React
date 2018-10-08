const api = "https://api.github.com"

const headers = {
  'Content-Type': 'application/json'
}

export const getAll = () =>
  fetch(`${api}/users`, { headers })
    .then(res =>  res.json())

export const getRepos = (username) =>
  fetch(`${api}/users/${username}/repos`, { headers })
    .then(res =>  res.json())