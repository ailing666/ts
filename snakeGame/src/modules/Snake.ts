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
  get x() {
    return this.head.offsetLeft
  }
  // 获取蛇的纵坐标
  get y() {
    return this.head.offsetTop
  }
  set x(val) {
    // x的值的合法范围0-290之间
    if (val < 0 || val > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }
    this.head.style.left = val + 'px';
  }
  set y(val) {
    // y的值的合法范围0-290之间
    if (val < 0 || val > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }
    this.head.style.top = val + 'px';
  }
}
export default Snake;
