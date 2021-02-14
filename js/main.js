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
  var inputVals = {};
  inputVals.imageURL = $imageURL.value;
  inputVals.title = $title.value;
  inputVals.textarea = $textArea.value;
  inputVals.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputVals);
  renderEntry(data.entries[0]);
  $entriesDisplay.className = 'entries-list-container';
  $entryForm.className = 'hidden';
  data.view = 'hidden';
  $form.reset();
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

var $li = document.querySelector('.entry-item');

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var viewEntry = renderEntry(data.entries[i]);
    $li.appendChild(viewEntry);
  }

  $li.addEventListener('click', function (event) {
    if (event.target && event.target.matches('i')) {
      $entriesDisplay.className = 'hidden';
      $entryForm.className = 'entry-form';
      data.view = 'entry-form';
      var index = event.target.getAttribute('data-entry-id');
      for (j = 0; j < data.entries.length; j++) {
        if (data.entries[j].entryId == index) {
          data.editing = data.entries[j];
          $imageURL.value = data.entries[j].imageURL;
          $img.setAttribute('src', $imageURL.value);
          $title.value = data.entries[j].title;
          $textArea.value = data.entries[j].textarea;
          console.log('yeet');
        }
      }

      // console.log('typeof index: ', typeof index);
      // console.log('parseFloat index: ', parseFloat(index));
      // data.editing = data.entries[index];
      // console.log('index: ', index);
      // console.log('data.editing: ', data.editing);
      // console.log('data.entries[index - 1]', data.entries[index - 1]);
    }
  });

  //   function listRenderedEntries() {
  //     // for (var x = 0; x < data.entries.length; x++) {
  //     var $renderedEntries = document.querySelectorAll('i[data-entry-id]');
  //     console.log('$renderedEntries', $renderedEntries);
  //     console.log('$entry[0]: ', $renderedEntries[0]);
  //     console.log('$entry[0].getAttribute("data-entry-id"): ', $renderedEntries[0].getAttribute('data-entry-id'));
  //     // }
  //   }

  //   listRenderedEntries();

});
