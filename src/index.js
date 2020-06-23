import { Environment } from './environment';
import { Player } from './player';

const bootstrap = (sketch) => {
  let environment;
  let envImage;
  let player;
  let charImage;
  let themeMusic;

  sketch.preload = () => {
    envImage = sketch.loadImage('/assets/images/forest.png');
    charImage = sketch.loadImage('/assets/images/witch.png');
    themeMusic = sketch.loadSound('/assets/audios/theme.mp3');
  };

  sketch.setup = () => {
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    environment = new Environment(sketch, { envImage, moveSpeed: 3 });
    player = new Player({
      sketch,
      sprite: charImage,
      spriteMatrix: { x: 4, y: 4 },
      position: { y: sketch.height },
    });
    themeMusic.loop();
    sketch.frameRate(30);
  };

  sketch.draw = () => {
    environment.show();
    player.draw();
  };
};

const sketchInstance = new p5(bootstrap);
