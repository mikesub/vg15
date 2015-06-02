window.document.addEventListener('DOMContentLoaded', function(){
    var div = window.document.createElement('div');
    require('./components/root.react')(div);
    window.document.body.appendChild(div);
});




