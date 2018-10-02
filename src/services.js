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
    storage.setItem('target', STATE.target);
    storage.setItem('value', STATE.value);

    return true;
  }

  const getStorage = () => {
    return {
      target: storage.getItem('target'),
      value: storage.getItem('value')
    }
  }

  const setValue = (value) => {
    STATE.value = +STATE.value + value;
    if(STATE.value >  INIT_STATE.target) {
        STATE.value = STATE.target;
    }

    storage.setItem('value', +STATE.value);
  }

  return {
    saveToStorage,
    getStorage,
    setValue
  }
}

export default services();
