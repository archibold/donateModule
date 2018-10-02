import style from './index.scss';
import services from './services.js';

window.onGiveNow = (e) => {
  const input = e.target.querySelector('input')
  console.log(input.value)
  services.setValue(+input.value);

  const elem = document.getElementById('myBar');
  var { target, value } = services.getStorage();
  elem.style.width = (+value/+target)*100 + '%';

  const stillNeed = document.getElementById('stillNeed');
  stillNeed.innerHTML = +target - (+value);

  e.preventDefault();
}

window.onSaveToStorage = (e) => {
  const elem = document.getElementById('save-notification');
  elem.style.cssText = "display:block";

  services.saveToStorage();

   setTimeout(() => {
    elem.style.cssText = "display:none";
  }, 2500);
}

window.onTellYourFriends = () => {
  const mailToLink = "mailto:?subject=New Donate module &body=Check this new donate module";
  window.location.href = mailToLink;
}

window.onShowInfo = () => {
  const elem = document.getElementById('answer-notification');
  elem.style.cssText = "display:block";
  console.log(elem);
   setTimeout(() => {
    elem.style.cssText = "display:none";
  }, 2500);
}

window.onload = () => {
  const elem = document.getElementById('myBar');
  const stillNeed = document.getElementById('stillNeed');
  var { target, value } = services.getStorage();

  elem.style.width = (+value/+target) * 100 + '%';
  stillNeed.innerHTML = +target - (+value);
}
//
// function move() {
//   var width = target/value;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// }
