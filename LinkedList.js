import { Node } from "./Node.js";
export class LinkedList {
  #head;

  constructor() {
    this.head = null;
  }

  set head(node) {
    this.#head = node;
  }

  get head() {
    return this.#head;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail().nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.head;

    this.head = newNode;
  }

  getHead() {
    return this.head;
  }

  tail() {
    if (this.head === null) return;

    let it = this.head;
    while (it.nextNode !== null) {
      it = it.nextNode;
    }
    return it;
  }

  at(index) {
    let i = 0;
    let it = this.head;
    while (it !== null) {
      if (i == index) {
        return it;
      }
      i++;
      it = it.nextNode;
    }
    return null;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let it = this.head;
    while (it.nextNode.nextNode !== null) {
      it = it.nextNode;
    }
    it.nextNode = null;
  }

  contains(value) {
    let it = this.head;
    while (it !== null) {
      if (it.value === value) {
        return true;
      }
      it = it.nextNode;
    }
    return false;
  }

  find(value) {
    let i = 0;
    let it = this.head;
    while (it !== null) {
      if (it.value === value) {
        return i;
      }
      i++;
      it = it.nextNode;
    }
    return null;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node();
    newNode.value = value;

    let i = 0;
    let it = this.head;
    while (it !== null) {
      if (i === index - 1) {
        newNode.nextNode = it.nextNode;
        it.nextNode = newNode;
      }
      i++;
      it = it.nextNode;
    }
  }

  removeAt(index) {
    if (index === 0 && this.head !== null) {
      this.head = this.head.nextNode;
    } else {
      let i = 0;
      let it = this.head;
      while (it !== null) {
        if (i === index - 1) {
          it.nextNode = it.nextNode.nextNode;
        }
        i++;
        it = it.nextNode;
      }
    }
  }

  toString() {
    let list = "";

    let it = this.head;
    while (it !== null) {
      list += `( ${it.value} ) -> `;
      it = it.nextNode;
    }

    list += "null";
    return list;
  }
}
