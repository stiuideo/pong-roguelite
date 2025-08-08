/**
 * Global game state holder. Future expansion can add modes, rng, meta-progression, etc.
 */
export function createGameState({ width, height }) {
  const worldBounds = { left: 0, right: width, top: 0, bottom: height };

  const score = { player: 0, enemy: 0 };

  const state = {
    worldBounds,
    score,
    entities: {},
  };

  return state;
}
