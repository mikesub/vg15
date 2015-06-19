import data from '../data/vg15.json';
var onUp = null;

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
