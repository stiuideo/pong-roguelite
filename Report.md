## Documentation Audit Report — Pong with Steroids

Date: 2025-08-10


### Critical inconsistencies to fix
- **Roguelite vs Roguelike (terminology mismatch)**
  - `docs/design/GAME_DESIGN_OVERVIEW.md` explicitly: “roguelite, not roguelike.”
  - `README.md` (root) and `docs/README.md`/`docs/ROADMAP.md` say “roguelike.”
  - **Action**: Standardize on “roguelite.” Update all non-design docs to match the design canon.

- **Card draft size (3 vs 2–3)**
  - `docs/design/CORE_LOOP.md` and `docs/design/PLAYER_UPGRADES.md`: always 3-card drafts.
  - `docs/ROADMAP.md` (M4): “present 2–3 cards.”
  - **Action**: Keep exactly 3 and update `docs/ROADMAP.md` accordingly.

- **Arena name mismatch: “Lights Out” vs “Blackout”**
  - `docs/design/ARENAS.md`: `ARENA_BLACKOUT` (name “Blackout”).
  - `docs/design/CARDS_CATALOG.md` Synergies: mentions “Lights Out”.
  - **Action**: Rename the synergy mentions to “Blackout”.

### Missing files / broken references
- **Missing file: `docs/EXTENSIONS.md`**
  - Referenced by: `README.md` (root), `docs/README_TLDR.md`, `docs/CONTRIBUTING.md`, `docs/ARCHITECTURE.md`.
  - **Action**:  update all references to `docs/MODDING.md`.

- **Wrong paths in root `README.md`**
  - Points to `docs/CHECKLISTS.md` and `docs/EXAMPLES.md`.
  - Actual files: `docs/playbooks/CHECKLISTS.md`, `docs/examples/EXAMPLES.md`.
  - **Action**: Fix the two links in the root `README.md`.

- **Duplicate link**
  - `docs/design/GAME_DESIGN_OVERVIEW.md` lists `OPPONENTS.md` twice in the Links section.
  - **Action**: Remove the duplicate entry.

### Clarifications that unblock implementation
- **Card type semantics and duration**
  - `Arena Boon`/`Arena Curse` entries are inconsistent: many say “in next match”, others don’t (e.g., `TONGUE_LASH`, `LUCKY_BOUNCE`).
  - `TONGUE_LASH` is typed as an Arena Boon but functions like a player ability during rallies.
  - **Action**: In the card schema, add a `Duration:` field (e.g., `Next match only` vs `Until end of run`). Clarify that Arena Boons/Curses are match-scoped modifiers, not persistent, unless explicitly stated.

- **“Cosmetic” vs “Visual” wording**
  - `GAME_DESIGN_OVERVIEW.md` canon: “cards include trade-offs and cosmetic changes”.
  - `META_HUB.md`: “There are no purely cosmetic options.”
  - **Action**: Replace “cosmetic” with “visual” where it coexists with mechanics. E.g., “trade-offs and visual changes (communicating mechanics).”

- **Scoring behavior in special arenas**
  - `ARENA_POOL_ZONE`: Ball “drowns” and respawns center — unclear whether a point is awarded.
  - **Action**: Specify “no point; neutral reset” to avoid logic ambiguity.

- **Numeric representation consistency**
  - Mixed usage of percentages and multipliers across docs (e.g., “+20%” and “speed multiplier = 1.2”).
  - **Action**: Pick a primary convention and mirror the other in parentheses once. Example: “multiplier 1.2”.

- **Tier naming consistency**
  - Variants appear: “High-Tier/Boss”, “High-Tier”, “boss-tier”.
  - **Action**: Normalize to one: e.g., `Lower-Tier`, `Mid-Tier`, `High-Tier (Boss)`.

### Minor issues
- **Typo**: `docs/design/GAME_DESIGN_OVERVIEW.md` Pillars: “High readabilty” → “High readability”.
  - **Action**: Fix the typos.


### Suggested additions (nice-to-have for agents)
- **RNG/Seeding policy**: State if runs are seedable and how seeds are surfaced (e.g., debug overlay, URL param). This aids repro and automated testing.
- **Glossary**: Short section defining common terms: paddle length/width, paddle movement speed, rebound speed, curve/spin, serve.
- **Balance notes template**: Add a starter entry format example under `docs/design/BALANCE_NOTES.md`.


— End of report —
