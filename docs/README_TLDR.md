# TL;DR for Agents
- Vanilla JS + Canvas only; ES modules.
- Keep loop phases: Input → AI → Entities → Physics → Scoring → Render.
- No rendering in entities; add draw functions to `renderer.js`.
- Add new code in new modules; wire calls in `core/game.js`.
- Respect and extend `state` via `core/state.js`.
- Physics mutates entities; it does not render.
- AI lives under `src/ai/` and only controls behaviors.
- Use `docs/MODDING.md` for recipes.
- Keep it readable; optimize last.
