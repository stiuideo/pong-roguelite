# Extensions & Recipes

Practical guides to add features while preserving architecture.

## Add a New Entity (e.g., PowerUp)
1) Create `src/entities/powerUp.js` with a class exposing at least:
   - shape/size/position data used by physics/renderer
   - `update(dt)` for motion/lifetime
   - optional `applyEffect(state, entities)` if it modifies the game
2) Add rendering in `core/renderer.js` with `drawPowerUp(powerUp)`.
3) Add collisions in a new `physics/powerUpCollisions.js` or extend `collisions.js` if closely related.
4) Orchestrate in `core/game.js`:
   - instantiate and store in `state.entities`
   - call `update(dt)` for each new entity
   - call collision resolver(s) in a predictable order (before/after scoring as needed)
   - call `renderer.drawPowerUp(...)`

Checklist:
- No Canvas calls from the entity itself.
- Physics changes only mutate entity/state; no drawing.

## Multiple Balls
- Add a small `ballFactory` or maintain `state.entities.balls = [ ... ]`.
- Loop over balls in update and rendering.
- Update `resolveCollisions` to accept arrays or create `resolveBallCollisions(balls, paddles, bounds)`.

## Game Modes / Scenes
- Create a `Scene` concept:
  - shape: `{ update(dt, input, state), draw(renderer, state) }`
  - examples: `GameplayScene`, `CardDraftScene`, `BossScene`
- Update `core/game.js` to delegate to the active scene to keep the loop minimal.

## Card-Based Upgrades (Canvas-Only)
- Represent cards as data objects; render them via the renderer (no DOM).
- Input: extend `input.js` to include selection/confirm keys when in `CardDraft` mode.
- Effects: applying a card should mutate game parameters via a system (e.g., `effectsSystem.js`) rather than directly inside entities.

## Difficulty Scaling
- Expose difficulty parameters in `AIPaddle` (already available):
  - `reactionLagSeconds`, `maxVelocity`, `acceleration`
- Add a `difficultySystem.js` to gradually adjust these parameters over time or per level.

## Audio (Optional, Future)
- Keep audio in `src/audio/` with a small `soundPlayer` that exposes semantic methods (`playBounce`, `playScore`).
- Trigger sounds from the orchestrator or the physics layer (not from the renderer).

## Visual Juice (Safe Additions)
- Trails and glow: draw after entities using alpha.
- Screen shake: apply a temporary transform in `renderer` via `ctx.translate` bracketed around draw calls.
- Respect separation: no game rules leak into drawing.

## Save/Meta-Progression (Future)
- Create `src/persistence/` with `save.js` and `load.js` using `localStorage`.
- Centralize schema in one module and evolve with versioning.
