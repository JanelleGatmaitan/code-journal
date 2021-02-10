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
