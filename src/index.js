import _ from 'lodash';
import style from './index.scss';
import storage from './storage.js';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
