<!-- AI-DIRECTIVE: Single source of truth. Keep this file self-contained.
If changing opponent mechanics or stats, update GAME_DESIGN_OVERVIEW.md and ROADMAP.md references.
Never invent new opponents not listed here without adding them to this file. -->

**Status:** Draft | **Owner:** Matheus | **Last updated:** 2025-08-09  
**Depends on:** [GAME_DESIGN_OVERVIEW.md](./GAME_DESIGN_OVERVIEW.md)

# OPPONENTS

## Purpose
Define the philosophy behind opponent design, the rules for creating them, and catalog all unique paddles the player can face.

---

## Philosophy & Design Rules
- Every opponent is a **paddle** with a unique ability or mechanic that changes rally dynamics.
- Opponents should have **memorable names**, themed abilities, and distinct personalities.
- High-tier/Boss opponents should feel mechanically and visually distinct from lower-tier opponents.
- Beating a **new High-tier/Boss opponent** unlocks a new, more powerful card type in the upgrade pool.
- Opponent abilities must:
  - Interact meaningfully with both the ball and the player’s paddle.
  - Be readable at a glance (clear visual indicators).
  - Scale in complexity and challenge from lower-tier to boss-tier.

---

## Tier Guidelines
- **Lower-Tier:** Simple mechanics, mild difficulty. Introduce player to variety without overwhelming them.
- **Mid-Tier:** Abilities that require adaptation and strategy; moderate arena effect synergy.
- **High-Tier/Boss:** Strong, signature abilities; complex attack patterns; often paired with extreme arena effects.

---

## Opponent Catalog

### ID: OPP_MIRROR
- **Name:** Mirror Paddle
- **Tier:** High-Tier/Boss
- **Ability Kit:** Copies all upgrades the player has chosen so far.
- **Special Rules:** Gains the copied upgrade effects immediately before match start.
- **Arena Affinity:** Neutral — can appear in any arena.
- **Unlocks:** Adds “mirror” variant cards to the upgrade pool.
- **Numerics:** Matches all player paddle stats exactly.
- **VO/Flavor:** “Let’s see how you handle yourself.”

### ID: OPP_KAMALEON
- **Name:** Kamaleon
- **Tier:** Mid-Tier
- **Ability Kit:** 
  - **Invisibility:** Invisible except during paddle–ball contact frames; faint silhouette flickers near ball trajectory.
  - **Tongue Lash (AI Variant):** When the ball is within **0.5 paddle lengths** of Kamaleon’s back wall (would concede), Kamaleon may **catch** and **relaunch** the ball from its current position, adjusting the launch angle up to **±20°** toward the player’s side. 
- **Special Rules:** 
  - **Telegraph:** 0.20s wind-up (subtle “tongue” line extends toward ball, short hiss SFX). 
  - **AI Limit:** **1 use per match** (never more). Cannot trigger within 3s of a serve. 
  - **Counterplay:** If the player hits a strong return (ball speed ≥ player’s base × 1.25), the Tongue Lash catch window shrinks by 40%. 
- **Arena Affinity:** Excels in low-visibility arenas (e.g., Party Zone) where the wind-up is harder to read.
- **Unlocks:** 
  - **Stealth**-themed paddle upgrades (as before).
  - **Card:** **TONGUE_LASH** added to the draft pool after first victory over Kamaleon.
- **Numerics:** 
  - Invisibility uptime ≈ **98%** of match time.
  - Tongue Lash trigger distance = **0.5 paddle lengths** from back wall.
  - Tongue Lash angle adjust = **±20°**; relaunch speed = **0.9×** incoming speed.
  - Tongue Lash internal cooldown (AI) = **entire match** after one use.
- **VO/Flavor:** “Can’t hit what you can’t see… or catch.”

### ID: OPP_OCTOPUS
- **Name:** Octopus
- **Tier:** High-Tier/Boss
- **Ability Kit:** Controls 4 smaller paddles linked together; can intercept ball at multiple heights.
- **Special Rules:** Mini-paddles have reduced length and move slightly slower than main paddle.
- **Arena Affinity:** Works best in large arenas with multiple ball spawn points.
- **Unlocks:** Unlocks “multi-hit” and “split-ball” upgrades.
- **Numerics:** Mini-paddle length = 30% of standard, speed = 85% of standard.
- **VO/Flavor:** “Four times the paddle, four times the trouble.”

### ID: OPP_JUGGLER
- **Name:** The Juggler
- **Tier:** Mid-Tier
- **Ability Kit:** Spawns a second ball every 10 seconds; both balls remain in play until point scored.
- **Special Rules:** Max of 3 balls can be active at once.
- **Arena Affinity:** Synergizes with chaotic arenas like Windy Zone.
- **Unlocks:** Unlocks “multi-ball” upgrades.
- **Numerics:** Ball spawn cooldown = 10s; max concurrent balls = 3.
- **VO/Flavor:** “Hope you’ve got good eyes.”

