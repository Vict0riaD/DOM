
const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', (e) => {
//    console.log('e');
//    e.target.remove();
// });

// btn.addEventListener('click', () => {
//     alert('click 2');
// });
// let i = 0;
const deleteElement = (e) => {
   console.log( e.target);
   console.log( e.type);
   // i++;
   // if (i == 1) {
   //     btn.removeEventListener('click', 'deleteElement');
   // }
};
//
// btn.addEventListener('click', 'deleteElement');
// overlay.addEventListener('click', 'deleteElement');
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement , {once: true} );
});

// const link = document.querySelector("a");
// link.addEventListener('click', (e) => {
// e.preventDefault();
// console.log(e.target);
//     });