var $addEntry = document.querySelector('.button-1');
var $popup = document.querySelector('.popup');

$addEntry.addEventListener('click', openPopup);

function openPopup(event) {
  $popup.className = 'popup margin-popup';
}
