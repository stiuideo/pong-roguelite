import { Ball } from '../entities/ball.js';
import { PlayerPaddle } from '../entities/paddle.js';
import { AIPaddle } from '../ai/aiPaddle.js';
import { resolveCollisions } from '../physics/collisions.js';

/**
 * Core game loop and orchestration.
 * Designed for extensibility: systems can hook into update/draw later.
 */
export function createGame({ state, renderer, input, canvas }) {
  const targetDeltaSeconds = 1 / 60;
  let lastTimestampMs = 0;
  let accumulatorSeconds = 0;
  let animationFrameId = null;

  // Initialize entities
  const ball = new Ball(state.worldBounds);
  const player = new PlayerPaddle('player', state.worldBounds);
  const enemy = new AIPaddle('enemy', state.worldBounds, () => ball.position.y);

  state.entities = { ball, player, enemy };

  function resetRound() {
    ball.resetToCenter();
    ball.launchRandom();
    player.resetToCenter();
    enemy.resetToCenter();
  }

  function handleScoring() {
    // Left/right bounds are scoring conditions
    const { left, right } = state.worldBounds;
    if (ball.position.x < left) {
      state.score.enemy += 1;
      resetRound();
    } else if (ball.position.x > right) {
      state.score.player += 1;
      resetRound();
    }
  }

  function update(dt) {
    // Inputs
    player.handleInput(input);

    // AI update
    enemy.updateAI(ball, dt);

    // Entity updates
    ball.update(dt);
    player.update(dt);
    enemy.update(dt);

    // Collisions & physics
    resolveCollisions({ ball, paddles: [player, enemy], bounds: state.worldBounds });

    handleScoring();
  }

  function draw(interpAlpha) {
    renderer.clear();
    renderer.drawCourt();
    renderer.drawScore(state.score);

    // Entities
    renderer.drawBall(ball);
    renderer.drawPaddle(player);
    renderer.drawPaddle(enemy);
  }

  function loop(timestampMs) {
    if (!lastTimestampMs) lastTimestampMs = timestampMs;
    let frameSeconds = (timestampMs - lastTimestampMs) / 1000;
    if (frameSeconds > 0.25) frameSeconds = 0.25; // avoid spiral of death
    lastTimestampMs = timestampMs;

    accumulatorSeconds += frameSeconds;
    while (accumulatorSeconds >= targetDeltaSeconds) {
      update(targetDeltaSeconds);
      accumulatorSeconds -= targetDeltaSeconds;
    }

    const alpha = accumulatorSeconds / targetDeltaSeconds;
    draw(alpha);

    animationFrameId = requestAnimationFrame(loop);
  }

  function start() {
    resetRound();
    if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(loop);
  }

  function stop() {
    if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  // Expose a minimal API for future modes/systems
  return { start, stop };
}
