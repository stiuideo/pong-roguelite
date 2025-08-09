# Checklists

## Feature Addition Checklist
- Define responsibilities (entity, physics, AI, system, renderer)
- Create new module(s) in the appropriate folder(s)
- Wire update calls in `core/game.js` in the correct phase
- Add draw calls to `core/renderer.js`
- Add collisions under `src/physics/` if applicable
- Update `state` shape if necessary in `core/state.js`
- Manual test scenarios identified and exercised

## Merge Readiness
- Code follows naming and separation-of-concerns guidelines
- No Canvas calls outside `renderer.js`
- No game logic in the renderer
- No global state mutations outside designated modules
- Manual tests pass (controls, collisions, scoring)

## Manual Test Matrix (Starter)
- Player input responsiveness (W/S and Arrow keys)
- Ball bounces top/bottom correctly at various angles
- Paddle collision at center and edges produces expected angle
- Scoring increments and round reset positions entities correctly
- AI tracks ball reasonably; no jitter or instability at high speeds
