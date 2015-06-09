import Root from './components/root.react';
import React from 'react';

window.document.addEventListener('DOMContentLoaded', function(){
    var node = window.document.createElement('div');
    window.document.body.appendChild(node);
    React.render(<Root/>, node);
});




