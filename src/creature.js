import { SketchEl } from './sketch-el';

function calcImageSize(sprite, matrix, canvasProportion) {
  const naturalWidth = sprite.width / matrix.x;
  const naturalHeight = sprite.height / matrix.y;
  const naturalScale = canvasProportion / naturalHeight;
  const height = naturalHeight * naturalScale;
  const width = naturalWidth * naturalScale;
  return { naturalWidth, naturalHeight, width, height };
}

function calcSpritePosition(index, rowSize, imageSize) {
  return {
    x: (index % rowSize) * imageSize.naturalWidth,
    y: Math.floor(index / rowSize) * imageSize.naturalHeight,
  };
}

export class Creature extends SketchEl {
  constructor({
    sketch,
    sprite,
    spriteMatrix,
    position = {},
    speed = 0,
    scale = 0.2,
  }) {
    super({ sketch });
    this.sprite = sprite;
    this.spriteMatrix = spriteMatrix;
    this.imageSize = calcImageSize(sprite, spriteMatrix, sketch.height * scale);
    this.frameCount = spriteMatrix.x * spriteMatrix.y;
    this.currentFrame = 0;
    const { x = 0, y = 0 } = position;
    this.position = { x, y };
  }

  draw() {
    const spritePosition = calcSpritePosition(
      this.currentFrame,
      this.spriteMatrix.x,
      this.imageSize,
    );
    this.s.image(
      this.sprite,
      this.position.x,
      this.position.y - this.imageSize.height,
      this.imageSize.width,
      this.imageSize.height,
      spritePosition.x,
      spritePosition.y,
      this.imageSize.naturalWidth,
      this.imageSize.naturalHeight,
    );
    this.currentFrame = (this.currentFrame + 1) % this.frameCount;
  }
}
