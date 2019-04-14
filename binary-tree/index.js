const { tree, treeSmall } = require('./data');

const preOrder = (node) => {
  if (node !== null) {
    console.log(node.value);

    preOrder(node.left);
    preOrder(node.right);
  }
};

// preOrder(treeSmall);

const inOrder = (node) => {
  if (node !== null) {
    inOrder(node.left);

    console.log(node.value);

    inOrder(node.right);
  }
};

// inOrder(treeSmall);

const postOrder = (node) => {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);

    console.log(node.value);
  }
}

postOrder(treeSmall);
