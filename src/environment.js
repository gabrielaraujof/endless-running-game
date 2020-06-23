import { SketchElement } from './sketch-element';

function backgroundCount(imageWith, canvasWidth) {
  const ratio = canvasWidth / imageWith;
  return Math.floor(ratio) + 2;
}

export class Environment extends SketchElement {
  constructor(s, { envImage, moveSpeed }) {
    super(s);
    this.background = envImage;
    this.moveSpeed = moveSpeed;
    this.position = 0;
    this.height = this.s.height;
    this.width = (this.height / this.background.height) * this.background.width;
    this.bgCount = backgroundCount(this.width, this.s.width);
  }

  show() {
    for (let i = 0; i < this.bgCount; i++) {
      const xOffset = -this.position + this.width * i;
      this.s.image(this.background, xOffset, 0, this.width, this.height);
    }
    this.updatePosition();
  }

  updatePosition() {
    this.position = (this.position + 1) % this.width;
  }
}
