import storage from './storage.js';

const INIT_STATE = {
  target: 500,
  value: 57,
}

const services = () => {
  const STATE = {
    target: INIT_STATE.target,
    value: INIT_STATE.value,
  }

  const init = () => {
    const isInit = storage.getItem('isInit');

    if (!isInit) {
      storage.setItem('isInit', true);
      storage.setItem('target', INIT_STATE.target);
      storage.setItem('value', INIT_STATE.value);
    } else {
      STATE.target = storage.getItem('target');
      STATE.value = storage.getItem('value');
    }
  }

  init();

  const saveToStorage = () => {
  }

  const giveNow = () => {
  }

  return {
    saveToStorage,
    giveNow
  }
}

export default services();
