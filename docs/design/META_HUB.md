<!-- AI-DIRECTIVE: Single source of truth. Keep this file self-contained.
If changing hub mechanics, update GAME_DESIGN_OVERVIEW.md and ROADMAP.md references.
Never invent new hub features not listed here without adding them to this file. -->

**Status:** Draft | **Owner:** Matheus | **Last updated:** 2025-08-09  
**Depends on:** [GAME_DESIGN_OVERVIEW.md](./GAME_DESIGN_OVERVIEW.md)

# META-PROGRESSION HUB

## Purpose
Define the post-death space where the player prepares for the next run, interacts with NPCs, and spends currency.

---

## Canon

### Name & Theme
- **Name:** The Place.
- **Theme:** A dimly lit, text-based void where paddles gather between Championships.
- **Lore Function:** The waiting area for those who failed to win — populated only by paddles who keep returning to compete.  
  The winner never comes back.

---

### Core Functions
1. **Pre-Run Prep**
   - Select paddle style (once unlocked).

2. **Post-Death Review**
   - Summary of match performance.
   - List of new cards unlocked (if a new High-Tier (Boss) opponent was defeated).
   - Updated opponent/arena intel.

3. **Currency Spending**
   - **Currency Name:** Ball Bearings.
   - Earned from:
     - Defeating opponents (amount scales by tier).
     - Winning matches consecutively.
   - Spent on:
     - Unlocking new paddle styles.
     - Expanding initial card pool.
     - Permanent minor stat bonuses (cap-limited to avoid overpowering early game).
   - All visual changes purchased must have a gameplay effect.  
     There are **no purely cosmetic options**.

4. **Dialog System**
   - All NPCs are paddles who have competed many times but never won.
   - Dialog reveals:
     - Personal frustrations or quirks.
     - Hints about certain opponents or arenas.
     - Subtle worldbuilding about the nature of the Championship.
   - Some NPCs may gradually disappear if they “retire” from competing.

---

### Unlock Flow
- **New Cards:** Unlocked immediately upon first victory over a new High-Tier (Boss) opponent.
- **New Paddle Styles:** Purchased with Ball Bearings after meeting specific performance conditions (e.g., win 3 matches without losing a point).

---

### NPC Concepts
- **The Strategist:** An older paddle who obsesses over tactics and opponent patterns but never wins; offers small gameplay hints.
- **The Braggart:** Claims they “almost” won every time; sometimes gives misleading advice.
- **The Rookie:** A wide-eyed new paddle looking up to the player; mirrors your own early-game ignorance.
- **The Ghost:** Appears rarely; always silent. Lore hint that they may have “almost” reached The Room.

---

### Hub Upgrade Rules
- All permanent bonuses must be small enough to preserve run difficulty.
- Visual upgrades must clearly reflect mechanical effects (size, shape, texture changes tied to upgrades).
- Dialog frequency should avoid repetition fatigue — rotate lines and unlock new ones over time.

---

## Expansion Guidelines
- Any new hub feature must fit the Place theme.
- No purely cosmetic upgrades.
- NPCs should all be Championship competitors who have failed at least once.
