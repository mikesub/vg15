import {range} from './utils.js';

function gradient(from, to, stepsCount) {
  const colorSteps = {
    r: (to.r - from.r)/stepsCount,
    g: (to.g - from.g)/stepsCount,
    b: (to.b - from.b)/stepsCount
  };

  let next = Object.assign({}, from);

  return range(stepsCount).map(() => {
    const current = Object.assign({}, next);

    current.r = current.r > 255 ? 255 : current.r;
    current.g = current.g > 255 ? 255 : current.g;
    current.b = current.b > 255 ? 255 : current.b;

    current.r = current.r < 0 ? 0 : current.r;
    current.g = current.g < 0 ? 0 : current.g;
    current.b = current.b < 0 ? 0 : current.b;

    next.r += colorSteps.r;
    next.g += colorSteps.g;
    next.b += colorSteps.b;

    return current;
  });
}

function rgb(r, g, b){
  return {r,g,b};
}

export function heatmap(total, centerIndex) {
  const blue = rgb(52, 152, 219);
  const red = rgb(231, 76, 60);
  const objects = gradient(blue, red, centerIndex).concat(gradient(red, blue, total - centerIndex - 1).slice(1));
  return objects.map(i => `rgb(${Math.floor(i.r)},${Math.floor(i.g)},${Math.floor(i.b)})`);
}

