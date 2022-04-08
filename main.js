var $addEntry = document.querySelector('.button-1');
var $popup = document.querySelector('.popup');
var $overlay = document.querySelector('.overlay');

$addEntry.addEventListener('click', openPopup);

function openPopup(event) {
  $popup.className = 'popup margin-popup';
  $overlay.className = 'overlay';
}
