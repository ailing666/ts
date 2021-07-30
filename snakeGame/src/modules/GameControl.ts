import Food from './Food';
import Snake from './Snake';
import GameOver from './GameOver';

// 控制游戏类
class GameControl {
  // 食物类
  food: Food
  // 蛇类
  snake: Snake
  // 游戏结束
  gameOver: GameOver
  // 蛇的移动方向
  direction: string = '';
  //监听当前的数值变化
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.gameOver = new GameOver();
    // 初始化
    this.init();
  }
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 食物位置随机出现
    this.food.change();
    this.run()
  }
  // 键盘按下函数
  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key
  }
  run() {
    try {
      switch (this.direction) {
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
      this.gameOver.isGameOver()
    }
    this.gameOver.isDie || setTimeout(this.run.bind(this), 300);
  }
}
export default GameControl