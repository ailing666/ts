import Food from './Food';
import Snake from './Snake';
// 控制游戏类
class GameControl {
  // 食物类
  food: Food
  // 蛇类
  snake: Snake
  // 蛇的移动方向
  direction: string = '';
  // 记录游戏是否结束
  isLive = true;
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    // 初始化
    this.init();
  }
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 食物位置随机出现
    this.food.change();
  }
  // 键盘按下函数
  keydownHandler(e: KeyboardEvent) {
    try {
      switch (e.key) {
        case 'ArrowRight':
          // 蛇右移一格
          this.snake.x += 10
          break;
        case 'ArrowLeft':
          this.snake.x -= 10

          break;
        case 'ArrowUp':
          this.snake.y -= 10
          break;
        case 'ArrowDown':
          this.snake.y += 10
          break;
      }
    } catch (error) {
      alert(error.message + ' GAME OVER!');
    }
  }
}
export default GameControl