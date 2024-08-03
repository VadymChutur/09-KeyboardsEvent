// document.querySelector('#test').onkeypress = () => {
//   console.log('log');
//   return false;
// };

// const keyEvent = document.querySelector('#test');

// keyEvent.addEventListener('keydown', (event) => {
//   event.preventDefault();
//   let value = 0;
//   console.log(event.keyCode);
//   if (event.keyCode < 48 || event.keyCode > 57) {
//     console.log('Not a number');
//   } else {
//     value += event.key;
//   }
// });
let left = 0;

// document.onkeypress = (event) => {
//   console.log(event.key);
//   const sqRef = document.querySelector('.sq');
//   if (event.keyCode === 100) {
//     left += 10;
//     sqRef.style.marginLeft = left + 'px';
//   } else if (event.keyCode === 97) {
//     left -= 10;
//     sqRef.style.marginLeft = left + 'px';
//   }
// };

document.onkeydown = (event) => {
  console.log(event);
  const sqRef = document.querySelector('.sq');
  if (event.keyCode === 39) {
    left += 10;
    sqRef.style.marginLeft = left + 'px';
  } else if (event.keyCode === 37) {
    left -= 10;
    sqRef.style.marginLeft = left + 'px';
  }
};

// document.onkeydown = () => {
//   console.log('key down');
// };

// document.onkeyup = () => {
//   console.log('key up');
// };

// document.onkeypress = () => {
//   console.log('key press');
// };
