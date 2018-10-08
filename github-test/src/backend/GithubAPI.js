const api = "https://api.github.com"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Content-Type': 'application/json'
}

export const getAll = () =>
  fetch(`${api}/users`, { headers })
    .then(res =>  res.json())

export const getRepos = (username) =>
  fetch(`${api}/users/${username}/repos`, { headers })
    .then(res =>  res.json())