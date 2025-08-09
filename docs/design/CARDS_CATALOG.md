<!-- AI-DIRECTIVE: Single source of truth. Keep this file self-contained.
If changing mechanics, update CORE_LOOP.md and CARDS_CATALOG.md references.
Never invent new mechanics not listed here without adding them to GAME_DESIGN_OVERVIEW.md and ROADMAP.md. -->

**Status:** Draft | **Owner:** Matheus | **Last updated:** 2025-08-09  
**Depends on:** [GAME_DESIGN_OVERVIEW.md](./GAME_DESIGN_OVERVIEW.md)

# CARDS CATALOG
## Purpose
Single source of truth for draftable upgrades.
## Schema
Use per-card blocks:
### ID: <ID_UPPER_SNAKE>
- **Name:** <Readable Name>
- **Type:** Paddle Upgrade | Ball Modifier | Arena Boon | Curse
- **Rarity:** Common/Uncommon/Rare/Legendary
- **Effect:** <Exact effect>
- **Trade-off:** <Exact trade-off or “None”>
- **Numerics:** <All tunables with default values>
- **Synergies:** <Cross-card effects>
- **Visuals:** <Visual change>
- **Unlock:** <Condition>
- **Notes:** <Balance constraints>
