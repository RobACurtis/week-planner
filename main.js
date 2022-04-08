var $addEntry = document.querySelector('.button-1');
var $popup = document.querySelector('.popup');
var $overlay = document.querySelector('.overlay');
var $popup1 = document.querySelector('.container-popup');

$addEntry.addEventListener('click', openPopup);

function openPopup(event) {
  $popup.className = 'popup margin-popup z-index';
  $overlay.className = 'overlay-on';
  $popup1.className = 'container-popup z-index';
}
