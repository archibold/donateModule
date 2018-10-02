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
  const isInit = storage.getItem('isInit');

  if (!isInit) {
    storage.setItem('target', INIT_STATE.target);
    storage.setItem('value', INIT_STATE.value);
    storage.setItem('isInit', true);
  } else {
    STATE.target = storage.getItem('target');
    STATE.value = storage.getItem('value');
  }

  const getState = () => {
    return {
      target: STATE.target,
      value: STATE.value
    }
  }

  const setValue = (value) => {
    STATE.value = +STATE.value + value;
    if(STATE.value >  INIT_STATE.target) {
        STATE.value = STATE.target;
    }
  }

  const saveToStorage = () => {
    storage.setItem('target', STATE.target);
    storage.setItem('value', STATE.value);

    return true;
  }

  return {
    saveToStorage,
    getState,
    setValue
  }
}

export default services();
