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
var $form = document.querySelector('form');
var $li = document.querySelector('.entry-item');

if (data.view === 'hidden') {
  $entriesDisplay.className = 'entries-list-container';
  $entryForm.className = 'hidden';
} else {
  $entriesDisplay.className = 'hidden';
  $entryForm.className = 'entry-form';
}

$entriesNav.addEventListener('click', function (event) {
  data.editing = null;
  $entriesDisplay.className = 'entries-list-container';
  $entryForm.className = 'hidden';
  data.view = 'hidden';
});

$new.addEventListener('click', function (event) {
  $form.reset();
  data.editing = null;
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
  if (data.editing != null) {
    console.log('an entry is being edited');
    for (var x = 0; x < data.entries.length; x++) {
      if (data.editing.entryId === data.entries[x].entryId) {
        console.log('replace/edit already existing dom tree');
        data.entries[x] = inputVals;
        var editedEntry = data.entries[x];
        var $previousEntryGallery = document.querySelectorAll('div[data-entry-id]');
        var $previousEntry = $previousEntryGallery[x];
        console.log($previousEntryGallery);
        console.log($previousEntry);
        $previousEntry.replaceWith(renderEntry(editedEntry));
        // $previousEntry.replaceWith(editedEntry);
      }
    }
  } else {
    console.log('a new entry is being made');
    data.entries.unshift(inputVals);
    inputVals.entryId = data.nextEntryId;
    data.nextEntryId++;
  }
  $form.reset();
});

function renderEntry(entry) {
  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  divRow.setAttribute('data-entry-id', entry.entryId);
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
  editIcon.setAttribute('data-entry-id', entry.entryId);
  entryH2.appendChild(editIcon);
  var note = document.createElement('p');
  var noteText = document.createTextNode(entry.textarea);
  note.appendChild(noteText);
  secondDivColHalf.appendChild(entryH2);
  secondDivColHalf.appendChild(note);
  divRow.appendChild(secondDivColHalf);
  return divRow;
}

function createEntryGallery() {
  for (var i = 0; i < data.entries.length; i++) {
    var viewEntry = renderEntry(data.entries[i]);
    $li.appendChild(viewEntry);
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
  createEntryGallery();
  $li.addEventListener('click', function (event) {
    if (event.target && event.target.matches('i')) {
      $entriesDisplay.className = 'hidden';
      $entryForm.className = 'entry-form';
      data.view = 'entry-form';
      var editingIndex = event.target.getAttribute('data-entry-id');
      for (var j = 0; j < data.entries.length; j++) {
        if (data.entries[j].entryId == editingIndex) {
          $imageURL.value = data.entries[j].imageURL;
          $img.setAttribute('src', $imageURL.value);
          $title.value = data.entries[j].title;
          $textArea.value = data.entries[j].textarea;
          data.editing = data.entries[j];
        }
      }
    }
  });
});
