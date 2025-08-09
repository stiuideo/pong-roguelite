You are an editor-agent operating in the repository root. Apply the following refactor and scaffolding to the /docs folder. Be precise, idempotent, and conservative—do not invent content where not provided.

GOALS
1) Keep existing code/architecture docs intact.
2) Create a dedicated game-design namespace with clearly scoped files for GPT-5 retrieval.
3) Move/rename a few legacy docs for clarity.
4) Add minimal, self-contained templates that future agents can extend without hallucinating.
5) Update README links and commit.

CONSTRAINTS
- Use small, single-purpose files. Avoid giant omnibus docs.
- Preserve content verbatim when moving/renaming; do not rewrite.
- For templates, include the “AI-DIRECTIVE” comment header exactly as specified.
- Fill the date as today’s date in YYYY-MM-DD.
- Make the changes idempotent: creating folders/files that already exist must be safe.
- After changes, create a single commit with the message provided.

ACTIONS

A) Create folder structure (if missing):
- /docs/design
- /docs/examples
- /docs/playbooks

B) Move/rename existing files (preserve content):
- If /docs/EXAMPLES.md exists, move it to /docs/examples/EXAMPLES.md (do not split automatically).
- If /docs/CHECKLISTS.md exists, move it to /docs/playbooks/CHECKLISTS.md.
- If /docs/EXTENSIONS.md exists, rename it to /docs/MODDING.md.

C) Keep as-is (no changes other than link updates later):
- /docs/ARCHITECTURE.md
- /docs/DECISIONS.md
- /docs/ROADMAP.md
- /docs/README.md
- /docs/README_TLDR.md
- /docs/CONTRIBUTING.md

D) Create new design docs (create if missing; if present, only ensure headers exist—do not delete existing content; append sections that are missing). Insert the exact AI-DIRECTIVE header and section scaffolding below.

Template header (use this exact block at the top of each new/updated file):
<!-- AI-DIRECTIVE: Single source of truth. Keep this file self-contained.
If changing mechanics, update CORE_LOOP.md and CARDS_CATALOG.md references.
Never invent new mechanics not listed here without adding them to GAME_DESIGN_OVERVIEW.md and ROADMAP.md. -->

Then add the front-matter line:
**Status:** Draft | **Owner:** Matheus | **Last updated:** YYYY-MM-DD  
**Depends on:** [GAME_DESIGN_OVERVIEW.md](./GAME_DESIGN_OVERVIEW.md)

Then the sections required per file:

1) /docs/design/GAME_DESIGN_OVERVIEW.md
# GAME DESIGN OVERVIEW
## Purpose
One-page map of the game vision, pillars, win/lose conditions, meta-progression philosophy, and links to detailed design docs.
## Pillars
- Pong Core, Roguelite Spice
- High readabilty, escalating chaos
- Meaningful trade-offs over raw power
## Canon
- Run-based structure with meta-progression (roguelite, not roguelike)
- Every match = arena + opponent + ball modifier
- 3-card draft after matches; cards include trade-offs and cosmetic changes
## Links
- [STORY_LORE.md](./STORY_LORE.md)
- [CORE_LOOP.md](./CORE_LOOP.md)
- [PLAYER_UPGRADES.md](./PLAYER_UPGRADES.md)
- [OPPONENTS.md](./OPPONENTS.md)
- [ARENAS.md](./ARENAS.md)
- [META_HUB.md](./META_HUB.md)
- [CARDS_CATALOG.md](./CARDS_CATALOG.md)
- [ENEMY_CATALOG.md](./ENEMY_CATALOG.md)
- [BALANCE_NOTES.md](./BALANCE_NOTES.md)

2) /docs/design/STORY_LORE.md
# STORY & LORE
## Purpose
Define the setting, tone, and the hidden truth.
## Canon
- You are a paddle in a void-world of paddles; daily Great Pong Championship decides who enters “The Room.”
- Spoiler: The world is a terminal; you are an AI paddle on a Magnavox Odyssey. “The Room” is the TV screen; no one returns because power is cut.
## Spoilers Handling
- Keep spoiler content gated by build flags or late-game reveals; never surface in tutorial copy.

3) /docs/design/CORE_LOOP.md
# CORE GAME LOOP & STRUCTURE
## Purpose
Define a single run, match flow, and progression triggers.
## Canon
- Loop: Lobby → Match(Arena+Opponent+Ball Mod) → Reward (3-card draft) → Next Match → … → Boss/Final → Death or Victory → Meta Hub.
- Permadeath with knowledge retention; certain deaths unlock new dialog lines or card pools.

4) /docs/design/PLAYER_UPGRADES.md
# PLAYER & UPGRADES
## Purpose
Define paddle identity and upgrade systems.
## Canon
- 3-card upgrade draft after matches; each card has a trade-off and a visual change.
- Example trade-offs: “+10% speed, -1 length”; “Magnetize ball to your Y-axis; -10% paddle length.”
## Visual Rules
- Each upgrade must alter the paddle/ball look subtly but clearly.

5) /docs/design/OPPONENTS.md
# OPPONENTS
## Purpose
Catalog opponent archetypes and behaviors.
## Canon
- Named paddles with unique mechanics and personalities.
- Examples: Mirror Paddle (copies your upgrades), Kamaleon (invisible except on hit), Octopus (four mini-paddles).
## Drop Rules
- Beating a new major opponent unlocks stronger card types for future drafts.

6) /docs/design/ARENAS.md
# ARENAS
## Purpose
Define biome-style arenas and environmental effects.
## Canon
- Each match rolls an arena modifier.
- Examples: Windy Zone (wind alters ball trajectory), Party Zone (strobing lights), Pool Zone (waterline at bottom; ball “drowns” and respawns).

7) /docs/design/META_HUB.md
# META-PROGRESSION HUB
## Purpose
Define the post-death space and economy.
## Canon
- Return here after death; spend currency; see newly unlocked card pools; interact with NPC paddles for evolving dialog.

8) /docs/design/CARDS_CATALOG.md
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

9) /docs/design/ENEMY_CATALOG.md
# ENEMY CATALOG
## Purpose
Boss/paddle sheets with exact behaviors and drops.
## Schema
### ID: ENEMY_<ID>
- **Name:** <Name>
- **Ability Kit:** <Moves/Behaviors>
- **Special Rules:** <Mirroring, invisibility, minions, etc.>
- **Arena Affinity:** <Preferred arenas>
- **Unlocks:** <Cards or mechanics unlocked on first defeat>
- **Numerics:** <Speeds, sizes, cooldowns>
- **VO/Flavor:** <Optional>

10) /docs/design/BALANCE_NOTES.md
# BALANCE NOTES
## Purpose
Record tuning passes and parameter changes.
## Format
- Date-stamped entries with reasoning and before/after numbers.

E) Update /docs/README.md to include a “Design Docs” section with links to the new /docs/design files created above. Do not remove existing content; add a new subsection.

F) Create a single Git commit:
Message:
docs: restructure and add design namespace (design/, catalogs, playbooks); move examples and checklists; rename EXTENSIONS->MODDING; add AI directives and templates

VALIDATION
- List the final /docs tree after changes.
- Confirm that moved/renamed files preserved content.
- Confirm all new files contain the AI-DIRECTIVE header and “Last updated” set to today.

Execute now.
