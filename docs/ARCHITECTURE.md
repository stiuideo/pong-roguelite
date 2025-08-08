# Architecture

This document explains how modules interact and where to extend them safely.

## Data Flow Overview
- `main.js` constructs systems → `state`, `renderer`, `input`, `game`.
- `game.js` is the orchestrator: it calls input handlers, AI, entity updates, physics, scoring, then rendering.
- `renderer.js` reads entity and state data to draw on the canvas. It contains no game rules.
- `collisions.js` resolves ball/paddle impacts and returns side effects by mutating entity state.

## Entities
- Entities are plain classes with minimal responsibilities: hold data and update themselves.
- Current set:
  - `Ball`: position, velocity, radius, `update(dt)`, `resetToCenter`, `launchRandom`.
  - `Paddle` (base): position, dimensions, `update(dt)`, `resetToCenter`.
  - `PlayerPaddle`: adds `handleInput(input)`.
  - `AIPaddle`: adds `updateAI(ball, dt)` and internal acceleration/lag.

Guidelines:
- Keep rendering concerns out of entities.
- Keep input/AI behaviors in their own methods (`handleInput`, `updateAI`).
- If you need cross-entity effects, place them in a system (physics/collisions or a new module under `src/systems/`).

## State
- Defined in `core/state.js`:
  - `worldBounds`: `{ left, right, top, bottom }`
  - `score`: `{ player, enemy }`
  - `entities`: a simple registry `{ ball, player, enemy }` for convenience

Extend state by adding new fields (e.g., `rng`, `mode`, `effects`) but keep initialization centralized in `createGameState`.

## Game Loop
- Fixed-step `dt = 1/60` with accumulator; prevents variable update rates.
- Update order (intentional): Input → AI → Entities → Physics → Scoring → Render.
- Extension points are between these phases (see `EXTENSIONS.md`).

## Rendering
- `renderer.js` exposes:
  - `clear()`, `drawCourt()`, `drawScore(score)`, `drawBall(ball)`, `drawPaddle(paddle)`
- Add new `drawX` functions for new entities. Avoid branching based on types; prefer explicit function calls from the orchestrator.

## Physics
- `physics/collisions.js` focuses on AABB tests and bounce resolution.
- Keep physics deterministic and side-effecting only via entity mutation.
- For new collision kinds (power-ups, hazards), create dedicated functions in `physics/` and call them from the loop in a predictable order.

## Input
- `core/input.js` attaches key listeners and exposes derived booleans (`up`, `down`).
- For new input modes (menus, abilities), extend this module or introduce a new `input` variant and switch based on game mode.

## AI
- Encapsulated in `ai/aiPaddle.js` with difficulty knobs: `reactionLagSeconds`, `maxVelocity`, `acceleration`.
- Add new AI classes per entity type to keep each behavior isolated.

## Scene/Mode Evolution (Planned)
- In the future, abstract gameplay into a `Scene` or `Mode` interface with `update` and `draw`. `game.js` would delegate to the current scene. Until then, keep the top-level loop clean and centralize orchestration there.
