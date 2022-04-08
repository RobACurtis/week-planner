
var $addEntry = document.querySelector('.button-1');
var $popup = document.querySelector('.popup');
var $overlay = document.querySelector('.overlay');
var $popup1 = document.querySelector('.container-popup');
var $form = document.querySelector('form');

$addEntry.addEventListener('click', openPopup);
$form.addEventListener('submit', submitForm);

function openPopup(event) {
  $popup.className = 'popup margin-popup z-index';
  $overlay.className = 'overlay-on';
  $popup1.className = 'container-popup z-index';
}

function submitForm(event) {
  event.preventDefault();
  $popup.className = 'popup hidden';
  $overlay.className = 'overlay hidden';

}
