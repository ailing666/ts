import { DIRECTION } from './common'
// 蛇的类
class Snake {
  // 蛇头
  head: HTMLElement
  // 蛇身体
  bodies: HTMLCollection
  // 整个蛇
  element: HTMLElement;
  direction: string = ''
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
    // 初始化
    this.init()
  }
  init() {
    // 蛇随机位子
    this.snakePosition()
    // 蛇随机方向
    this.snakeDirection()
  }

  snakePosition() {
    // 不能初始就贴边
    let top = (Math.floor(Math.random() * (19 - 10 + 1)) + 10) * 10;
    let left = (Math.floor(Math.random() * (19 - 10 + 1)) + 10) * 10;
    // 赋值给dom
    this.head.style.left = left + 'px';
    this.head.style.top = top + 'px';
  }

  snakeDirection() {
    // 随机四个方向
    let arr = [DIRECTION.R, DIRECTION.L, DIRECTION.U, DIRECTION.D]
    this.direction = arr[Math.floor(Math.random() * 4)]
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
