export const introLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    1.1,
    {
      alpha: 0,
      x: -50,
      rotationY: 120
    },
    {
      delay: 5,
      alpha: 1,
      x: 0,
      rotationY: 0,
      transformOrigin: '50% 50%',
      ease: Power1.easeOut
    },
    0.08
  );
};

export const inRightLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.4,
    {
      alpha: 0,
      x: 0,
      rotationY: 0
    },
    {
      delay: 0,
      cycle: { x: i => -200 + i * 20 },
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeOut
    },
    0.01
  );
};

export const inLeftLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.4,
    {
      alpha: 0,
      x: 0,
      rotationY: 0
    },
    {
      delay: 0,
      cycle: { x: i => 50 + i * 40 },
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeOut
    },
    0.01
  );
};

export const outLeftLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.4,
    {
      alpha: 1,
      x: 0,
      rotationY: 0
    },
    {
      delay: 0,
      cycle: { x: i => -200 + i * 20 },
      alpha: 0,
      rotationY: 0,
      ease: Power1.easeIn
    },
    0.01
  );
};

export const outRightLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.4,
    {
      alpha: 1,
      x: 0,
      rotationY: 0
    },
    {
      delay: 0,
      cycle: { x: i => 50 + i * 40 },
      alpha: 0,
      rotationY: 0,
      ease: Power1.easeIn
    },
    0.01
  );
};
