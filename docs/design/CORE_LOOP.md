<!-- AI-DIRECTIVE: Single source of truth. Keep this file self-contained.
If changing loop structure, update GAME_DESIGN_OVERVIEW.md and ROADMAP.md references.
Never invent new loop stages not listed here without adding them to GAME_DESIGN_OVERVIEW.md. -->

**Status:** Draft | **Owner:** Matheus | **Last updated:** 2025-08-09  
**Depends on:** [GAME_DESIGN_OVERVIEW.md](./GAME_DESIGN_OVERVIEW.md)

# CORE GAME LOOP & STRUCTURE

## Purpose
Define the standard run flow, match sequence, and progression triggers.

---

## Canon

### Loop Overview
A single run consists of:
1. **Meta Hub (Post-Death / Pre-Run Prep)**
   - Player selects paddle style (once unlocked).
   - Review unlocked cards and possible opponents.
   - Optional dialog with NPC paddles.

2. **Match Sequence**
   - Player faces one opponent per arena.
   - Each opponent has a unique ability/weaponized paddle style.
   - Arena environmental effects are active during the match.

3. **Reward Phase**
   - Upon victory, player receives a **3-card draft**.
   - Cards have **trade-offs** and **visual changes**.
   - Defeating certain opponents unlocks more powerful cards for future runs.

4. **Next Match**
   - Repeat steps 2–3 until defeat or final victory.

5. **Death or Championship Win**
   - **On Death:** Player returns to Meta Hub with knowledge retention and possible new card unlocks.
   - **On Win:** Trigger final cutscene revealing “The Room” truth (see STORY_LORE.md).

---

### Match Flow
1. **Arena Reveal:** Visual intro of the match environment.
2. **Opponent Intro:** Short animation and name display.
3. **Pong Combat:** Standard Pong physics with opponent abilities and ball modifiers active.
4. **Victory or Loss:**
   - Win → 3-card draft.
   - Loss → Return to Meta Hub.

---

### Match Rules & Championship Structure
- **Points to Win a Match:** First player to score **6 points** wins.
- **Championship Format:** A run consists of **7 matches** total.
  - Matches 1–2: Lower-Tier opponents, mild arena effects.
  - Matches 3–4: Mid-Tier opponents, moderate arena effects.
  - Matches 5–7: High-Tier (Boss) opponents, extreme arena effects.
- **Progression:** Player must win all 7 matches in a row to become Champion.

---

### Progression Rules
- Defeating **new High-Tier (Boss) opponents** unlocks new, more powerful card types.
- Certain deaths unlock new dialog lines or hub interactions.
- Arena variety ensures each run feels distinct.

---

## Pacing Notes
- Early matches: Easier opponents, mild arena effects.
- Mid matches: Opponent abilities combine with moderate arena effects.
- Final matches: High-intensity combinations, possible “double modifiers.”

---

## Victory & Failure Conditions
- **Victory:** Win all 7 matches of the Championship.
- **Failure:** Lose any match before the final.

---

## Design Pillars in Loop
1. **Short, Repeatable Runs:** 10–20 minutes per full run.
2. **Build Crafting Through Drafts:** The 3-card system drives run variation.
3. **Replayability via Randomization:** Opponents, arenas, and card offers change each run.
