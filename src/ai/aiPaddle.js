import { Paddle } from '../entities/paddle.js';
import { clamp } from '../utils/math.js';

/**
 * Simple AI that tracks the ball with a reaction delay and max acceleration.
 * Designed for future difficulty tuning and behavior extension.
 */
export class AIPaddle extends Paddle {
  constructor(id, bounds, getTargetY) {
    super(id, bounds);
    this.position.x = bounds.right - 40;
    this.getTargetY = getTargetY;
    this.maxVelocity = 540;
    this.acceleration = 2400;
    this.velocityY = 0;
    this.reactionLagSeconds = 0.06;
    this._lagTimer = 0;
    this._cachedTargetY = this.position.y;
  }

  updateAI(ball, dt) {
    this._lagTimer += dt;
    if (this._lagTimer >= this.reactionLagSeconds) {
      this._lagTimer = 0;
      this._cachedTargetY = this.getTargetY();
    }

    const desired = Math.sign(this._cachedTargetY - this.position.y) * this.maxVelocity;
    const delta = clamp(desired - this.velocityY, -this.acceleration * dt, this.acceleration * dt);
    this.velocityY += delta;
    this.position.y += this.velocityY * dt;
  }
}
