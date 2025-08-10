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
- **Duration:** Next match only | Persistent this run | Other (specify)
- **Effect:** <Exact effect>
- **Trade-off:** <Exact trade-off or “None”>
- **Numerics:** <All tunables with default values>
- **Synergies:** <Cross-card effects>
- **Visuals:** <Visual change>
- **Unlock:** <Condition>
- **Notes:** <Balance constraints>

## Rarity & Tier Curve for Championship Runs

* **Common:** Accessible from match 1; simple stat shifts with mild trade-offs.
* **Uncommon:** Appear from match 2 onward; introduce moderate ability twists.
* **Rare:** Appear from match 3 onward; more complex effects, often unlocked via specific opponent defeats.
* **Legendary:** Appear from match 5 onward; highly impactful, unique synergies, require High-Tier (Boss) unlocks.

## Paddle Upgrades

### ID: MAGNET_PADDLE

* **Name:** Magnet Paddle
* **Type:** Paddle Upgrade
* **Rarity:** Uncommon
* **Effect:** Ball curves toward your paddle’s Y-axis (radius R=120px).
* **Trade-off:** −10% paddle length.
* **Numerics:** Curve strength radius = 120px; length reduction = 10%.
* **Synergies:** Boom Ball, Slow Time.
* **Visuals:** Subtle shimmering field around paddle.
* **Unlock:** Defeat any Mid-Tier (Boss).
* **Notes:** Strong in control builds; loses reach in corners.

### ID: TURBO_BOOST

* **Name:** Turbo Boost
* **Type:** Paddle Upgrade
* **Rarity:** Common
* **Effect:** +20% paddle movement speed.
* **Trade-off:** +15% enemy paddle movement speed.
* **Numerics:** Speed multiplier = 1.2; enemy speed multiplier = 1.15.
* **Synergies:** Long Reach, Boom Ball.
* **Visuals:** Motion blur trail when moving.
* **Unlock:** Default pool.
* **Notes:** Benefits aggressive play; risky against reaction-based opponents.

### ID: IRON_WALL

* **Name:** Iron Wall
* **Type:** Paddle Upgrade
* **Rarity:** Common
* **Effect:** +20% paddle length.
* **Trade-off:** −15% paddle movement speed.
* **Numerics:** Length multiplier = 1.2; speed multiplier = 0.85.
* **Synergies:** Magnet Paddle, Deflective Core.
* **Visuals:** Thick metallic paddle texture.
* **Unlock:** Default pool.
* **Notes:** Slower play; punishes bad positioning.

### ID: DEFLECTIVE_CORE

* **Name:** Deflective Core
* **Type:** Paddle Upgrade
* **Rarity:** Rare
* **Effect:** Reflects incoming ball at +15% speed.
* **Trade-off:** +10% rebound speed when opponent hits.
* **Numerics:** Player return speed multiplier = 1.15; opponent return = 1.1.
* **Synergies:** Iron Wall, Split Ball.
* **Visuals:** Paddle glows briefly on contact.
* **Unlock:** Defeat OPP_MIRROR once.
* **Notes:** Amplifies fast-rally builds.

### ID: LONG_REACH
- **Name:** Long Reach
- **Type:** Paddle Upgrade
- **Rarity:** Common
- **Effect:** Paddle can extend length by +25% for 1s after hitting the ball; retracts after duration. Cooldown 6s.
- **Trade-off:** −5% paddle speed.
- **Numerics:** Extension multiplier = 1.25; extension duration = 1s; cooldown = 6s; speed multiplier = 0.95.
- **Synergies:** Turbo Boost, Sticky Floor.
- **Visuals:** Paddle briefly elongates with a stretching animation.
- **Unlock:** Defeat any Mid-Tier (Boss).
- **Notes:** Timing-based reach advantage.

### ID: SLOW_TIME

