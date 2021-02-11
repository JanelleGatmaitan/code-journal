/* global data */
/* exported data */
var $imageURL = document.querySelector('input[name="imageUpload"]');
var $textArea = document.querySelector('textarea[name="notes"]');
var $title = document.querySelector('input[name="title"]');
var $img = document.querySelector('img');
var $entriesDisplay = document.querySelector('.entries-list-container');
var $entriesNav = document.querySelector('h4.nav-item');
var $new = document.querySelector('.new-anchor');
var $entryForm = document.querySelector('div.entry-form');

if (data.view === 'hidden') {
  $entriesDisplay.className = 'entries-list-container';
  $entryForm.className = 'hidden';
} else {
  $entriesDisplay.className = 'hidden';
  $entryForm.className = 'entry-form';
}

$entriesNav.addEventListener('click', function (event) {
  $entriesDisplay.className = 'entries-list-container';
  $entryForm.className = 'hidden';
  data.view = 'hidden';
});

$new.addEventListener('click', function (event) {
  $entriesDisplay.className = 'hidden';
  $entryForm.className = 'entry-form';
  data.view = 'entry-form';
});

$imageURL.addEventListener('input', function (event) {
  $img.setAttribute('src', $imageURL.value);
});

$entryForm.addEventListener('submit', function (event) {
  $entriesDisplay.className = 'entries-list-container';
  $entryForm.className = 'hidden';
  data.view = 'hidden';
  var inputVals = {};
  inputVals.imageURL = $imageURL.value;
  inputVals.title = $title.value;
  inputVals.textarea = $textArea.value;
  inputVals.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputVals);
  $entryForm.reset();
});

function renderEntry(entry) {
  event.preventDefault();
  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  var divColHalf = document.createElement('div');
  divColHalf.setAttribute('class', 'column-half');
  divRow.appendChild(divColHalf);
  var entryImg = document.createElement('img');
  entryImg.setAttribute('src', entry.imageURL);
  divColHalf.appendChild(entryImg);
  var secondDivColHalf = document.createElement('div');
  secondDivColHalf.setAttribute('class', 'column-half');
  var entryH2 = document.createElement('h2');
  var h2Text = document.createTextNode(entry.title);
  entryH2.appendChild(h2Text);
  var editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fas fa-pen');
  entryH2.appendChild(editIcon);
  var note = document.createElement('p');
  var noteText = document.createTextNode(entry.textarea);
  note.appendChild(noteText);
  secondDivColHalf.appendChild(entryH2);
  secondDivColHalf.appendChild(note);
  divRow.appendChild(secondDivColHalf);
  return divRow;
}

var $li = document.querySelector('.entry-item');

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var viewEntry = renderEntry(data.entries[i]);
    $li.appendChild(viewEntry);
  }
  var $editIcon = document.querySelector('i');
  console.log('expected: <i class="fas fa-pen">, got: ' + $editIcon);
  $editIcon.addEventListener('click', function (event) {
    $entriesDisplay.className = 'hidden';
    $entryForm.className = 'entry-form';
    data.view = 'entry-form';
  });
});

// $li.addEventListener('click');

// window.addEventListener('DOMContentLoaded', function (event) {
//   var $editIcon = document.querySelector('i');
//   console.log('expect: <i class="fas fa-pen">' + ' got: ' + $editIcon);
// });
