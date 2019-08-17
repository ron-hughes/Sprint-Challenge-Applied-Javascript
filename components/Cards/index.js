// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function ArticleCard(data) {

    // Creating DOM elements
    const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
    const headline = document.createElement('div')
        headline.classList.add('headline')
    const author = document.createElement('div')
        author.classList.add('author')
    const imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container')
    const image = document.createElement('img')

    const span = document.createElement('span')
``


    // Adding content to elements from parameters
    headline.textContent = data.headline
    image.src = data.authorPhoto
    span.textContent = data.authorName


      // appending elements to DOM
      cardDiv.appendChild(headline)
      cardDiv.appendChild(author)
      author.appendChild(imgContainer)
      imgContainer.appendChild(image)
      author.appendChild(span)
  
      // Always return data
      return cardDiv
}


let cards_container = document.querySelector('.cards-container')

// articles is an object whose data are also objects with an array of objects

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
    // console.log(res.data) 
    let articles = res.data.articles
    articles.bootstrap.forEach(e => {
     let bootArt = ArticleCard(e) 
     cards_container.appendChild(bootArt)
    })
    return res
})
.then((res) => {
    let articles = res.data.articles
    articles.javascript.forEach(e => {
        let javaArt = ArticleCard(e)
    cards_container.appendChild(javaArt)
    })
    return res
})
.then((res) => {
    let articles = res.data.articles
    articles.jquery.forEach(e => {
        let jqueryArt = ArticleCard(e)
    cards_container.appendChild(jqueryArt)
    })
    return res
})
.then((res) => {
    let articles = res.data.articles
    articles.node.forEach(e => {
        let nodeArt = ArticleCard(e)
    cards_container.appendChild(nodeArt)
    })
    return res
})
.then((res) => {
    let articles = res.data.articles
    articles.technology.forEach(e => {
        let technologyArt = ArticleCard(e)
    cards_container.appendChild(technologyArt)
    })
})
.catch((res) => {
    console.log('This is an error response' + res)
})