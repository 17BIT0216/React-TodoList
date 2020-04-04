import React from 'react';
import ReactDom from 'react-dom';
import Todo from './Todo';
import './todo.css';


var des=document.querySelector('#container');
ReactDom.render(
        <div>
            <Todo/>
         </div>,des
);