
import menu from '../src/menu';
import home from '../src/home';
import contact from '../src/contact'


home();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact')
const tabContents = document.querySelector("#content");

console.log(menuBtn);

const clearContent = () => {
 tabContents.innerHTML = '';
}


homeBtn.addEventListener('click', () => {
    clearContent();
   
    home()
   
   })


menuBtn.addEventListener('click', () => {
   clearContent();
   menu();
})

contactBtn.addEventListener('click', () => {
    clearContent();
    contact();

})





