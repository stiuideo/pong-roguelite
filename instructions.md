Write a modular, scalable implementation of a classic Pong game using only vanilla JavaScript, HTML, and CSS.



But this isn't just Pong. Treat this as the foundation for a much larger roguelike Pong game, with AI opponents, powers, level progression, and card-based upgrades like in Hades or Vampire Survivors.



So:

- Structure your code using ES6 modules, splitting logic into clearly defined files: input, rendering, game loop, physics, entities (ball, paddle), state management, etc.

- Use OOP or well-organized composition patterns to represent entities, with clear lifecycle methods (e.g., update, draw, onCollision).

- The AI paddle should be separated as its own module/class, allowing for future difficulty scaling and behavioral extensions.

- Keep the main game loop abstract and clean, so new game modes or features (power-ups, bosses, phases) can hook into it later.

- All visual rendering should happen via the <canvas> element. Avoid DOM manipulation.

- No frameworks or libraries. Only modern vanilla JS (ES6+).

- Add thoughtful comments and use readable naming conventions.

- Don't over-optimize. It should be easy to read, easy to extend.



Just implement the classic Pong behavior for now (ball bouncing, paddles, player input, simple AI), but architect it like you're building the base of a larger roguelike arcade experience.

