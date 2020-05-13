module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
  ].map(require.resolve),

  globals: {
    PLATFORM: true,
    MODE: true,
    window: true,
    document: true,
    TweenMax: true,
    TimelineMax: true,
    SplitText: true,
    Hammer: true,
    Power1: true,
    Power2: true,
    Power3: true,
    Quad: true,
  },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
};
