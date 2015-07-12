import moment from 'moment';

function pad(num, digits) {
  let str = num.toString();
  while (str.length < digits) {
    str = '0' + str;
  }
  return str;
}

export const sexTrl = {
  'M': 'Мужчины',
  'F': 'Женщины'
};

export function humanCat(c) {
  return `${sexTrl[c.substring(0,1)]} ${c.substring(1)}`;
}

export function humanTime(t) {
  if (typeof t === 'undefined') {
    return null;
  }

  const d = moment.duration(t);
  return `${d.hours()}:${pad(d.minutes(),2)}:${pad(d.seconds(),2)}.${pad(d.milliseconds(),3)}`;
}

export function range(l) {
  let arr = [];
  for (let i=0; i<=l; i++) {
    arr.push(i);
  }
  return arr;
}
