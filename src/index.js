import { calculateStarAverage } from "./logic.js";
//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
// on window load
window.onload = () => {
  renderReviews(reviews);
}
// render reviews array in class .reviews

function renderReviews(reviews){
  reviews.forEach(review => {
    renderReview(review);
  });
}

function renderReview(review){
  // query element in dom
  const section = document.querySelector(".reviews");

  // creating elements and assigning attributes
  const container = document.createElement("div");
  container.className = "review_container";
  const image = document.createElement("img");
  image.src = review.image;
  const reviewTextDiv = document.createElement("div");
  const username = document.createElement("p");
  const starRating = document.createElement("p");
  const content = document.createElement("p");

  // adding content to necessary elements
  username.textContent = review.username;
  starRating.textContent = review.star;
  content.textContent = review.review;

  // connecting elements to each other
  container.appendChild(image);
  container.appendChild(reviewTextDiv);
  reviewTextDiv.appendChild(username);
  reviewTextDiv.appendChild(starRating);
  reviewTextDiv.appendChild(content);

  // connect elements to dom
  section.appendChild(container);
}
// calculate and render star average in class .starRating
// ex: Star Rating: 5

// on form submit 
const button = document.querySelector("button");
button.onclick = (event) => {
  event.preventDefault();
  formSubmit();
}

function formSubmit(){
  // querying form values and adding to review object
  const username = document.querySelector("#username").value;
  const image = document.querySelector("#image").value;
  const star = document.querySelector("#star").value;
  const review = document.querySelector("#review").value;
  const newReview = {
    username,
    image,
    star,
    review
  };
  // add new review to array and render it
  reviews.push(newReview);
  renderReview(newReview);
}

