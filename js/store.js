import _data from '../data/vg15.json';
import categories from '../data/categories.json';
var onUp = null;

const whiteList = Object.values(categories).reduce((prev, i) => (prev.concat(i)), []);
const data = _data.filter(i => whiteList.includes(i.category));

export const state = {
  selectedNumber: undefined,
  data: data,
  graphStep: 600
};

export function registerCallback(cb){
  onUp = cb;
}

export function selectNumber(number) {
  state.selectedNumber = data.filter((i) => Number(i.number) === number)[0];
  onUp(state);
}

export function changeGraphStep(value) {
  state.graphStep = value;
  onUp(state);
}
