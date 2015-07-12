import data from '../data/vg15.json';
var onUp = null;

const mCount = data.filter(i => i.category.substring(0,1) === 'M').length;
const fCount = data.filter(i => i.category.substring(0,1) === 'F').length;

export const minTime = data.reduce((prev, i) => (prev < i.time ? prev : i.time), Infinity);
export const maxTime = data.reduce((prev, i) => (prev > i.time ? prev : i.time), -Infinity);

export const state = {
  selectedNumber: undefined,
  data: data,
  graphStep: 300
};

export function registerCallback(cb){
  onUp = cb;
}

export function selectNumber(number) {

  const x = data.filter((i) => i.number === number)[0];

  if (x) {
    x.absPos = data.filter((i) => (i.time < x.time)).length + 1;
    x.categoryPos = data.filter(i => i.category === x.category && i.time < x.time).length + 1;
    x.categoryTotal = data.filter(i => i.category === x.category).length;
    x.sexPos = data.filter(i => i.category.substring(0, 1) === x.category.substring(0, 1) && i.time < x.time).length + 1;
    x.sexTotal = x.category.substring(0, 1) === 'M' ? mCount : fCount;
    x.prevTime = data[(x.absPos-1)-1] && data[(x.absPos-1)-1].time;
    x.nextTime = data[(x.absPos-1)+1] && data[(x.absPos-1)+1].time;

    state.selectedNumber = x;
    window.location.hash = x.number;
  } else {
    state.selectedNumber = undefined;
    window.location.hash = '';
  }

  onUp && onUp(state);
}

export function changeGraphStep(value) {
  state.graphStep = value;
  onUp(state);
}

selectNumber(Number(window.location.hash.substr(1)));
