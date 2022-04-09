
var $addEntry = document.querySelector('.button-1');
var $popup = document.querySelector('.popup');
var $overlay = document.querySelector('.overlay');
var $popup1 = document.querySelector('.container-popup');
var $form = document.querySelector('form');
var $day = document.querySelector('#day-of-week');
var $time = document.querySelector('#time');
var $description = document.querySelector('#description');
var $tableTime = document.querySelector('.thyme');
var $tableDescription = document.querySelector('.descriptionTable');
var $buttonDays = document.querySelector('.buttonDiv');
var $sunday = document.querySelector('.sunday');
var $phDay = document.querySelector('.placeholder-day');

$addEntry.addEventListener('click', openPopup);
$form.addEventListener('submit', submitForm);
$buttonDays.addEventListener('click', changeDay);

function openPopup(event) {
  $popup.className = 'popup margin-popup z-index';
  $overlay.className = 'overlay-on';
  $popup1.className = 'container-popup z-index';
}

function submitForm(event) {
  event.preventDefault();
  var storage = {};
  $popup.className = 'popup hidden';
  $overlay.className = 'overlay hidden';
  storage.day = $day.value;
  storage.time = $time.value;
  storage.description = $description.value;
  storage.id = data.nextEntryId;
  data.nextEntryId++;
  data.entries.push(storage);
  entries(storage);
}

function changeDay(event) {
  console.log(event.target);
  if (event.target && event.target.matches('button')) {
    $phDay.textContent = event.target.textContent;
  }
}

function entries(obj) {
  $tableTime.textContent = obj.time;
  $tableDescription.textContent = obj.description;

}

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('Entry Data');
if (previousDataJSON !== null) {
  var previousData = JSON.parse(previousDataJSON);
  data = previousData;
}

function beforeCall(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('Entry Data', dataJSON);
}

window.addEventListener('beforeunload', beforeCall);