* **Name:** Slow Time
* **Type:** Paddle Upgrade
* **Rarity:** Rare
* **Effect:** Temporarily slows ball speed by 30% for 2s after your hit.
* **Trade-off:** Opponent paddle speed increases by 10% during effect.
* **Numerics:** Slow factor = 0.7; duration = 2s.
* **Synergies:** Magnet Paddle, Chaos Spin.
* **Visuals:** Ball trail distorts while slowed.
* **Unlock:** Defeat OPP_KAREN once.
* **Notes:** Strong control option with careful timing.

### ID: ELASTIC_EDGE
- **Name:** Elastic Edge
- **Type:** Paddle Upgrade
- **Rarity:** Common
- **Effect:** Edge hits add a small curve to the ball (+10° based on hit side).
- **Trade-off:** Middle of paddle returns ball −10% slower.
- **Numerics:** Curve angle = ±10°; center multiplier = 0.9.
- **Synergies:** Magnet Paddle, Chaos Spin.
- **Visuals:** Paddle edges have a curved glow.
- **Unlock:** Default pool.
- **Notes:** Emphasizes positional play and shot shaping.

### ID: SLIM_FRAME
- **Name:** Slim Frame
- **Type:** Paddle Upgrade
- **Rarity:** Common
- **Effect:** Paddle speed +15%. +15% rebound speed when hitting with paddle center, −15% rebound speed when hitting edges.
- **Trade-off:** Paddle length −10%.
- **Numerics:** Speed multiplier = 1.15; length multiplier = 0.9; center rebound = 1.15; edge rebound = 0.85.
- **Synergies:** Turbo Boost, Boom Ball.
- **Visuals:** Paddle appears thinner with a highlighted center zone.
- **Unlock:** Default pool.
- **Notes:** Rewards precision hits for faster, more aggressive returns.

### ID: REINFORCED_BODY

* **Name:** Reinforced Body
* **Type:** Paddle Upgrade
* **Rarity:** Uncommon
* **Effect:** Paddle unaffected by knockback effects.
* **Trade-off:** Paddle speed −10%.
* **Numerics:** Speed multiplier = 0.9.
* **Synergies:** Boom Ball, Heavy Gravity.
* **Visuals:** Paddle has metal plating.
* **Unlock:** Default pool.
* **Notes:** Counters explosive or push-based builds.

### ID: PHASE_SHIFT

* **Name:** Phase Shift
* **Type:** Paddle Upgrade
* **Rarity:** Uncommon
* **Effect:** Paddle can briefly phase through the ball to reposition.
* **Trade-off:** Ball speed increases by 10% next hit.
* **Numerics:** Phase duration = 0.5s; cooldown = 8s.
* **Synergies:** Slow Time, Magnet Paddle.
* **Visuals:** Paddle becomes semi-transparent during phase.
* **Unlock:** Default pool.
* **Notes:** Adds mobility trick without full teleport.

### ID: COUNTERWEIGHT

* **Name:** Counterweight
* **Type:** Paddle Upgrade
* **Rarity:** Common
* **Effect:** +10% rebound speed when returning a faster-than-average ball.
* **Trade-off:** −10% rebound speed on slower-than-average balls.
* **Numerics:** Fast return bonus = 1.1; slow return penalty = 0.9.
* **Synergies:** Chaos Spin, Deflective Core.
* **Visuals:** Small weighted core in paddle center.
* **Unlock:** Default pool.
* **Notes:** Rewards reacting to power shots.

### ID: WIDE_STANCE
- **Name:** Wide Stance
- **Type:** Paddle Upgrade
- **Rarity:** Uncommon
- **Effect:** +15% paddle width. Edge hits return the ball at reduced rebound angles (flatter trajectory).
- **Trade-off:** −10% vertical movement speed.
- **Numerics:** Width multiplier = 1.15; angle reduction = 20%; speed multiplier = 0.9.
- **Synergies:** Iron Wall, Sticky Floor.
- **Visuals:** Paddle appears broader with flatter edge slope.
- **Unlock:** Default pool.
- **Notes:** Prioritizes coverage and directional control.


## Ball Modifiers

### ID: BOOM_BALL

