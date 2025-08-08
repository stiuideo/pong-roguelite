/** Renderer draws everything to the canvas. No game logic here. */
export function createRenderer(ctx, state) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  const colors = {
    background: '#090a0f',
    courtLine: 'rgba(255,255,255,0.15)',
    entity: '#e8e8e8',
    accent: '#33ff99',
  };

  function clear() {
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, width, height);
  }

  function drawCourt() {
    ctx.strokeStyle = colors.courtLine;
    ctx.lineWidth = 2;

    // Center dashed line
    ctx.setLineDash([10, 12]);
    ctx.beginPath();
    ctx.moveTo(width / 2, 10);
    ctx.lineTo(width / 2, height - 10);
    ctx.stroke();
    ctx.setLineDash([]);

    // Border
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.strokeRect(6, 6, width - 12, height - 12);
  }

  function drawScore(score) {
    ctx.fillStyle = colors.accent;
    ctx.font = 'bold 48px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    ctx.fillText(String(score.player), width * 0.25, 24);
    ctx.fillText(String(score.enemy), width * 0.75, 24);
  }

  function drawBall(ball) {
    ctx.fillStyle = colors.entity;
    ctx.fillRect(ball.position.x - ball.radius, ball.position.y - ball.radius, ball.radius * 2, ball.radius * 2);
  }

  function drawPaddle(paddle) {
    ctx.fillStyle = colors.entity;
    ctx.fillRect(paddle.position.x - paddle.halfWidth, paddle.position.y - paddle.halfHeight, paddle.halfWidth * 2, paddle.halfHeight * 2);
  }

  return { clear, drawCourt, drawScore, drawBall, drawPaddle };
}
