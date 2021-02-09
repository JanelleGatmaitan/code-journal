/* global data */
/* exported data */
var $photoInput = document.querySelector('input[name="imageUpload"]');
var $photoInputValue = $photoInput.value;
console.log('$photoInput: ', $photoInput);
var $image = document.querySelector('img');
console.log('$image: ', $image);

$photoInput.addEventListener('input', function (event) {
  console.log('value of imageURL: ', $photoInputValue);
  $image.setAttribute('src', $photoInputValue);
});
