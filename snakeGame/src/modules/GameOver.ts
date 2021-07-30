
class GameOver {
  // gameOver
  gameOverDom: HTMLElement;
  // 退出
  back: HTMLElement
  // 重新开始
  again: HTMLElement
  // 是否死亡
  isDie: boolean = false
  constructor() {
    this.gameOverDom = document.getElementById('gameOver')!;
    this.back = document.getElementById('back')!;
    this.again = document.getElementById('again')!;
    this.init()

  }
  init() {
    this.again.addEventListener('click', this.againHandler)
    this.back.addEventListener('click', this.backHandler)
  }
  // 游戏结束
  isGameOver() {
    this.isDie = true
    this.gameOverDom.style.display = 'block'
  }
  // 重新开始
  againHandler() {
    this.isDie = false
    document.getElementById('gameOver')!.style.display = 'none'
    location.reload()
  }
  // 退出游戏：关闭浏览器
  backHandler() {
    window.close();
  }
}
export default GameOver;
