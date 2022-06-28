import { writable, derived } from 'svelte/store';

const to = (prefix, base) => (v) =>
  `${prefix}: ${parseFloat(v, 10).toString(base)}`;
const toHex = to('Hex', 16);
const toOct = to('Oct', 8);
const toBin = to('Bin', 2);

export const placeholder = '0';

// Stack array and levels. There are as many levels as given by
// `length`, but they are the other way round (due to pretty dumb
// JS array datatype).
//
// stack.length = 5
// stack[4] => level 1
// stack[3] => level 2
// stack[2] => level 3
// stack[1] => level 4
// stack[0] => level 5

const extractLevel = (l) => (s) =>
  l <= s.length ? s[s.length - l] : placeholder;

export const getCalculatorValues = () => {
  const stackValues = writable([]);
  const value0 = writable(placeholder);
  const value1 = derived(stackValues, extractLevel(1));
  const value2 = derived(stackValues, extractLevel(2));
  const value3 = derived(stackValues, extractLevel(3));
  const value4 = derived(stackValues, extractLevel(4));
  const hexValue0 = derived(value0, toHex);
  const octValue0 = derived(value0, toOct);
  const binValue0 = derived(value0, toBin);

  const stack = {
    value1,
    value2,
    value3,
    value4,
    push: (x) => {
      stackValues.update((vs) => {
        vs.push(x);
        return vs;
      });
    },
    pop: () => {
      let result;
      stackValues.update((vs) => {
        result = vs.pop();
        return vs;
      });
      return result;
    },
  };

  return { stack, value0, hexValue0, octValue0, binValue0 };
};

export const contextKey = {};
