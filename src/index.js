import p5 from 'p5';
import { Environment } from './environment';

const sketch = (s) => {
  let background;
  let environment;

  s.preload = () => {
    background = s.loadImage('/assets/images/forest.png');
  };

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
    environment = new Environment(s, { background, moveSpeed: 3 });
  };

  s.draw = () => {
    environment.show();
  };
};

const sketchInstance = new p5(sketch);
