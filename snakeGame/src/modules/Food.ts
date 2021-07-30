// 食物类
class Food {
  private element: HTMLElement;
  constructor() {
    // 获取页面中的food元素并将其赋值给element
    // 末尾加上叹号，表示id为food的元素必定存在（非空）
    this.element = document.getElementById('food')!;
  }
  // 定义一个获取食物X轴坐标的方法
  get x() {
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get y() {
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;
    // 赋值给dom
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}
export default Food;