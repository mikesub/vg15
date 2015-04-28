module.exports = function(href) {
    var link = document.createElement('link');
    var tag = document.getElementsByTagName('script')[0];
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', href);
    tag.parentNode.insertBefore(link, tag);
};