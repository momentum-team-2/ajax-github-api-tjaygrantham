const getJSON = axios.get('https://api.github.com/users/tjaygrantham').then(response => response.data)

getJSON.then(data => {
  const template = document.querySelector('#lodash-template').innerHTML
  const biogen = _.template(template)
  document.querySelector('#bio').innerHTML += biogen(data)
})