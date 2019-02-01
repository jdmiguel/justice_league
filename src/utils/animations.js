// INTRO ANIMATIONS

export const introLogoIntro = (
  firstElementToAnimate,
  secondElementToAnimate,
  callback,
  callbackParam,
  callback2,
  callbackParam1,
  callbackParam2
) => {
  TweenMax.fromTo(
    firstElementToAnimate,
    2.2,
    {
      alpha: 0,
      scale: 2,
      transformOrigin: '50% 50%'
    },
    {
      delay: 0.5,
      alpha: 1,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Power1.easeInOut
    }
  );

  TweenMax.to(secondElementToAnimate, 3.5, {
    delay: 2.2,
    fillOpacity: 0.3,
    scale: 0.8,
    transformOrigin: '50% 50%',
    onComplete: () => {
      callback(callbackParam);
      setTimeout(() => callback2(callbackParam1, callbackParam2), 500);
    },
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
      delay: 6,
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

export const introLogoMenu = (elementToAnimate, callback) => {
  TweenMax.fromTo(
    elementToAnimate,
    2.2,
    {
      transformOrigin: '50% 50%',
      alpha: 0,
      scale: 0.5
    },
    {
      delay: 4.8,
      transformOrigin: '50% 50%',
      alpha: 1,
      scale: 1,
      ease: Power1.easeOut,
      onComplete: () => callback()
    }
  );
};

// MENU ANIMATIONS

export const outMenu = (elementToAnimate, callback) => {
  TweenMax.fromTo(
    elementToAnimate,
    1.5,
    {
      autoAlpha: 0
    },
    {
      autoAlpha: 1,
      ease: Power1.easeIn,
      onComplete: () => callback()
    }
  );
};

// CHARACTER ANIMATIONS

export const inBgCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    1.7,
    {
      autoAlpha: 0,
      scale: 1.8,
      x: -150,
      transformOrigin: '50% 50%'
    },
    {
      autoAlpha: 0.15,
      scale: 1,
      x: 0,
      ease: Cubic.easeOut
    }
  );
};

export const inAliasCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.8,
    {
      autoAlpha: 0,
      x: 200
    },
    {
      delay: 0.15,
      autoAlpha: 1,
      x: 0,
      ease: Cubic.easeOut
    }
  );
};

export const inNameCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.8,
    {
      autoAlpha: 0,
      x: 150
    },
    {
      delay: 0.3,
      autoAlpha: 1,
      x: 0,
      ease: Cubic.easeOut
    }
  );
};

export const inParagraphCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.8,
    {
      autoAlpha: 0,
      x: 120
    },
    {
      delay: 0.5,
      autoAlpha: 1,
      x: 0,
      ease: Power2.easeOut
    }
  );
};

export const inThumbsCharacter = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.7,
    {
      autoAlpha: 0,
      scale: 0.7,
      transformOrigin: '50% 50%'
    },
    {
      delay: 0.7,
      autoAlpha: 1,
      scale: 1,
      ease: Back.easeInOut
    },
    0.25
  );
};

export const inImgCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    1.6,
    {
      autoAlpha: 0,
      scale: 1.3,
      webkitFilter: 'blur(25px)',
      filter: 'blur(25px)',
      transformOrigin: '50% 50%'
    },
    {
      delay: 0.8,
      autoAlpha: 0.5,
      scale: 1,
      webkitFilter: 'blur(0)',
      filter: 'blur(0)',
      ease: Power1.easeOut
    }
  );
};

export const inBackBtnCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.5,
    {
      autoAlpha: 0,
      y: 30
    },
    {
      delay: 1.5,
      autoAlpha: 1,
      y: 0,
      ease: Power2.easeOut
    }
  );
};
