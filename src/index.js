'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello.world';

const mountNode = document.getElementById('root');

ReactDOM.render(
    <HelloWorld />,
    mountNode
);


/* "test": "mocha $(find test -name '*.js') --compilers js:babel-core/register", */
