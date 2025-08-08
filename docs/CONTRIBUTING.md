# Contributing Guide

Guidelines to keep the codebase consistent, readable, and extensible.

## Style
- ES6 modules only; no transpiler assumptions.
- Prefer descriptive names: functions as verbs, variables as nouns.
- Avoid abbreviations; avoid 1–2 letter names.
- Use early returns; avoid deep nesting.
- Comments explain "why" when non-obvious. Do not narrate trivial steps.
- Do not add rendering inside entities or game logic inside the renderer.

## Structure
- One responsibility per module. New features typically introduce:
  - an entity in `src/entities/`
  - optional AI in `src/ai/`
  - physics in `src/physics/`
  - a system/manager in `src/systems/` (create this folder if needed)
  - rendering hooks in `core/renderer.js`
  - orchestrator calls in `core/game.js`

## Loop Discipline
- Preserve update order: Input → AI → Entities → Physics → Scoring → Render.
- Keep `createGame` small and readable; extract logic into modules instead of inlining.

## Rendering Discipline
- Only `renderer.js` uses Canvas APIs. Add `drawX` functions when introducing new visual elements.

## Testing (Manual)
- Open `index.html` in a browser; verify FPS stability and collision correctness.
- Edge tests:
  - Paddle-edge glancing hits adjust bounce angle
  - Ball never tunnels through paddles at max speed
  - Score increments and round resets properly

## Performance
- Maintain fixed-step updates. If adding heavy logic, consider amortization over frames.
- Avoid allocations in hot paths; reuse objects where straightforward (but do not sacrifice clarity).

## Folder and Naming Conventions
- Files: `camelCase` for modules, `PascalCase` for classes.
- Keep module names semantic (e.g., `powerupSystem.js`, `hazardCollisions.js`).

## Definition of Done
- Code follows the above discipline and passes manual tests.
- New modules are documented briefly in `docs/EXTENSIONS.md` or inline with concise docstrings.
