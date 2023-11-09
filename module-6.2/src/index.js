import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {batch,batchName, default as sample} from './function';
// ------------or--------------------
import * as utilities from './function';
import {default as sample} from './function';
import CardLink from './CardLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(utilities);
console.log(utilities.batchName());
sample();

root.render(
  <React.StrictMode>
    <div>this is div</div>
    {/* we can execute the jsx as a tag */}
    {/* jsx file should not be invoked as a normal function */}
    { /* {cardLink()} */ }
    <CardLink />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
