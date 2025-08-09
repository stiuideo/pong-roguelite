<!-- AI-DIRECTIVE: Single source of truth. Keep this file self-contained.
If changing arena mechanics, update GAME_DESIGN_OVERVIEW.md and ROADMAP.md references.
Never invent new arenas not listed here without adding them to this file. -->

**Status:** Draft | **Owner:** Matheus | **Last updated:** 2025-08-09  
**Depends on:** [GAME_DESIGN_OVERVIEW.md](./GAME_DESIGN_OVERVIEW.md)

# ARENAS

## Purpose
Define the biome-style arenas, their environmental effects, and design rules for creating new ones.

---

## Canon

### Arena Philosophy
- Each arena should meaningfully change match dynamics **unless intentionally designed as a “plain court”** for pacing or thematic reasons.
- **Lower-Tier Arenas:** Have **no root mechanical effects** — they play as traditional Pong courts to:
  - Ease players into controls, opponent quirks, and upgrades.
  - Build contrast for later, more chaotic arenas.
  - Reinforce the story’s early-game “boring void” tone.
- **Mid-Tier Arenas:** Introduce one significant, readable modifier.
- **High-Tier/Boss Arenas:** Strong, often chaotic effects; can combine multiple modifiers.
- Arena effects must:
  - Be visually communicated to the player.
  - Interact with the ball, paddle, or both.
  - Scale in intensity to match opponent tier and match position in the Championship.
- Arenas should be memorable through **visuals + mechanical twist**.

---

## Arena Catalog

### LOWER-TIER (No Effect)

#### ID: ARENA_CLASSIC
- **Name:** Classic Court
- **Tier:** Lower-Tier
- **Effect:** None — pure Pong.
- **Visuals:** Black background, white lines, minimalistic score HUD.
- **Numerics:** Standard Pong physics.
- **Notes:** Used in first matches for onboarding.

#### ID: ARENA_DUSTY_TERMINAL
- **Name:** Dusty Terminal
- **Tier:** Lower-Tier
- **Effect:** None — purely visual.
- **Visuals:** Faint CRT flicker, occasional static scanline.
- **Numerics:** Standard Pong physics.
- **Notes:** Subtle lore hint about the “terminal” truth.

---

### MID-TIER & HIGH-TIER (With Effects)

#### ID: ARENA_WINDY_ZONE
- **Name:** Windy Zone
- **Tier:** Mid-Tier
- **Effect:** Wind randomly alters the ball’s trajectory mid-flight.
- **Visuals:** Subtle moving background elements (dust, leaves) indicating wind direction.
- **Numerics:** Wind direction changes every 3–5 seconds; max deviation angle = ±15°.
- **Notes:** Can cause unexpected misses; pairs well with multi-ball opponents.

#### ID: ARENA_TIDE_PULSE
- **Name:** Tide Pulse
- **Tier:** Mid-Tier
- **Effect:** A horizontal “tide line” sweeps upward and downward across the playfield every 7–10 seconds. When the tide line passes the ball, its vertical speed is reduced by 40% for 1.5s (making shots flatter); when passing paddles, paddle movement speed is reduced by 20% for 1.5s.
- **Visuals:** A faint ripple shader moves across the arena like a slow ocean wave; paddles and ball slightly distort while inside it.
- **Numerics:** Tide line sweep duration = 2.0s; interval between sweeps = 7–10s random; ball vertical speed multiplier = 0.6; paddle speed multiplier = 0.8; effect duration after contact = 1.5s.
- **Notes:** Disrupts both positioning and ball control—forces adaptation to sudden “sluggish” phases in rallies.

#### ID: ARENA_MIRROR_EDGE
- **Name:** Mirror Edge
- **Tier:** Mid-Tier
- **Effect:** Two narrow vertical “mirror zones” (one near each back wall) reflect the ball’s horizontal movement vector if it passes through without touching a paddle. Effectively sends the ball back toward the opponent without a hit, but with 70% of its original speed.
- **Visuals:** Thin shimmering panels 0.2 paddle lengths from each back wall; on trigger, a short flash and ripple plays.
- **Numerics:** Mirror zone width = 8px; reflection speed multiplier = 0.7; cannot trigger twice in a row without at least one paddle contact; disabled during serves.
- **Notes:** Punishes deep lobs and extreme corner shots, rewarding mid-field control.