### ID: OPP_KAREN
- **Name:** Karen
- **Tier:** Mid-Tier
- **Ability Kit:** Can stop the ball mid-air once every 8 seconds, then reverse its direction.
- **Special Rules:** Ball pause lasts 0.75s before launch.
- **Arena Affinity:** Works best in cramped arenas.
- **Unlocks:** Unlocks “control” themed cards.
- **Numerics:** Ball pause cooldown = 8s; reverse speed = +10% base.
- **VO/Flavor:** “I’d like to speak to your manager.”

### ID: OPP_GLITCHER
- **Name:** Glitcher
- **Tier:** Mid-Tier
- **Ability Kit:**
  - **Glitch Phase:** Every 6–9 seconds, Glitcher’s paddle rapidly “teleports” a short distance (0.3 paddle lengths) along the vertical axis. Can occur mid-movement, letting it dodge shots or intercept balls unexpectedly.
  - **Bit Flip:** On 15% of hits, the ball’s trajectory angle is inverted (mirrored across the horizontal axis) instead of reflecting normally.
- **Special Rules:**
  - Teleports are instant but preceded by a 0.15s static “glitch” effect as a telegraph.
  - Bit Flip cannot trigger twice in a row; 1s lockout.
  - Both abilities are disabled during serves.
- **Arena Affinity:** Strong in narrow arenas where vertical space is limited, allowing teleports to consistently cover the ball.
- **Unlocks:** None unique — counts toward “Defeat any Mid-tier boss” unlocks.
- **Numerics:**
  - Teleport distance = 0.3 paddle lengths; cooldown = 6–9s random.
  - Bit Flip chance = 15%; lockout = 1s.
- **VO/Flavor:** “Reality’s just a suggestion.”

### ID: OPP_REVERB
- **Name:** Reverb
- **Tier:** Mid-Tier
- **Ability Kit:**
  - **Echo Hit:** Each time Reverb hits the ball, it creates a faint “echo ball” that follows the real ball’s path at 50% speed for 1.5s before vanishing.
  - **Sound Burst:** On every 4th hit, the real ball gains +15% speed and a faint shockwave SFX, forcing faster reaction.
- **Special Rules:**
  - Echo balls are harmless but visually distracting; their trail opacity increases if they pass near your paddle.
  - Sound Burst applies only to real balls, never to echoes.
- **Arena Affinity:** Best in high-contrast arenas where echoes are hard to visually ignore.
- **Unlocks:** None unique — counts toward “Defeat any Mid-tier boss” unlocks.
- **Numerics:**
  - Echo delay = 1.5s lifespan; speed = 50% of real ball.
  - Sound Burst frequency = every 4th hit; speed multiplier = 1.15.
- **VO/Flavor:** “You’re not hearing things… yet.”

### ID: OPP_ARCHIVIST
- **Name:** Archivist
- **Tier:** High-Tier
- **Ability Kit:**
  - **Pattern Recall:** Archivist “remembers” your last 3 shots (angles & speeds). Every 8–10 seconds, it replicates one of them *perfectly* back at you when hitting the ball, forcing you to deal with your own hardest shots.
  - **Data Corruption:** On every 5th paddle–ball contact, the ball temporarily gains a random visual “glitch skin” (e.g., shrinking, pixel smear, color inversion) for 2s, slightly desyncing the ball’s visual from its actual hitbox.
- **Special Rules:**
  - Pattern Recall shots are telegraphed with a short “rewind” visual and a faint tape-reel SFX.
  - Data Corruption does **not** alter ball physics — only visuals — so skilled players can ignore the fake cues, but it’s disorienting.
  - Archivist’s AI prioritizes using Pattern Recall at high ball speeds for maximum pressure.
- **Arena Affinity:** Excels in arenas with low visual clutter, where Data Corruption is harder to mentally filter out.
- **Unlocks:** High-tier pool; counts toward “Defeat any High-tier boss” unlocks.
- **Numerics:**
  - Pattern Recall window: stores last 3 player hits (speed, angle, spin); picks one at random.
  - Data Corruption frequency = every 5th hit; visual distortion = 2s.
  - Pattern Recall cooldown = 8–10s random.
- **VO/Flavor:** “Your past will be your undoing.”

---

## Expansion Rules
- New opponents must follow Tier Guidelines above.
- Each opponent entry must include **Name, Tier, Ability Kit, Special Rules, Arena Affinity, Unlocks, Numerics, VO/Flavor**.
- Maintain visual + mechanical clarity at all times.
