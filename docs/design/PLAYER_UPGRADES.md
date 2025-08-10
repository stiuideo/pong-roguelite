<!-- AI-DIRECTIVE: Single source of truth. Keep this file self-contained.
If changing upgrade mechanics, update GAME_DESIGN_OVERVIEW.md, CORE_LOOP.md, and CARDS_CATALOG.md references.
Never invent new upgrade types not listed here without adding them to GAME_DESIGN_OVERVIEW.md and CARDS_CATALOG.md. -->

**Status:** Draft | **Owner:** Matheus | **Last updated:** 2025-08-09  
**Depends on:** [GAME_DESIGN_OVERVIEW.md](./GAME_DESIGN_OVERVIEW.md)

# PLAYER & UPGRADES

## Purpose
Define the player’s paddle identity, the upgrade acquisition system, and the rules for upgrade design.

---

## Canon

### Paddle Identity
- The player always controls a **paddle**, but upgrades modify its behavior, stats, abilities, and visuals.
- Paddle appearance evolves throughout a run based on the upgrades chosen.
- Paddle upgrades are **stackable** — multiple effects combine to shape each run’s playstyle.

---

### Upgrade Acquisition
- After each **victory**, the player is presented with a **3-card draft**.
- The player must **choose exactly one** card per draft.
- Cards can be:
  - **Paddle Upgrades** – Affect size, speed, special abilities.
  - **Ball Modifiers** – Change ball physics, behavior, or interactions.
  - **Arena Boons/Curses** – Affect the playfield during future matches.
- Defeating a **new High-Tier (Boss) opponent** unlocks a new, more powerful card type for future runs.

---

### Trade-Off Rule
- Every card must include **at least one positive and one negative effect**.
- Trade-offs can be **direct** (gain speed, lose length) or **indirect** (gain ball homing, enemy ball speed also increases).
- The magnitude of positive vs. negative effects must be tuned to avoid “must-pick” or “never-pick” cards.

---

### Visual Rules
- Every upgrade must cause a **clear and noticeable visual change**:
  - Paddle outline, texture, or color shifts.
  - Ball particle effects, trail colors, or shape changes.
  - Arena or UI indicators for global effects.
- Visual changes should communicate **both** the positive and negative aspects when possible.

---

### Example Card Concepts
- **Magnet Paddle** – Ball curves toward the player’s Y-axis (radius R=120px)  
  _Trade-off:_ −10% paddle length.  
  _Visual:_ Subtle shimmering field around paddle.

- **Turbo Boost** – +20% paddle speed.  
  _Trade-off:_ +15% enemy paddle speed.  
  _Visual:_ Paddle leaves a motion blur when moving.

- **Boom Ball** – Ball explodes on hit, knocking back opponent paddle slightly.  
  _Trade-off:_ Explosion also affects player paddle if too close.  
  _Visual:_ Ball flashes red before impact.

- **Iron Wall** – +20% paddle length.  
  _Trade-off:_ −15% paddle movement speed.  
  _Visual:_ Paddle appears thicker and metallic.

---

### Synergy Guidelines
- Upgrades must be designed to **combine in interesting ways**:
  - Example: Magnet Paddle + Boom Ball → Curved, explosive ball.
  - Example: Turbo Boost + Iron Wall → Very fast but large and heavy paddle.
- Avoid combinations that make rallies unwinnable or trivially easy.

---

## Upgrade Balancing Philosophy
1. **Every Choice Hurts:** The right upgrade depends on build context, not raw power.
2. **Visual Clarity First:** If an effect isn’t obvious to the player, rework it.
3. **Synergy Over Quantity:** Fewer upgrades with rich interactions are better than many with flat bonuses.
