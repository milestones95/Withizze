import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipeReviewCard from './RecipeReviewCard';
//import WithizzeReviewCard from './WithizzeReviewCard';

import registerServiceWorker from './registerServiceWorker';

window.onscroll = function () {
  const viewport = document.getElementsByClassName("product-tile__badges");
  for (var i = 0; i < viewport.length; i++) {
      ReactDOM.render(<RecipeReviewCard />, viewport[i]);
  }
};

registerServiceWorker();
