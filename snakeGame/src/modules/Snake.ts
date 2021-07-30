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
    this.setPosition('x', val)
  }
  set y(val) {
    this.setPosition('y', val)
  }
  // 设置定位
  setPosition(type: string, val: number) {
    let getVal = type === 'y' ? this.y : this.x
    // 新值不能与旧值一样
    if (getVal === val) return
    // 值的合法范围0-290之间
    if (val < 0 || val > 290) throw new Error('蛇撞墙了！')
    // 移动身体
    this.moveBodies()
    // 赋值
    if (type === 'y') {
      this.head.style.top = val + 'px';
    } else {
      this.head.style.left = val + 'px';
    }
    this.checkHeadBody()
  }
  // 增加身体
  addBodies() {
    let bodyDom = document.createElement('div')
    this.element.append(bodyDom)
  }
  // 移动身体
  moveBodies() {
    // 原理是从后往前，身体的位置是前一个身体的位置
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  // 检查蛇头是否撞到身体的方法
  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      // 进入判断说明蛇头撞到了身体，游戏结束
      if (this.x === bd.offsetLeft && this.y === bd.offsetTop) throw new Error('撞到自己了！')
    }
  }
}
export default Snake;
