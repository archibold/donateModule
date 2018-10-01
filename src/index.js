import style from './index.scss';
import services from './services.js';

window.onGiveNow = (e) => {
  const [input] = e.target.children
  services.giveNow(input.value);
  e.preventDefault();
}

window.onSaveToStorage = (e) => {
  services.saveToStorage();
}

window.onTellYourFriends = () => {
  const mailToLink = "mailto:?subject=New Donate module &body=Check this new donate module";
  window.location.href = mailToLink;
}

window.onShowInfo = () => {

}
