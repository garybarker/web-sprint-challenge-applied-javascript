import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageDiv);
  authorDiv.appendChild(name);
  imageDiv.appendChild(image);

  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imageDiv.classList.add("img-container");
  

  image.src = `${article.authorPhoto}`;
  headlineDiv.textContent = `${article.headline}`;
  name.textContent = `By ${article.authorName}`;

  cardDiv.addEventListener("click", () => {
    console.log(`${article.headline}`);
  });

  return cardDiv;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    const selected = document.querySelector(selector);

    res.data.articles.javascript.forEach(element => {
      selected.appendChild(Card(element))
    });
    res.data.articles.bootstrap.forEach(element => {
      selected.appendChild(Card(element))
    });
    res.data.articles.technology.forEach(element => {
      selected.appendChild(Card(element))
    });
    res.data.articles.jquery.forEach(element => {
      selected.appendChild(Card(element))
    });
    res.data.articles.node.forEach(element => {
      selected.appendChild(Card(element))
    });
     })
     
    
  .catch(err => {
    console.error(err)
  })
}


export { Card, cardAppender }
