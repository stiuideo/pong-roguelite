# Roadmap

Milestones to evolve classic Pong into a roguelite arcade experience.

## M1: Core Polish
- Ball/paddle polish: edge cases, speed capping, angle tuning
- Add pause and reset controls
- Add basic HUD (round, best-of, FPS toggle) — render via canvas
- Basic sound effects (bounce, score)

## M2: Power-Ups
- Entity: `PowerUp` with timed spawn and pickup
- Systems: spawn rules, collision resolution, effect application
- Effects: paddle size, ball speed, multi-ball, sticky paddle, curve shots

## M3: Difficulty & Levels
- Difficulty system that ramps AI parameters and spawn rates
- Level progression with themed parameters and win/lose conditions

## M4: Card Drafts & Meta
- Between rounds, present 3 cards (canvas UI)
- Card effects stack; persist temporary run state
- Add simple meta-progression saved to `localStorage`

## M5: Bosses & Phases
- Boss paddle behaviors with unique patterns
- Phase transitions, hazards, and arena modifiers

Each milestone should preserve the architecture: clean loop, isolated systems, canvas-only rendering.