* **Name:** Boom Ball
* **Type:** Ball Modifier
* **Rarity:** Uncommon
* **Effect:** Ball explodes on hit, knocking opponent paddle back.
* **Trade-off:** Explosion also affects your paddle if too close.
* **Numerics:** Knockback = 50px; explosion radius = 90px.
* **Synergies:** Magnet Paddle, Turbo Boost.
* **Visuals:** Ball flashes red before contact.
* **Unlock:** Default pool.
* **Notes:** Great for breaking control builds.

### ID: SPLIT_BALL

* **Name:** Split Ball
* **Type:** Ball Modifier
* **Rarity:** Rare
* **Effect:** Ball splits into 2 after 1st paddle contact per rally.
* **Trade-off:** Both balls move −10% slower.
* **Numerics:** Split delay = first hit only; speed multiplier = 0.9.
* **Synergies:** Windy Zone, Magnet Paddle.
* **Visuals:** Quick flash + sound cue at split moment.
* **Unlock:** Defeat OPP_OCTOPUS once.
* **Notes:** Overwhelms in chaotic arenas.

### ID: CHAOS_SPIN

* **Name:** Chaos Spin
* **Type:** Ball Modifier
* **Rarity:** Legendary
* **Effect:** Adds random spin to ball on every hit.
* **Trade-off:** Ball unpredictability applies to both players.
* **Numerics:** Spin variance ±20°.
* **Synergies:** Windy Zone, Kamaleon.
* **Visuals:** Ball trail shifts color based on spin direction.
* **Unlock:** Defeat two High-Tier (Boss) opponents in a single run.
* **Notes:** High-skill, high-risk.

### ID: FIREBALL

* **Name:** Fireball
* **Type:** Ball Modifier
* **Rarity:** Rare
* **Effect:** First hit after each serve increases ball speed by +40%.
* **Trade-off:** Ball loses control (−15% curve resistance).
* **Numerics:** Speed boost = 1.4; curve resistance = −15%.
* **Synergies:** Turbo Boost, Deflective Core.
* **Visuals:** Fiery trail for boosted shot.
* **Unlock:** Defeat OPP_JUGGLER once.
* **Notes:** Aggression-focused.

### ID: GRAVITY_WELL

* **Name:** Gravity Well
* **Type:** Ball Modifier
* **Rarity:** Uncommon
* **Effect:** Ball is pulled toward the center of the arena by mild gravity.
* **Trade-off:** Your paddle speed reduced by 5%.
* **Numerics:** Gravity pull strength = 5% of ball speed; player speed multiplier = 0.95.
* **Synergies:** Iron Wall, Heavy Gravity.
* **Visuals:** Subtle curved trajectory toward center.
* **Unlock:** Default pool.
* **Notes:** Encourages central control.

### ID: ICE_CORE

* **Name:** Ice Core
* **Type:** Ball Modifier
* **Rarity:** Rare
* **Effect:** Ball briefly freezes opponent paddle (0.5s) on hit.
* **Trade-off:** Ball speed −10%.
* **Numerics:** Freeze duration = 0.5s; speed multiplier = 0.9.
* **Synergies:** Turbo Boost, Sticky Floor.
* **Visuals:** Blue icy glow and frost trail.
* **Unlock:** Default pool.
* **Notes:** Great for disruption, weaker in long rallies.

### ID: SHOCK_ORB
- **Name:** Shock Orb
- **Type:** Ball Modifier
- **Rarity:** Rare
- **Effect:** For 2s after hit, opponent paddle is slightly pulled toward ball trajectory.
- **Trade-off:** Ball rebounds −10% slower after your own hits.
- **Numerics:** Magnetic pull strength = mild; pull duration = 2s; rebound speed multiplier = 0.9.
- **Synergies:** Magnet Paddle, Slow Time.
- **Visuals:** Electric arc effect with slight particle drift toward ball.
- **Unlock:** Default pool.
- **Notes:** Disrupts opponent positioning.

### ID: CAMO_SPHERE