#### ID: ARENA_SPIN_CURRENTS
- **Name:** Spin Currents
- **Tier:** Mid-Tier
- **Effect:** Three invisible vertical “current lanes” apply gentle spin to the ball when crossed, curving its path by ±5° for the next 1.5s. Spin direction alternates each time a lane is crossed.
- **Visuals:** Very subtle heat-haze effect in the lane’s position; ball leaves a faint curved trail when under spin effect.
- **Numerics:** Lanes at 20%, 50%, and 80% width; spin magnitude = ±5°; spin duration = 1.5s; spin direction alternates per lane crossing; effect stacks if multiple lanes are crossed quickly.
- **Notes:** Forces players to anticipate altered angles and plan positioning around lane placements.

#### ID: ARENA_PARTY_ZONE
- **Name:** Party Zone
- **Tier:** High-Tier/Boss
- **Effect:** Lights strobe and colors shift rapidly; occasional full-screen flashes.
- **Visuals:** Disco-style background, pulsing floor.
- **Numerics:** Lighting change rate = 0.5–1.5s intervals.
- **Notes:** Primarily visual disruption, but can mask subtle opponent animations.

#### ID: ARENA_POOL_ZONE
- **Name:** Pool Zone
- **Tier:** Mid-Tier
- **Effect:** A waterline occupies the bottom 15% of the screen. When the ball hits the water, it “drowns” and a new ball spawns from the center.
- **Visuals:** Animated water surface with splashes.
- **Numerics:** Waterline height = 15% screen height; splash animation 0.3s.
- **Notes:** Changes player strategy for low hits; increases randomness.

#### ID: ARENA_ZERO_G
- **Name:** Zero-G Chamber
- **Tier:** High-Tier/Boss
- **Effect:** Reduced gravity makes balls bounce higher and stay in play longer.
- **Visuals:** Floating debris, low-gravity ball arcs.
- **Numerics:** Gravity scale = 40% of default; ball air time increased ~1.6×.
- **Notes:** Extended rallies; strong with ricochet or explosive balls.

#### ID: ARENA_BLACKOUT
- **Name:** Blackout
- **Tier:** High-Tier/Boss
- **Effect:** Lights periodically go out, hiding paddles, ball, and arena.
- **Visuals:** Full darkness with occasional sparks or flashes revealing positions.
- **Numerics:** Darkness lasts 1s; visible phase lasts 4s.
- **Notes:** Dramatic pacing shifts; favors opponents with predictive ball control.

#### ID: ARENA_ARCHIVE_STACK
- **Name:** Archive Stack
- **Tier:** High-Tier/Boss
- **Effect:** **Playback Tracks.** Three faint horizontal “tape tracks” (at 25%, 50%, 75% screen height) record the ball’s vector when it crosses them and “stamp” it for a short window. If the ball crosses the *same* track again while a stamp is active, its outgoing angle **snaps to the stamped vector** (Pattern Replay) at 90% of current speed, overriding normal contact angle for that bounce only. While the ball travels within 12px of a track, a mild **tape drag** curves its path by up to ±6° along the track.
- **Visuals:** Twin tape reels turning in the background; the active track glows with a timecode tick. When a vector is stamped, a short ghost-arrow sits on the track showing the stored angle; on replay, the arrow “rewinds” and the ball follows it for a beat.
- **Numerics:** Track positions = 25% / 50% / 75% screen height; stamp lifetime = 3.0s; replay speed multiplier = 0.9; tape-drag curvature = up to ±6° within 12px radius; per-track replay cooldown = 5s; disabled during serves and for 0.5s after a point.
- **Notes:** Teaches players to avoid “arming” tracks then crossing again blindly. Synergizes with **Archivist – Pattern Recall** (the arena externalizes what the boss does internally). Readable, but punishing if you ignore the ghost-arrow. Keeps agency—no hard locks, just angle hijacks you can predict and play around.

---

## Expansion Rules
- New arenas must include: **Name, Tier, Effect, Visuals, Numerics, Notes**.
- Keep effects fair but impactful — avoid arenas that remove all player agency.
- Arena effects can stack with ball and paddle upgrades for emergent gameplay.
