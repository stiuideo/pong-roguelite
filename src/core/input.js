/** Keyboard input system for player control. */
export function createKeyboardInput(target) {
  const state = {
    up: false,
    down: false,
  };

  function onKeyDown(e) {
    if (e.repeat) return;
    if (e.code === 'ArrowUp' || e.code === 'KeyW') state.up = true;
    if (e.code === 'ArrowDown' || e.code === 'KeyS') state.down = true;
  }

  function onKeyUp(e) {
    if (e.code === 'ArrowUp' || e.code === 'KeyW') state.up = false;
    if (e.code === 'ArrowDown' || e.code === 'KeyS') state.down = false;
  }

  target.addEventListener('keydown', onKeyDown);
  target.addEventListener('keyup', onKeyUp);

  return {
    get up() {
      return state.up;
    },
    get down() {
      return state.down;
    },
    dispose() {
      target.removeEventListener('keydown', onKeyDown);
      target.removeEventListener('keyup', onKeyUp);
    },
  };
}
