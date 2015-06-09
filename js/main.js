import go from './components/root.react';

window.document.addEventListener('DOMContentLoaded', function(){
    var div = window.document.createElement('div');
    go(div);
    window.document.body.appendChild(div);
});




