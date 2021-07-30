// 引入样式
import './style/index.less'
import Food from './modules/Food';
import Snake from './modules/Snake';


// 测试代码
const food = new Food();
food.change();
console.log('food', food.X, food.Y);

const snake = new Snake();
console.log('snake', snake.X, snake.Y);
