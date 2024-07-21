let devider = document.getElementById('devider');
let sec_1 = document.getElementById('sec-1');
let sec_2 = document.getElementById('sec-2');

let screen_width = window.innerWidth;

let current_pos_x = 0;

document.addEventListener('drag', (ev) => {
    current_pos_x = ev.x
})

devider.addEventListener('dragend', (ev) => {
    console.log("ev.x");
  
    sec_1.style.width =   ev.x + 'px';
    sec_2.style.width =  screen_width - (ev.x + 28) + 'px';
});