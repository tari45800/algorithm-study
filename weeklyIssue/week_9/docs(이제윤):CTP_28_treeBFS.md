₩₩₩
let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let queue = [node];
  const values = [];
  while (queue.length > 0) {
    const head = queue[0];
    queue = queue.slice(1);

    values.push(head.value);

    head.children.forEach((child) => queue.push(child));
  }
  return values;
};


let Node = function (value) {
  this.value = value;
  this.children = [];
};


Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
₩₩₩
