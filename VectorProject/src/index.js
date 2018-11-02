'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"

import { sum, substract, divide } from "./components/module.js"

let a = sum(5, 3), b = substract(3, 1), c = divide(21, 3);
const res = `sum = ${a}, substract = ${b}, divide = ${c}`;

ReactDOM.render(
<div className="second1">
    <div className="second2">{res}</div>
</div>,
document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
