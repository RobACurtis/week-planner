
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
var $td = document.querySelectorAll('td');

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
  for (var i = 0; i < $td.length; i++) {
    $tableTime.textContent = obj.time;
    $tableDescription.textContent = obj.description;
  }
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

function domLoad(event) {
  for (var i = 0; i < data.entries.length; i++) {
    theUL.prepend(data.entries[i]);
  }
}

window.addEventListener('DOMContentLoaded', domLoad);

function createTable(obj) {
  var tBody = document.createElement('tbody');
  tBody.className = 'time-table';
  var tRow = document.createElement('tr');
  tBody.appendChild(tRow);
  var tDataTime = document.createElement('td');
  tDataTime.className = 'thyme';
  tRow.appendChild(tDataTime);
  var tDataDes = document.createElement('td');
  tDataDes.className = 'descriptionTable';
  tRow.appendChild(tDataDes);
  tBody.appendChild(tRow);
  tBody.appendChild(tRow);
  tBody.appendChild(tRow);
}
