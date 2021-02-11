/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var classNames = {};

var previousDataJSON = localStorage.getItem('create-an-entry');
if (previousDataJSON != null) {
  data = JSON.parse(previousDataJSON);
}

var previousclassNamesJSON = localStorage.getItem('classNames');
if (previousclassNamesJSON != null) {
  classNames = JSON.parse(previousclassNamesJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('create-an-entry', dataJSON);
  // These two lines, update the classNames in local storage
  var classNamesJSON = JSON.stringify(classNames);
  localStorage.setItem('classNames', classNamesJSON);
});
