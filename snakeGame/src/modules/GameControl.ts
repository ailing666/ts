import Food from './Food';
import Snake from './Snake';
import GameOver from './GameOver';
import { DIRECTION } from './common'
// 控制游戏类
class GameControl {
  // 食物类
  food: Food
  // 蛇类
  snake: Snake
  // 游戏结束
  gameOver: GameOver
  // 蛇的移动方向
  direction: string;
  //监听当前的数值变化
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.direction = this.snake.direction
    this.gameOver = new GameOver();
    // 初始化
    this.init();
  }
  init() {
    this.food.change()

    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run()
  }
  // 键盘按下函数
  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key
  }
  run() {
    let x = this.snake.x
    let y = this.snake.y
    switch (this.direction) {
      case DIRECTION.R:
        // 蛇右移一格
        x += 10
        break;
      case DIRECTION.L:
        x -= 10
        break;
      case DIRECTION.U:
        y -= 10
        break;
      case DIRECTION.D:
        y += 10
        break;
    }

    this.eatFood(x, y)
    try {
      this.snake.x = x
      this.snake.y = y
    } catch (error) {
      this.gameOver.isGameOver()
    }
    this.gameOver.isDie || setTimeout(this.run.bind(this), 100);
  }
  eatFood(x: number, y: number) {
    if (x === this.food.x && y === this.food.y) {
      // 蛇头位置与食物位置重合代表吃到了
      // 身体增加一节
      // 食物重新刷新
      this.snake.addBodies()
      this.food.change()
    }
  }
}
export default GameControl