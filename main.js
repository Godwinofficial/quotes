const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn')
const loaderDefault = ` <img class="img loading" src="loader.gif" id="image" />`

/*BEFORE BUTTON CLICK*/
document.getElementById('quote').innerHTML = loaderDefault
document.getElementById('author').innerText = 'Loading...'


const api = 'https://type.fit/api/quotes'

fetch(api)
  .then(results => results.json())
  .then(data => {
    const getIndex = Math.floor(Math.random() * data.length)
    quote.innerText = data[getIndex].text
    author.innerText = `Author: ${data[getIndex].author}`
  })


/*AFTER BUTTON CLICK*/

btn.addEventListener('click', getQuotes)

let loader = ` <img class="img loading" src="loader.gif" id="image" />`

function getQuotes() {

  document.getElementById('quote').innerHTML = loader
  document.getElementById('author').innerText = 'Loading...'
  fetch(api)
    .then(results => results.json())
    .then(data => {
      const getIndex = Math.floor(Math.random() * data.length)
      quote.innerText = data[getIndex].text
      author.innerText = `Author: ${data[getIndex].author}`
    });

}