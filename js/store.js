var EventEmitter = require('events').EventEmitter;

var objectAssign = require('object-assign');

var dispatcher = require('./dispatcher');
var data = require('../data.json');

var categories = data.map(function(i){
    return i.category;
}).filter(function(value, index, self){
    return self.indexOf(value) === index;
}).map(function(value){
    var pretty = value.replace(' ', '');
    if (pretty === '') { pretty = '?'; }
    return {value: value, pretty: pretty, active: true};
});

categories.sort(function (a, b) {
    if (a.pretty < b.pretty) { return  1; }
    if (a.pretty > b.pretty) { return -1; }
    return 0;
});

var toggleCategory = function(categoryValue) {
    store.categories = store.categories.map(function(i){
        if (i.value === categoryValue) {
            i.active = !i.active;
        }
        return i;
    });
};

var toggleAllCategories = function() {
    store.categories = store.categories.map(function(i){
        i.active = !i.active;
        return i;
    });
};


var store = objectAssign({}, EventEmitter.prototype, {
    categories: categories,
    data: data
});

dispatcher.addListener('toggleCategory', function(categoryValue) {
    toggleCategory(categoryValue);
    store.emit('change');
});

dispatcher.addListener('toggleAllCategories', function() {
    toggleAllCategories();
    store.emit('change');
});

module.exports = store;
