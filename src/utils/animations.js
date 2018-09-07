// LETTERS MENU ANIMATIONS

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
    3,
    {
      alpha: 0,
      scale: 0.5,
      drawSVG: '100%'
    },
    {
      delay: 3.5,
      alpha: 1,
      scale: 1,
      drawSVG: 0,
      transformOrigin: '50% 50%',
      ease: Power1.easeOut,
      onComplete: () => callback()
    }
  );

  TweenMax.fromTo(
    secondElementToAnimate,
    6.5,
    {
      drawSVG: '100%'
    },
    {
      delay: '-=3.5',
      drawSVG: 0,
      ease: Power1.easeOut
    }
  );
};

export const inRightLogoMenu = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.7,
    {
      scale: 0.8,
      alpha: 1,
      rotationY: -120
    },
    {
      delay: 0.5,
      scale: 1,
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeIn
    }
  );
};

export const inLeftLogoMenu = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.7,
    {
      scale: 0.8,
      alpha: 1,
      rotationY: 120
    },
    {
      delay: 0.5,
      scale: 1,
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeIn
    }
  );
};

export const outRightLogoMenu = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.7,
    {
      scale: 1,
      alpha: 1,
      rotationY: 0
    },
    {
      scale: 0.7,
      alpha: 1,
      rotationY: -120,
      ease: Power1.easeIn
    }
  );
};

export const outLeftLogoMenu = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.7,
    {
      scale: 1,
      alpha: 1,
      rotationY: 0
    },
    {
      scale: 0.7,
      alpha: 1,
      rotationY: 120,
      ease: Power1.easeIn
    }
  );
};

// BACKGROUND MENU ANIMATIONS

/* export const introBackgroundMenu = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    5,
    {
      alpha: 0
    },
    {
      delay: 4,
      alpha: 0.2,
      ease: Power1.easeOut
    }
  );
};

export const overBackgroundMenu = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.55,
    {
      alpha: 0.2
    },
    {
      alpha: 0.4,
      ease: Bounce.easeOut
    }
  );
};

export const outBackgroundMenu = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.55,
    {
      alpha: 0.4
    },
    {
      alpha: 0.2,
      ease: Bounce.easeOut
    }
  );
}; */
