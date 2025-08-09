You are an editor-agent. Apply the following correction to the recent /docs/design structure:

1. If /docs/design/ENEMY_CATALOG.md exists:
   - Append its entire content to the end of /docs/design/OPPONENTS.md.
   - Prepend the appended section with a second-level heading: 
     ## Opponent Catalog
     and ensure each enemy entry is preserved exactly.
   - Remove /docs/design/ENEMY_CATALOG.md from the repo after merging.

2. At the top of /docs/design/OPPONENTS.md, directly under the existing "## Purpose" section, add a new section:
   ## Philosophy & Design Rules
   - Every opponent is a paddle with a unique ability that changes rally dynamics.
   - Opponents should have memorable names, themed abilities, and distinct personalities.
   - Beating a major opponent unlocks new, more powerful card types for the upgrade pool.

3. Update any links in /docs/README.md or other /docs/design files that pointed to ENEMY_CATALOG.md so they now point to OPPONENTS.md.

4. Create a single Git commit with the message:
docs: merge ENEMY_CATALOG.md into OPPONENTS.md and add opponent design rules

Execute now.
