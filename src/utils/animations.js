// INTRO ANIMATIONS

export const introLogoIntro = firstElementToAnimate => secondElementToAnimate => callback => thirdElementToAnimate => {
  TweenMax.fromTo(
    firstElementToAnimate,
    1.9,
    {
      alpha: 0,
      rotationY: 180,
      transformOrigin: '50% 50%'
    },
    {
      alpha: 1,
      rotationY: 0,
      transformOrigin: '50% 50%',
      ease: Back.easeInOut
    }
  );

  TweenMax.to(secondElementToAnimate, 3.5, {
    delay: 2.2,
    fillOpacity: 0.3,
    scale: 0.8,
    transformOrigin: '50% 50%',
    onComplete: () => callback(thirdElementToAnimate),
    ease: Cubic.easeOut
  });
};

export const introLettersIntro = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    2.4,
    {
      cycle: { y: i => (i % 2 ? 200 * (i / 12) : -100 * (i * 0.05)) },
      alpha: 0,
      fill: '#FFFFFF',
      transformOrigin: '50% 50%'
    },
    {
      delay: 2,
      y: 0,
      alpha: 1,
      fill: '#282828',
      ease: Power1.easeOut
    },
    0.02
  );

  TweenMax.to(elementToAnimate, 2, {
    delay: 2.8,
    drawSVG: 0,
    stroke: '#757575',
    ease: Power1.easeInOut
  });
};

export const outIntro = elementToAnimate => {
  TweenMax.to(elementToAnimate, 0.5, {
    delay: 0,
    y: '-100%',
    ease: Cubic.easeIn
  });
};

// LETTERS MENU ANIMATIONS

export const introLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    1.1,
    {
      alpha: 0,
      x: -50,
      rotationY: 120,
      transformOrigin: '50% 50%'
    },
    {
      delay: 7,
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
    0.55,
    {
      alpha: 0,
      cycle: { x: i => 50 + i * 40 },
      rotationY: 0
    },
    {
      delay: 0.35,
      x: 0,
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
    0.55,
    {
      alpha: 0,
      cycle: { x: i => -200 + i * 20 },
      rotationY: 0
    },
    {
      delay: 0.35,
      x: 0,
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeOut
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

// MENU LOGO ANIMATIONS

export const introLogoMenu = firstElementToAnimate => secondElementToAnimate => callback => {
  TweenMax.fromTo(
    firstElementToAnimate,
    2.5,
    {
      alpha: 0
    },
    {
      delay: 6,
      alpha: 1,
      transformOrigin: '50% 50%',
      ease: Power1.easeOut,
      onComplete: () => callback()
    }
  );

  TweenMax.to(secondElementToAnimate, 8, {
    delay: 0.5,
    drawSVG: 0,
    ease: Power1.easeOut
  });
};
