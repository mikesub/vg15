import { EventEmitter } from 'events';

import data from '../data/vg15.json';

const categories = data
    .map((i) => i.category)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((value, i) => ({value: value, pretty: value.replace(' ', '').replace(/^$/,'?'), active: true}));

categories.sort(function (a, b) {
    if (a.pretty > b.pretty) { return  1; }
    if (a.pretty < b.pretty) { return -1; }
    return 0;
});

class Store extends EventEmitter {
    constructor() {
        super();
        this.categories = categories;
        this.data = data;
        this.graphStep = 600;
    }

    toggleCategory(value) {
        this.categories = this.categories.map(function (i) {
            if (i.value === value) {
                i.active = !i.active;
            }
            return i;
        });
        this.emit('update');
    }

    changeGraphStep(value) {
        this.graphStep = value;
        this.emit('update');
    }
}

var store = new Store();
export default store;
