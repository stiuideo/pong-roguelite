import { clamp } from '../utils/math.js';

function aabbOverlap(ax, ay, ahw, ahh, bx, by, bhw, bhh) {
  return (
    Math.abs(ax - bx) <= ahw + bhw &&
    Math.abs(ay - by) <= ahh + bhh
  );
}

export function resolveCollisions({ ball, paddles, bounds }) {
  // With paddles
  for (const paddle of paddles) {
    if (
      aabbOverlap(
        ball.position.x, ball.position.y, ball.radius, ball.radius,
        paddle.position.x, paddle.position.y, paddle.halfWidth, paddle.halfHeight
      )
    ) {
      // Simple reflection with slight angle based on contact offset
      const offset = (ball.position.y - paddle.position.y) / paddle.halfHeight; // -1..1
      const speed = Math.hypot(ball.velocity.x, ball.velocity.y) * 1.04; // small speed-up
      const direction = paddle.position.x < (bounds.left + bounds.right) / 2 ? 1 : -1;

      const maxBounceAngle = Math.PI * 0.35; // ~63 degrees
      const bounceAngle = clamp(offset, -1, 1) * maxBounceAngle;

      ball.velocity.x = Math.cos(bounceAngle) * speed * direction;
      ball.velocity.y = Math.sin(bounceAngle) * speed;

      // Nudge ball outside paddle to avoid sticking
      if (direction > 0) {
        ball.position.x = paddle.position.x + paddle.halfWidth + ball.radius + 0.5;
      } else {
        ball.position.x = paddle.position.x - paddle.halfWidth - ball.radius - 0.5;
      }
    }
  }
}
