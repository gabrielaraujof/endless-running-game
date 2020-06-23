import p5 from 'p5';
import { Environment } from './environment';
import { Character } from './character';

const sketch = (s) => {
  let environment;
  let envImage;
  let character;
  let charImage;

  s.preload = () => {
    envImage = s.loadImage('/assets/images/forest.png');
    charImage = s.loadImage('/assets/images/witch.png');
  };

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
    environment = new Environment(s, { envImage, moveSpeed: 3 });
    character = new Character(s, { charImage, matrixSize: { x: 4, y: 4 } });
    s.frameRate(30);
  };

  s.draw = () => {
    environment.show();
    character.show();
  };
};

const sketchInstance = new p5(sketch);
