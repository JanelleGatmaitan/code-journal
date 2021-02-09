/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// Listen for 'input' events on the photoUrl input to update the src attribute
// of the photo preview when the input value changes.
var $imageURL = document.querySelector('input[name="imageUpload"]');
var $textArea = document.querySelector('textarea[name="notes"]');
var $title = document.querySelector('input[name="title"]');
var $img = document.querySelector('img');
var $entryForm = document.querySelector('div.container');
console.log('$img', $img);
console.log('$textArea', $textArea);
console.log('$title', $title);
console.log('$imageURL', $imageURL);
console.log('$entryForm', $entryForm);

$imageURL.addEventListener('input', function (event) {
  console.log('$imageURL.value: ', $imageURL.value);
  $img.setAttribute('src', $imageURL.value);

});

// Listen for 'submit' events on the journal entry form
// $entryForm.addEventListener('submit', function (event) {
//   var inputVals = {};
// });

function submitForm(event) {
  var inputVals = {};
  inputVals.imageURL = $imageURL.value;
  inputVals.title = $title.value;
  inputVals.textarea = $textArea.value;
  inputVals.entryNumber = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputVals);
  console.log(inputVals);
  console.log(data.entries);
}
