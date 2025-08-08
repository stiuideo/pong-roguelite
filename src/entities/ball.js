import { clamp } from '../utils/math.js';

export class Ball {
  constructor(bounds) {
    this.radius = 8;
    this.maxSpeed = 520;
    this.speed = 420;
    this.position = { x: (bounds.left + bounds.right) / 2, y: (bounds.top + bounds.bottom) / 2 };
    this.velocity = { x: 0, y: 0 };
    this.bounds = bounds;
  }

  resetToCenter() {
    this.position.x = (this.bounds.left + this.bounds.right) / 2;
    this.position.y = (this.bounds.top + this.bounds.bottom) / 2;
    this.velocity.x = 0;
    this.velocity.y = 0;
  }

  launchRandom() {
    // Random direction but constant base speed
    const angle = (Math.random() * 0.6 - 0.3) + (Math.random() < 0.5 ? Math.PI : 0); // small vertical variation
    this.velocity.x = Math.cos(angle) * this.speed;
    this.velocity.y = Math.sin(angle) * this.speed;
  }

  update(dt) {
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    // Bounce on top/bottom
    if (this.position.y - this.radius < this.bounds.top) {
      this.position.y = this.bounds.top + this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y + this.radius > this.bounds.bottom) {
      this.position.y = this.bounds.bottom - this.radius;
      this.velocity.y *= -1;
    }

    // Cap speed
    const currentSpeed = Math.hypot(this.velocity.x, this.velocity.y);
    if (currentSpeed > this.maxSpeed) {
      const scale = this.maxSpeed / currentSpeed;
      this.velocity.x *= scale;
      this.velocity.y *= scale;
    }
  }
}
