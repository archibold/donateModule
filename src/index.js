import style from './index.scss';
import services from './services.js';

window.onload = () => {
  changeProgressBar();
}

window.onGiveNow = (e) => {
  const input = e.target.querySelector('input');

  services.setValue(+input.value);
  changeProgressBar();
  showNotification('thank-you-notification');
  e.preventDefault();
}

window.onSaveToStorage = (e) => {
  services.saveToStorage();
  showNotification('save-notification');
}

window.onTellYourFriends = () => {
  const mailToLink = "mailto:?subject=New Donate module &body=Check this new donate module";
  window.location.href = mailToLink;
}

window.onShowInfo = () => {
  showNotification('answer-notification');
}

const changeProgressBar = () => {
  const elem = document.getElementById('myBar');
  const stillNeed = document.getElementById('stillNeed');
  var { target, value } = services.getState();

  elem.style.width = (+value/+target) * 100 + '%';
  stillNeed.innerHTML = +target - (+value);
}

const showNotification = (elementId) => {
  const elem = document.getElementById(elementId);
  elem.style.cssText = "display:block";
   setTimeout(() => {
    elem.style.cssText = "display:none";
  }, 2500);
}
