import _data from '../data/vg15.json';
var onUp = null;

// fix categories
const data = _data.map((i) => {
  if (i.category === null) {
    i.category = '';
    return i;
  }
  i.category = i.category.replace(' ', '');
  return i;
});

const mCount = data.filter(i => i.category && i.category.substring(0,1) === 'M').length;
const fCount = data.filter(i => i.category && i.category.substring(0,1) === 'F').length;

export const minTime = data.filter(i => i.time).reduce((prev, i) => (prev < i.time ? prev : i.time), Infinity);
export const maxTime = data.filter(i => i.time).reduce((prev, i) => (prev > i.time ? prev : i.time), -Infinity);

export const categories = data.map(i => i.category).filter((value, index, self) => self.indexOf(value) === index);
categories.sort();

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
  const sorted = data.filter(i => i.time).sort((a,b) => a.time - b.time);

  if (x) {
    x.absPos = sorted.filter((i) => (i.time < x.time)).length + 1;
    x.categoryPos = sorted.filter(i => i.category === x.category && i.time < x.time).length + 1;
    x.categoryTotal = sorted.filter(i => i.category === x.category).length;
    x.sexPos = sorted.filter(i => i.category.substring(0, 1) === x.category.substring(0, 1) && i.time < x.time).length + 1;
    x.sexTotal = x.category.substring(0, 1) === 'M' ? mCount : fCount;
    x.prevTime = sorted[(x.absPos-1)-1] && sorted[(x.absPos-1)-1].time;
    x.nextTime = sorted[(x.absPos-1)+1] && sorted[(x.absPos-1)+1].time;

    state.selectedNumber = x;
    window.location.hash = x.number;
  } else {
    state.selectedNumber = undefined;
    window.location.hash = '';
  }

  onUp && onUp(state);
}

selectNumber(Number(window.location.hash.substr(1)));
