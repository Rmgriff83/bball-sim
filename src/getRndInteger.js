export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export let excellent = function excellent() {
  let newInt = getRndInteger(77, 100);
  return newInt;
};
export let good = function good() {
  return getRndInteger(75, 90);
};
export let ok = function ok() {
  return getRndInteger(60, 80);
};
export let bad = function bad() {
  return getRndInteger(20, 61);
};
