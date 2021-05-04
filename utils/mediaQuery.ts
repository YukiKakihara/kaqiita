import facepaint from 'facepaint';

const mediaBreakpoints = [768, 992, 1200];

export const mq = facepaint(
  mediaBreakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);
