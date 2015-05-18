window.document.addEventListener('DOMContentLoaded', function(){
    var div = window.document.createElement('div');
    require('./root.jsx')(div);
    window.document.body.appendChild(div);
});




