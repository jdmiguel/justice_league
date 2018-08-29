export const introLettersMenu = (
  elementToAnimate,
  { duration, globalDelay, staggerDelay }
) => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    duration,
    {
      alpha: 0,
      x: -50,
      rotationY: 120
    },
    {
      delay: globalDelay,
      alpha: 1,
      x: 0,
      rotationY: 0,
      transformOrigin: '50% 50%',
      ease: Power1.easeOut
    },
    staggerDelay
  );
};

export const inLettersMenu = (
  elementToAnimate,
  { duration, globalDelay, staggerDelay, xDistances }
) => {
  console.log('outLettersMenu elementToAnimate: ', elementToAnimate);
  console.log('outLettersMenu duration: ', duration);
  console.log('outLettersMenu globalDelay: ', globalDelay);
  console.log('outLettersMenu staggerDelay: ', staggerDelay);
  console.log('outLettersMenu xDistances: ', xDistances);

  const { global, stagger } = xDistances;
};

export const outLettersMenu = (
  elementToAnimate,
  { duration, globalDelay, staggerDelay, xDistances }
) => {
  /* console.log('outLettersMenu elementToAnimate: ', elementToAnimate);
  console.log('outLettersMenu duration: ', duration);
  console.log('outLettersMenu globalDelay: ', globalDelay);
  console.log('outLettersMenu staggerDelay: ', staggerDelay);
  console.log('outLettersMenu xDistances: ', xDistances); */

  const { global, stagger } = xDistances;

  TweenMax.staggerFromTo(
    elementToAnimate,
    duration,
    {
      alpha: 1,
      x: 0,
      rotationY: 0
    },
    {
      delay: globalDelay,
      cycle: { x: i => global + i * stagger },
      alpha: 0,
      rotationY: 0,
      ease: Power1.easeIn
    },
    staggerDelay
  );
};
