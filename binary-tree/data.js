
const tree = {
  value: 10,
  left: {
    value: 15,
    left: {
      value: 3,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
  right: {
    value: 30,
    left: null,
    right: {
      value: 2,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
  },
};

const treeSmall = {
  value: 10,
  left: {
    value: 2,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 5,
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
};

module.exports = {
  tree,
  treeSmall,
};