/* global data */
/* exported data */
var $imageURL = document.querySelector('input[name="imageUpload"]');
var $textArea = document.querySelector('textarea[name="notes"]');
var $title = document.querySelector('input[name="title"]');
var $img = document.querySelector('img');

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
});

function renderEntry(entry) {
  var divRow = document.createElement('div');
  var rowAttribute = divRow.setAttribute('class', 'row');
  var divColHalf = document.createElement('div');
  var ColHalfAttribute = divColHalf.setAttribute('class', 'column-half');
  divRow.appendChild(divColHalf);
  var entryImg = document.createElement('img');
  var entryImgAttribute = entryImg.setAttribute('src', entry.imageURL);
  divColHalf.appendChild(entryImg);
  var secondDivColHalf = document.createElement('div');
  var secondColHalfAttribute = secondDivColHalf.setAttribute('class', 'column-half');
  var entryH2 = document.createElement('h2');
  var h2Text = document.createTextNode(entry.title);
  var note = document.createElement('p');
  var noteText = document.createTextNode(entry.textarea);
  secondDivColHalf.appendChild(entryH2);
  secondDivColHalf.appendChild(noteText);
  divRow.appendChild(secondDivColHalf);
  return divRow;
}
