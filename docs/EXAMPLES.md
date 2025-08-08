# Examples (Templates)

## New Entity Skeleton
```js
// src/entities/exampleEntity.js
export class ExampleEntity {
  constructor(bounds) {
    this.bounds = bounds;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.radius = 10; // or width/height
  }
  update(dt) {
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
  }
}
```

## Renderer Hook
```js
// core/renderer.js
function drawExample(entity) {
  ctx.fillStyle = '#e8e8e8';
  ctx.beginPath();
  ctx.arc(entity.position.x, entity.position.y, entity.radius, 0, Math.PI * 2);
  ctx.fill();
}
// export drawExample in the renderer's return object
```

## Game Orchestration
```js
// core/game.js (within createGame)
import { ExampleEntity } from '../entities/exampleEntity.js';

const example = new ExampleEntity(state.worldBounds);
state.entities.example = example;

function update(dt) {
  // ...existing steps
  example.update(dt);
}
function draw(alpha) {
  // ...existing steps
  renderer.drawExample(example);
}
```

## New Collision Module
```js
// physics/exampleCollisions.js
export function resolveExampleCollisions(entities, bounds) {
  // mutate entities based on overlaps
}
```

These templates demonstrate the intended separation of concerns and insertion points.
