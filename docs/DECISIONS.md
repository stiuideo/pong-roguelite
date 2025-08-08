# Architectural Decisions

A living record of key design choices.

- Canvas-only rendering: All visuals through `renderer.js`; zero DOM UI to simplify portability and performance.
- Fixed-step updates: Deterministic physics and consistent behavior across machines.
- Module boundaries: Input, AI, physics, rendering, and entities are separate to avoid tight coupling.
- Entities do not render themselves: Single rendering surface for consistency and easier styling effects.
- AI isolated per entity type: Scalable difficulty and behavior tweaks without branching logic elsewhere.
- No frameworks: Keep the runtime small and the code approachable.
