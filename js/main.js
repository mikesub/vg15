import React from 'react';
import 'babel-core/polyfill';
import Root from './components/root.react.js';

window.document.addEventListener('DOMContentLoaded', function(){
  var node = window.document.createElement('div');
  window.document.body.appendChild(node);
  React.render(<Root/>, node);
});
