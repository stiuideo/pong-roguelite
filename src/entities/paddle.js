import { clamp } from '../utils/math.js';

export class Paddle {
  constructor(id, bounds) {
    this.id = id;
    this.width = 16;
    this.height = 96;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    this.bounds = bounds;
    this.position = { x: 0, y: (bounds.top + bounds.bottom) / 2 };
    this.speed = 560; // pixels per second
  }

  resetToCenter() {
    this.position.y = (this.bounds.top + this.bounds.bottom) / 2;
  }

  update(dt) {
    // Constrain within vertical bounds
    this.position.y = clamp(this.position.y, this.bounds.top + this.halfHeight, this.bounds.bottom - this.halfHeight);
  }
}

export class PlayerPaddle extends Paddle {
  constructor(id, bounds) {
    super(id, bounds);
    // Place near left edge
    this.position.x = bounds.left + 40;
  }

  handleInput(input) {
    const moveDir = (input.up ? -1 : 0) + (input.down ? 1 : 0);
    this.position.y += moveDir * this.speed / 60; // base on 60fps for responsiveness; final clamp in update
  }
}
