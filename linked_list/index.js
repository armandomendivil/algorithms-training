class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }

  /**
   * Appends data to the last of linked list
   * @param {string | number} data 
   */
  append(data) {
    let current = this.head;
    let newNode = new Node(data);

    if (!current.data) {
      current.data = newNode.data;
      return true;
    }

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    return true;
  }

  /**
   * Appends at position 
   * @param {number} position 
   * @param {number} data 
   */
  appendAt(position, data) {
    let current = this.head;
    let newNode = new Node(data);
    let counter = 0;

    while (current.next !== null) {
      if (position === counter) {
        newNode.next = current.next;
        current.next = newNode;
        return true;
      }
      current = current.next;
      counter ++;
    }

    return true;
  }

  /**
   * Remove data
   * @param {number} data 
   */
  remove(data) {
    let current = this.head;

    while (current !== null) {
      let previous = current;
      current = current.next;

      if (current.data === data) {
        previous.next = current.next;
        return true;
      }
    }

    return false;
  }

  /**
   * Remove at position
   * @param {number} position
   */
  removeAt(position) {
    let current = this.head;
    let counter = 0;

    if (position === 0) {

    }

    while (current !== null) {
      let previous = current;
      current = current.next;

      if (position === counter) {
        previous.next = current.next;
        return true;
      }

      counter ++; 
    }

    return false;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next;

    while (current !== null) {
      next = current.next;
      current.next = previous
      previous = current;
      current = next;
    }

    this.head = previous;
    return true;
  }

  swap() {
    let current = this.head;
    let counter = 0;
    let firstPosition

    while (current !== null) {
      if (!(counter % 2)) {
        firstPosition = current;
      } else {
        let temp = current.data;
        current.data = firstPosition.data;
        firstPosition.data = temp;
      }

      counter ++;
      current = current.next;
    }

    return true;
  }
}

let linkedList = new LinkedList();

// [1] -> [2] -> [3] -> [4]
[1, 2, 3, 4].map(data => (
  linkedList.append(data)
));

console.log(linkedList);