import React from 'react';
import 'babel-core/polyfill';
import Root from './root.js';

import './index.css';

window.document.addEventListener('DOMContentLoaded', function(){
  var node = window.document.createElement('div');
  window.document.body.appendChild(node);
  React.render(<Root/>, node);
});
