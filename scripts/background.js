// class: runLogic() method; draw() method;

class Background {
  constructor(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = "/images/game_background.PNG";
    this.x = 0;
    this.y = 0;
    this.speed = 1;
  }
  
  runLogic() {
    this.x--;
  }

    /*if (this.img.width) {
      this.x = this.x % this.imgwidth;
    }
    setTimeout(() => {
      this.draw();
    }, 1000 / 250);*/


  draw() {
    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;
    
    context.drawImage(this.img, this.x, 0);
    context.drawImage(this.img, this.x + this.game.$canvas.width, 0);
    context.drawImage(this.img, this.x + this.game.$canvas.width * 2, 0);
  }
}
