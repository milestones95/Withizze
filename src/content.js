/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import App from "./App";
class Main extends React.Component {
    render() {
      return <h1>Hello, Miles</h1>;
    }
}

componentWillMount() {
  window.test();
}

const app = document.createElement('div');
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = "none";

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}

function CreateButton() {
  var dropDownDiv = document.createElement('div');
  dropDownDiv.className = "dropdown1";
  dropDownDiv.style.background = "blue";
  dropDownDiv.style.display = "relative";
  dropDownDiv.style.position = "absolute";
  var dropDownDivText = document.createElement('span');
  dropDownDivText.innerHTML = 'Withizze';

  var dropDownContentDiv = document.createElement('div');
  dropDownContentDiv.className = "dropdown-content";
  dropDownContentDiv.style.display = 'none';
  dropDownContentDiv.style.position = 'absolute';
  dropDownContentDiv.style.background = '#f9f9f9';
  dropDownContentDiv.style.minWidth = '160px';
  dropDownContentDiv.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
  dropDownContentDiv.style.padding = '12px 16px';
  dropDownContentDiv.style.zIndex = '1';


  var dropDownContentText= document.createElement('p');
  dropDownContentText.innerHTML = 'Hello World';

  dropDownContentDiv.appendChild(dropDownContentText)
  dropDownDiv.appendChild(dropDownDivText)
  dropDownDiv.appendChild(dropDownContentDiv)
  return dropDownDiv;
}
