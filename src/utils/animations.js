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
    1.2,
    {
      scaleX: 3,
      scaleY: 0.3,
      alpha: 0,
      transformOrigin: '50% 50%'
    },
    {
      delay: 0.8,
      scaleX: 1,
      scaleY: 1,
      alpha: 1,
      ease: Elastic.easeInOut
    }
  );

  TweenMax.to(secondElementToAnimate, 2.2, {
    delay: 2.4,
    fillOpacity: 0.3,
    scale: 0.8,
    transformOrigin: '50% 50%',
    onComplete: () => {
      setTimeout(() => callback(callbackParam), 500);
      setTimeout(() => callback2(callbackParam1, callbackParam2), 1000);
    },
    ease: Power1.easeInOut
  });
};

export const introLettersIntro = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    3,
    {
      cycle: { y: i => (i % 2 ? 200 * (i / 12) : -100 * (i * 0.05)) },
      alpha: 0,
      fill: '#FFFFFF',
      transformOrigin: '50% 50%'
    },
    {
      delay: 2.4,
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
    stroke: '#FFFFFF',
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
    1.5,
    {
      alpha: 0,
      x: -50,
      rotationY: 120,
      transformOrigin: '50% 50%'
    },
    {
      delay: 5.5,
      alpha: 1,
      x: 0,
      rotationY: 0,
      transformOrigin: '50% 50%',
      ease: Power1.easeOut
    },
    0.1
  );
};

export const inRightLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.6,
    {
      alpha: 0,
      cycle: { x: i => 50 + i * 40 },
      rotationY: 0
    },
    {
      delay: 0.4,
      x: 0,
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeOut
    },
    0.015
  );
};

export const inLeftLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.6,
    {
      alpha: 0,
      cycle: { x: i => -200 + i * 20 },
      rotationY: 0
    },
    {
      delay: 0.4,
      x: 0,
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeOut
    },
    0.015
  );
};

export const outRightLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.47,
    {
      alpha: 1,
      x: 0,
      rotationY: 0
    },
    {
      cycle: { x: i => 50 + i * 40 },
      alpha: 0,
      rotationY: 0,
      ease: Power1.easeInOut
    },
    0.012
  );
};

export const outLeftLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.47,
    {
      alpha: 1,
      x: 0,
      rotationY: 0
    },
    {
      cycle: { x: i => -200 + i * 20 },
      alpha: 0,
      rotationY: 0,
      ease: Power1.easeInOut
    },
    0.012
  );
};

// MENU LOGO ANIMATIONS

export const introLogoMenu = (elementToAnimate, callback, fromIntro) => {
  const duration = fromIntro ? 2.2 : 1;

  TweenMax.fromTo(
    elementToAnimate,
    duration,
    {
      transformOrigin: '50% 50%',
      alpha: 0,
      scale: 0.5
    },
    {
      transformOrigin: '50% 50%',
      alpha: 1,
      scale: 1,
      ease: Power1.easeOut,
      onComplete: () => {
        if (fromIntro) {
          setTimeout(() => callback(), 4800);
        } else {
          callback();
        }
      }
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
  TweenMax.from(elementToAnimate, 2, {
    delay: 0.05,
    autoAlpha: 0,
    ease: Elastic.easeOut
  });
};

export const inImgCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.6,
    {
      autoAlpha: 0,
      x: -75
    },
    {
      delay: 0.15,
      autoAlpha: 0.7,
      x: 0,
      ease: Power2.easeOut
    }
  );
};

export const inAliasCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.5,
    {
      autoAlpha: 0,
      x: 200
    },
    {
      delay: 0.05,
      autoAlpha: 1,
      x: 0,
      ease: Power3.easeOut
    }
  );
};

export const inNameCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.62,
    {
      autoAlpha: 0,
      x: 150
    },
    {
      delay: 0.15,
      autoAlpha: 1,
      x: 0,
      ease: Power3.easeOut
    }
  );
};

export const inParagraphCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.7,
    {
      autoAlpha: 0,
      x: 120
    },
    {
      delay: 0.22,
      autoAlpha: 1,
      x: 0,
      ease: Power2.easeOut
    }
  );
};

export const inThumbsCharacter = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.5,
    {
      autoAlpha: 0,
      cycle: { x: i => (i + 1) * 30 }
    },
    {
      delay: 0.32,
      autoAlpha: 1,
      x: 0,
      ease: Power3.easeOut
    },
    0.08
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
      delay: 0.75,
      autoAlpha: 1,
      y: 0,
      ease: Power2.easeOut
    }
  );
};

export const outBackBtnCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.35,
    {
      autoAlpha: 1,
      transformOrigin: '50% 50%',
      scale: 1
    },
    {
      autoAlpha: 0,
      scale: 0.5,
      ease: Back.easeIn
    }
  );
};

export const outImgCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.45,
    {
      autoAlpha: 0.7,
      x: 0
    },
    {
      delay: 0.1,
      autoAlpha: 0,
      x: -75,
      ease: Power3.easeIn
    }
  );
};

export const outAliasCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.4,
    {
      autoAlpha: 1
    },
    {
      delay: 0.1,
      autoAlpha: 0,
      x: 50,
      ease: Cubic.easeIn
    }
  );
};

export const outNameCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.4,
    {
      autoAlpha: 1
    },
    {
      delay: 0.12,
      autoAlpha: 0,
      x: 50,
      ease: Cubic.easeIn
    }
  );
};

export const outParagraphCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.4,
    {
      autoAlpha: 1
    },
    {
      delay: 0.15,
      autoAlpha: 0,
      x: 50,
      ease: Cubic.easeIn
    }
  );
};

export const outThumbsCharacter = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.4,
    {
      autoAlpha: 1
    },
    {
      delay: 0.18,
      autoAlpha: 0,
      ease: Power1.easeOut
    },
    0.05
  );
};

export const outBgCharacter = elementToAnimate => {
  TweenMax.fromTo(
    elementToAnimate,
    0.35,
    {
      autoAlpha: 0.3
    },
    {
      delay: 0.3,
      autoAlpha: 0,
      ease: Power3.easeIn
    }
  );
};

export const outContainerCharacter = (elementToAnimate, callback) => {
  TweenMax.to(elementToAnimate, 0.8, {
    delay: 0.7,
    backgroundColor: '#000000',
    ease: Power1.easeOut,
    onComplete: () => {
      callback();
    }
  });
};
