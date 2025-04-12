export class Node {
  #value;
  #nextNode;
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
  set value(data) {
    this.#value = data;
  }
  get value() {
    return this.#value;
  }
  set nextNode(node) {
    this.#nextNode = node;
  }
  get nextNode() {
    return this.#nextNode;
  }
}
