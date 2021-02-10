/* global data */
/* exported data */
var $imageURL = document.querySelector('input[name="imageUpload"]');
var $textArea = document.querySelector('textarea[name="notes"]');
var $title = document.querySelector('input[name="title"]');
var $img = document.querySelector('img');
var $entriesDisplay = document.querySelector('.entries-list-container');
console.log($entriesDisplay);

$imageURL.addEventListener('input', function (event) {
  $img.setAttribute('src', $imageURL.value);
});

var $entryForm = document.querySelector('div.entry-form');
$entryForm.addEventListener('submit', function (event) {
  var inputVals = {};
  inputVals.imageURL = $imageURL.value;
  inputVals.title = $title.value;
  inputVals.textarea = $textArea.value;
  inputVals.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputVals);
  $entryForm.reset();
  $entriesDisplay.className = 'hidden';

});

function renderEntry(entry) {
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
});
