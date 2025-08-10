# Pong with Steroids — Dev Guide

This document orients future contributors and AI agents to extend this codebase cleanly. It summarizes goals, constraints, structure, and the core loop.

## Goals
- Build a modular, extensible foundation for a roguelite Pong (AI opponents, powers, levels, cards).
- Keep the main loop clean; isolate concerns per module.
- Prefer readability and maintainability over micro-optimizations.

## Constraints
- Vanilla JS (ES6 modules), HTML, CSS only.
- Canvas-only rendering; no DOM UI.
- No external libraries.

## Quick Start
- Open `index.html` in any modern browser (or serve locally with a simple static server).
- Controls: W/↑ to move up, S/↓ to move down.

## Project Layout
```text
index.html
styles.css
src/
  main.js                # entrypoint: wires systems and starts the loop
  core/
    game.js              # fixed-step loop; orchestrates update/draw and scoring
    renderer.js          # all canvas drawing; no logic
    input.js             # keyboard input (W/S or ↑/↓)
    state.js             # global state: bounds, score, entity registry
  entities/
    ball.js              # Ball entity (position, velocity, update, reset/launch)
    paddle.js            # Paddle base + PlayerPaddle
  ai/
    aiPaddle.js          # AIPaddle with tunable difficulty params
  physics/
    collisions.js        # AABB collisions; reflective bounce
  utils/
    math.js              # clamp, etc.
```

## Core Loop (Fixed-Step)
- `createGame` uses a fixed `dt = 1/60` with an accumulator to ensure deterministic updates.
- Order of operations each update:
  1) Player input → `PlayerPaddle.handleInput`
  2) AI update → `AIPaddle.updateAI`
  3) Entity updates → `Ball.update`, `Paddle.update`
  4) Physics/collisions → `resolveCollisions`
  5) Scoring/reset if the ball crosses left/right bounds

## Rendering
- All draw calls live in `renderer.js` (e.g., `drawCourt`, `drawScore`, `drawBall`, `drawPaddle`).
- Entities do not draw themselves; the renderer is the single place that touches Canvas APIs.

## Extension Mindset
- New features should be isolated in new modules and called from the loop at clear extension points (see `docs/MODDING.md`).
- Avoid mixing concerns (e.g., no physics in the renderer, no rendering in entities).

See:
- `docs/ARCHITECTURE.md` for system responsibilities and data flow.
- `docs/MODDING.md` for recipes to add features.
- `docs/CONTRIBUTING.md` for style and conventions.
- `docs/ROADMAP.md` for milestone guidance.

## Design Docs
- `design/GAME_DESIGN_OVERVIEW.md`
- `design/STORY_LORE.md`
- `design/CORE_LOOP.md`
- `design/PLAYER_UPGRADES.md`
- `design/OPPONENTS.md`
- `design/ARENAS.md`
- `design/META_HUB.md`
- `design/CARDS_CATALOG.md`
- `design/BALANCE_NOTES.md`
