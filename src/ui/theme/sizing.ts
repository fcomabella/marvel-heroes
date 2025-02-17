export const sizing = (...gridUnits: Array<number>): string =>
  gridUnits.map((unit) => `${unit * 0.5}rem`).join(' ');
