/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $imageURL = document.querySelector('input[name="imageUpload"]');
var $textArea = document.querySelector('textarea[name="notes"]');
var $title = document.querySelector('input[name="title"]');
var $img = document.querySelector('img');
console.log('$img', $img);
console.log('$textArea', $textArea);
console.log('$title', $title);
console.log('$imageURL', $imageURL);
console.log('$entryForm', $entryForm);

$imageURL.addEventListener('input', function (event) {
  console.log('$imageURL.value: ', $imageURL.value);
  $img.setAttribute('src', $imageURL.value);

});

var $entryForm = document.querySelector('div.entry-form');
$entryForm.addEventListener('submit', function (event) {
  var inputVals = {};
  inputVals.imageURL = $imageURL.value;
  inputVals.title = $title.value;
  inputVals.textarea = $textArea.value;
  inputVals.entryNumber = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputVals);
  console.log('inputVals: ', inputVals);
  console.log('data.entries: ', data.entries);
  $imageURL.value = '';
  $title.value = '';
  $textArea.value = '';
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
});

var myStorage = window.localStorage;
var previousDataJSON = myStorage.getItem('create-an-entry');
if (previousDataJSON != null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  myStorage.setItem('create-an-entry', dataJSON);
});
