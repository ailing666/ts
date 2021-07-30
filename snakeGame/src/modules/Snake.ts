// 蛇的类
class Snake {
  // 蛇头
  head: HTMLElement
  // 蛇身体
  bodies: HTMLCollection
  // 整个蛇
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  // 获取蛇的横坐标
  get X() {
    return this.head.offsetLeft
  }
  // 获取蛇的纵坐标
  get Y() {
    return this.head.offsetTop
  }
}
export default Snake;
