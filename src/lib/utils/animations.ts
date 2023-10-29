import { cubicIn, cubicOut } from 'svelte/easing';

export const fadeOptions = {
  in: {
    delay: 300,
    duration: 600,
    easing: cubicIn
  },
  out: {
    duration: 400,
    easing: cubicOut
  }
};
