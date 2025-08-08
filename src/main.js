import { createGame } from './core/game.js';
import { createRenderer } from './core/renderer.js';
import { createKeyboardInput } from './core/input.js';
import { createGameState } from './core/state.js';

// Entry point: wire up the core systems and start the loop
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const state = createGameState({ width: canvas.width, height: canvas.height });
const renderer = createRenderer(ctx, state);
const input = createKeyboardInput(window);
const game = createGame({ state, renderer, input, canvas });

// Start the game loop
game.start();