* **Name:** Camo Sphere
* **Type:** Ball Modifier
* **Rarity:** Uncommon
* **Effect:** Ball becomes semi-transparent for 1.5s after each paddle hit.
* **Trade-off:** Ball speed increases by 5% during invisibility.
* **Numerics:** Invisibility duration = 1.5s; speed multiplier = 1.05.
* **Synergies:** Kamaleon, Blackout.
* **Visuals:** Ball fades to 40% opacity.
* **Unlock:** Default pool.
* **Notes:** Disrupts tracking in visual-heavy arenas.


## Arena Boons / Curses

Note on scope: Unless otherwise specified, Arena Boons and Arena Curses apply to the next match only.

### ID: STICKY_FLOOR

* **Name:** Sticky Floor
* **Type:** Arena Boon
* **Rarity:** Rare
* **Effect:** Opponent paddle speed reduced by 25% in next match.
* **Trade-off:** Your paddle speed reduced by 10% too.
* **Numerics:** Opponent speed multiplier = 0.75; player speed multiplier = 0.9.
* **Synergies:** Iron Wall, Boom Ball.
* **Visuals:** Sticky goo on floor edges in arena.
* **Unlock:** Default pool.
* **Notes:** Doubles down on slow-control builds.

### ID: TONGUE_LASH

- **Name:** Tongue Lash
- **Type:** Arena Boon
- **Rarity:** Legendary
- **Duration:** Next match only
- **Effect:** When the ball is within 0.5 paddle lengths of your back wall (about to concede a point), you may instantly “catch” it and relaunch it into play from your paddle’s current position. The relaunch can alter the ball’s angle by up to ±20° toward the opponent’s side.
- **Trade-off:** 30s cooldown between uses (player). AI opponents may only use this ability once per match.
- **Numerics:** Catch trigger distance = 0.5 paddle lengths; cooldown = 30s (player); AI limit = 1 use per match; relaunch speed = 90% of ball’s incoming speed; angle adjustment range = ±20°.
- **Synergies:** Slow Time, Magnet Paddle.
- **Visuals:** Paddle whips out a translucent “tongue” to snag the ball and flick it off at an angled trajectory.
- **Unlock:** Defeat OPP_KAMALEON once.
- **Notes:** A clutch save tool that turns lost points into counterattacks — best used for surprise offense as much as defense.

### ID: WIND_BLESSING

* **Name:** Wind Blessing
* **Type:** Arena Boon
* **Rarity:** Uncommon
* **Effect:** Wind in next match always favors your side by +10°.
* **Trade-off:** Ball speed increases by 5% for both players.
* **Numerics:** Wind bias = 10°; speed multiplier = 1.05.
* **Synergies:** Windy Zone, Magnet Paddle.
* **Visuals:** Flowing particle gusts toward your side.
* **Unlock:** Default pool.
* **Notes:** Small, predictable bias in windy arenas.

### ID: GLASS_PADDLE

* **Name:** Glass Paddle
* **Type:** Curse
* **Rarity:** Uncommon
* **Effect:** Paddle length +15%.
* **Trade-off:** Paddle breaks (−50% length) for 3s after each ball contact.
* **Numerics:** Length multiplier = 1.15; broken length multiplier = 0.5; broken duration = 3s.
* **Synergies:** Turbo Boost (to recover faster), Magnet Paddle (to reduce risky hits).
* **Visuals:** Paddle develops visible cracks after each hit.
* **Unlock:** Default pool.
* **Notes:** High-risk, timing-focused play.

### ID: BLOOD_PRICE

* **Name:** Blood Price
* **Type:** Curse
* **Rarity:** Rare
* **Effect:** Gain +20% paddle speed.
* **Trade-off:** Lose 1 point every 25s of rally time.
* **Numerics:** Speed multiplier = 1.2; time penalty = −1 point per 25s continuous rally.
* **Synergies:** Fireball, Chaos Spin.
* **Visuals:** Red glow intensifies as penalty approaches.
* **Unlock:** Defeat any Mid-Tier (Boss) opponent.
* **Notes:** Forces aggressive, point-ending plays.

