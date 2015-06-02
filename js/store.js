var EventEmitter = require('events').EventEmitter;

var objectAssign = require('object-assign');
var randomColor = require('randomcolor');

var dispatcher = require('./dispatcher');
var data = require('../data.json');

var categories = data.map(function(i){
    return i.category;
}).filter(function(value, index, self){
    return self.indexOf(value) === index;
});

var colors = randomColor({ count: categories.length, luminosity: 'light' });

categories = categories.map(function(value, i){
    var pretty = value.replace(' ', '');
    if (pretty === '') { pretty = '?'; }
    return {value: value, pretty: pretty, active: true, color: colors[i]};
});

categories.sort(function (a, b) {
    if (a.pretty > b.pretty) { return  1; }
    if (a.pretty < b.pretty) { return -1; }
    return 0;
});

var store = objectAssign({}, EventEmitter.prototype, {
    categories: categories,
    data: data,
    graphStep: 600
});

dispatcher.addListener('toggleCategory', function(value) {
    store.categories = store.categories.map(function(i){
        if (i.value === value) {
            i.active = !i.active;
        }
        return i;
    });

    store.emit('change');
});

dispatcher.addListener('changeGraphStep', function(value) {
    store.graphStep = value;

    store.emit('change');
});

module.exports = store;
