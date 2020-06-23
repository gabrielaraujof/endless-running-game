import { SketchElement } from './sketch-element';

export class Character extends SketchElement {
  constructor(s, { charImage, matrixSize, scale = 0.2 }) {
    super(s);
    this.sprite = charImage;
    this.matrixSize = matrixSize;
    this.imageCount = this.matrixSize.x * this.matrixSize.y;
    const naturalWidth = this.sprite.width / this.matrixSize.x;
    const naturalHeight = this.sprite.height / this.matrixSize.y;
    const naturalScale = s.height * scale / naturalHeight;
    const height = naturalHeight * naturalScale;
    const width = naturalWidth * naturalScale;
    this.image = { naturalWidth, naturalHeight, width, height }; 
    this.currentFrame = 0;
  }

  show() {
    const { x, y } = this.imagePosition(this.currentFrame);
    this.s.image(
      this.sprite,
      0,
      this.s.height - this.image.height,
      this.image.width,
      this.image.height,
      x,
      y,
      this.image.naturalWidth,
      this.image.naturalHeight,
    );
    this.animate();
  }

  animate() {
    this.currentFrame = (this.currentFrame + 1) % this.imageCount;
  }

  imagePosition(imageIndex) {
    return {
      x: (imageIndex % this.matrixSize.x) * this.image.naturalWidth,
      y: Math.floor(imageIndex / this.matrixSize.x) * this.image.naturalHeight,
    };
  }
}