### ID: HEAVY_GRAVITY

* **Name:** Heavy Gravity
* **Type:** Curse
* **Rarity:** Rare
* **Effect:** Ball drops faster (gravity +50%).
* **Trade-off:** Paddle speed −15%.
* **Numerics:** Gravity multiplier = 1.5; speed multiplier = 0.85.
* **Synergies:** Iron Wall, Sticky Floor.
* **Visuals:** Ball trail arcs sharply down.
* **Unlock:** Default pool.
* **Notes:** Alters ball path control; favors ground defense.

### ID: MIRROR_CURSE

* **Name:** Mirror Curse
* **Type:** Curse
* **Rarity:** Legendary
* **Effect:** Opponent gains a copy of your last-picked upgrade.
* **Trade-off:** None beyond effect.
* **Numerics:** Instant copy; applies next match only.
* **Synergies:** High synergy with build-disrupting strategies.
* **Visuals:** Opponent paddle flickers with your paddle's texture.
* **Unlock:** Defeat OPP_MIRROR twice in separate runs.
* **Notes:** Creates late-run tension when overpowered upgrades are chosen.

### ID: GRAVITY_SHIFT

* **Name:** Gravity Shift
* **Type:** Arena Boon
* **Rarity:** Rare
* **Effect:** Ball gravity reduced by 30% in next match.
* **Trade-off:** Opponent paddle speed +5%.
* **Numerics:** Gravity multiplier = 0.7; opponent speed multiplier = 1.05.
* **Synergies:** Zero-G, Split Ball.
* **Visuals:** Floating particles in arena.
* **Unlock:** Default pool.
* **Notes:** Favors long-air rallies.

### ID: ARENA_MIRAGE
- **Name:** Arena Mirage
- **Type:** Arena Curse
- **Rarity:** Uncommon
- **Effect:** Creates occasional fake ball projections. Hitting a fake ball causes paddle to be stuck for 0.3s.
- **Trade-off:** Your paddle length −5%.
- **Numerics:** Illusion frequency = every 6–8s; fake lasts 0.8s; paddle recovery = 0.3s.
- **Synergies:** Camo Sphere, Kamaleon.
- **Visuals:** Transparent ghost-balls with brief hitstop effect.
- **Unlock:** Default pool.
- **Notes:** Visual bait that punishes mistimed swings.

### ID: OVERCLOCK

* **Name:** Overclock
* **Type:** Arena Boon
* **Rarity:** Uncommon
* **Effect:** Your paddle speed +15% in next match.
* **Trade-off:** Opponent ball speed +10%.
* **Numerics:** Paddle speed multiplier = 1.15; opponent ball speed multiplier = 1.1.
* **Synergies:** Fireball, Turbo Boost.
* **Visuals:** Paddle with motion blur glow.
* **Unlock:** Default pool.
* **Notes:** Aggressive momentum tool.

### ID: FOG_FIELD

* **Name:** Fog Field
* **Type:** Arena Curse
* **Rarity:** Rare
* **Effect:** Adds semi-transparent fog overlay to arena.
* **Trade-off:** Both paddles move −5% speed.
* **Numerics:** Visibility reduction = \~30%; paddle speed multiplier = 0.95.
* **Synergies:** Blackout, Camo Sphere.
* **Visuals:** Animated fog drifting.
* **Unlock:** Default pool.
* **Notes:** Reduces readability for both players.

### ID: LUCKY_BOUNCE
- **Name:** Lucky Bounce
- **Type:** Arena Boon
- **Rarity:** Rare
- **Effect:** In the next match, the first paddle hit each rally redirects the ball toward the opponent’s corner with +10° angle bias.
- **Trade-off:** Your paddle rebound speed −5%.
- **Numerics:** Angle shift = +10°; rebound speed multiplier = 0.95.
- **Synergies:** Magnet Paddle, Chaos Spin.
- **Visuals:** Spark flash on first paddle contact each rally.
- **Unlock:** Default pool.
- **Notes:** Aggressive opener tool.
