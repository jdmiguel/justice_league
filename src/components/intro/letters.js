import React from 'react';

/* Colors */
import { white } from '../../utils/colors';

const Letters = () => {
  const firstLetterRef = React.useRef(null);
  const secondLetterRef = React.useRef(null);
  const thirdLetterRef = React.useRef(null);
  const fourthLetterRef = React.useRef(null);
  const fifthLetterRef = React.useRef(null);
  const sixthLetterRef = React.useRef(null);
  const seventhLetterRef = React.useRef(null);
  const eighthLetterRef = React.useRef(null);
  const ninethLetterRef = React.useRef(null);
  const tenthLetterRef = React.useRef(null);
  const eleventhLetterRef = React.useRef(null);
  const twelfthLetterRef = React.useRef(null);
  const thirteenthLetterRef = React.useRef(null);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    const letters = [
      firstLetterRef.current,
      secondLetterRef.current,
      thirdLetterRef.current,
      fourthLetterRef.current,
      fifthLetterRef.current,
      sixthLetterRef.current,
      seventhLetterRef.current,
      eighthLetterRef.current,
      ninethLetterRef.current,
      tenthLetterRef.current,
      eleventhLetterRef.current,
      twelfthLetterRef.current,
      thirteenthLetterRef.current
    ];

    animationRef.current = new TimelineMax();

    animationRef.current
      .staggerFromTo(
        letters,
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
        0.02,
        '+=0'
      )
      .to(
        letters,
        2,
        {
          delay: 2.8,
          drawSVG: 0,
          stroke: '#FFFFFF',
          ease: Power1.easeInOut
        },
        '-=5.2'
      );

    return () => {
      animationRef.current.kill();
    };
  }, []);

  return (
    <div className="letters">
      <svg
        width="700"
        height="563.287"
        viewBox="0 0 700 563.287"
        enableBackground="new 0 0 700 563.287"
        xmlSpace="preserve"
      >
        <path
          fill={white}
          ref={firstLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M17.905,0l13.223,39.226
          h33.595c0.98,0,1.772,0.792,1.772,1.772v192.335c0,0.979-0.792,1.771-1.772,1.771H39.669c-0.98,0-1.772-0.792-1.772-1.771v-65.356
          L0,193.981v53.271v8.541c0,10.293,8.28,18.601,18.538,18.601h67c10.258,0,18.475-8.308,18.475-18.601v-8.541V18.601V0H85.538h-67
          H17.905z"
        />
        <path
          fill={white}
          ref={secondLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M114.958,0v255.793
          c1.389,10.573,6.738,17.45,18.221,18.601h65.926c10.092,0,18.158-8.308,18.158-18.601V0H181.2v233.397
          c0,1.379-1.088,2.467-2.468,2.467h-24.295c-1.379,0-2.531-1.087-2.531-2.467V0H114.958z"
        />
        <path
          fill={white}
          ref={thirdLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M249.91,0
          c-10.151,0-21.196,11.852-21.196,22.144v88.249c1.445,4.406,3.912,8.816,9.617,13.223l55.044,41.062v71.125h-26.41v-42.01
          l-32.557-25.181h-5.694v83.957c0,10.293,11.044,21.828,21.196,21.828h60.864c10.151,0,20.814-11.535,20.814-21.828V146.846
          c-1.443-4.406-3.91-8.816-9.617-13.223l-55.043-41.125V39.29h27.902v45.743l5.314,0.38l31.444-24.295V22.144
          C331.588,11.852,320.925,0,310.774,0H249.91z"
        />
        <path
          fill={white}
          ref={fourthLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M339.117,0.696v37.897h23.789c1.38,0,2.468,1.088,2.468,2.467v233.333
          h37.139V41.061c0-1.379,1.15-2.467,2.53-2.467h25.181V0.696H339.117z"
        />
        <path
          fill={white}
          ref={fifthLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M438.765,0.443v273.951h37.897V140.14l-18.601,12.78l9.996-28.217
          l-24.295-17.525h29.356l3.543-11.578V0.443H438.765z"
        />
        <path
          fill={white}
          ref={sixthLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M506.525,0c-11.484,1.151-16.833,8.028-18.222,18.601v74.404l4.808,14.868
          h27.144l-24.295,17.905l11.071,27.838l-18.728-12.843v115.021c1.389,10.573,6.737,17.45,18.222,18.601h65.926
          c10.093,0,18.157-8.308,18.157-18.601v-60.737l-36.063-28.217v66.558c0,1.379-1.087,2.467-2.467,2.467h-24.295
          c-1.381,0-2.53-1.087-2.53-2.467V53.588v-12.59c0-1.379,1.149-2.468,2.53-2.468h24.295c1.38,0,2.467,1.088,2.467,2.468v12.59v46.059
          l36.063-26.382V18.601C590.608,8.309,582.544,0,572.451,0H506.525z"
        />
        <path
          fill={white}
          ref={seventhLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M602.503,0.443v273.951H700v-39.479
          h-59.6v-88.892h41.378l13.219-39.479H640.4V39.923H700V0.443H602.503z"
        />
        <path
          fill={white}
          ref={eighthLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M18.791,287.934v233.714v40.324h87.563
          v-40.324h-48.59V287.934H18.791z"
        />
        <path
          fill={white}
          ref={ninethLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M115.888,287.696v273.951h91.939
          v-39.48h-54.041v-88.892h41.376l15.363-39.479h-56.74v-66.622h59.599v-39.479H115.888z"
        />
        <path
          fill={white}
          ref={tenthLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M250.94,287.681l-35.07,273.572h36.57
        l5.061-42.2h45.047l4.997,42.2h36.633L309.11,287.681H250.94z M280.024,339.233l17.716,139.644h-35.494L280.024,339.233z"
        />
        <path
          fill={white}
          ref={eleventhLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M351.252,308.126
          c1.79-8.682,3.093-17.531,19.959-20.969h72.253c8.541,3.898,16.618,8.463,19.199,20.969v53.307l-36.38,25.769v-60.633h-38.651
          v195.287h37.642v-73.771h-23.242l12.884-39.663h47.748v153.854h-26.021l-5.305-12.127c-7.07,8.439-15.162,12.782-24.253,13.138
          h-35.369c-14.831-1.53-19.527-10.66-20.969-22.232L351.252,308.126z"
        />
        <path
          fill={white}
          ref={twelfthLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M475.81,287.253v18.601v228.651v8.542c0,10.292,8.924,18.601,20.004,18.601
          h72.372c11.079,0,19.934-8.309,19.934-18.601v-8.542V305.854v-18.601h-19.934h-19.656v233.396c0,1.38-1.193,2.467-2.708,2.467
          h-26.672c-1.515,0-2.777-1.087-2.777-2.467V287.253h-20.559H475.81z"
        />
        <path
          fill={white}
          ref={thirteenthLetterRef}
          stroke={white}
          strokeWidth="3"
          d="M602.503,287.475v273.951H700
          v-39.479h-59.6v-88.892h41.378l13.219-39.479H640.4v-66.621H700v-39.479H602.503z"
        />
      </svg>
    </div>
  );
};

export default Letters;
