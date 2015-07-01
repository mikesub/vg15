import _data from '../data/vg15.json';
import categories from '../data/categories.json';
var onUp = null;

import moment from 'moment';

const whiteList = Object.values(categories).reduce((prev, i) => (prev.concat(i)), []);
const data = _data
    .filter(i => whiteList.includes(i.category));

export const state = {
  selectedNumber: undefined,
  data: data,
  graphStep: 600
};

export function registerCallback(cb){
  onUp = cb;
}

export function selectNumber(number) {
  state.selectedNumber = data.filter((i) => i.number === number)[0];

  if (!state.selectedNumber) {
    return;
  }

  window.history.pushState({}, '', state.selectedNumber.number);

  state.selectedNumber.absPos = data
    .filter((i) => (i.time < state.selectedNumber.time))
    .length;

  state.selectedNumber.categoryPos = data
    .filter(i => i.category === state.selectedNumber.category && i.time < state.selectedNumber.time)
    .length;

  const sex = state.selectedNumber.category.substring(0,1);
  state.selectedNumber.sexPos = data
    .filter(i => i.category.substring(0,1) === sex && i.time < state.selectedNumber.time)
    .length;


  onUp && onUp(state);
}

export function changeGraphStep(value) {
  state.graphStep = value;
  onUp(state);
}

selectNumber(Number(window.location.pathname.substr(1)));
