import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipeReviewCard from './RecipeReviewCard';
import registerServiceWorker from './registerServiceWorker';

window.onscroll = function () {
  const viewport = document.getElementsByClassName("product-tile__badges");
  for (var i = 0; i < viewport.length; i++) {
      ReactDOM.render(<RecipeReviewCard />, viewport[i]);
  }
};
// // Get the element to prepend our app to. This could be any element on a specific website or even just `document.body`.
//
// // Create a div to render the <App /> component to.
// const app = document.createElement('div');
//
// // Set the app element's id to `root`. This is the same as the element that create-react-app renders to by default so it will work on the local server too.
// app.id = 'root';
//
// // Prepend the <App /> component to the viewport element if it exists. You could also use `appendChild` depending on your needs.
// if (viewport) viewport.prepend(app);

// Render the <App /> component.
// ReactDOM.render(<App />, viewport[0]);
registerServiceWorker();
