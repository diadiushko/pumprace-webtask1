import Modal from './modal.js';
import { printer } from './printer.js';

//Modal
const introBtn = document.querySelector('.intro-button');

introBtn.addEventListener('click', () => {
    const modal = new Modal('body');
    modal.createModal();
})

//Pumpkins
const pumpkinTexts = document.querySelectorAll('pre');
const pumpkins = document.querySelectorAll('.pump-img');

const strings = [`after asking a few dozens of your\nfriends, you will find out, that pumpkin\nregatta is the most impressive sport\nyou would ever see`, `hundreds and hundreds of farmers\nin entire world growing up giant pumpkins,\nso they could carry the owner to the\nvery final`, `there is no way to get bored on such\nan event, the piece of competitive moment\nis always in air. so what do you waiting for?`]

for (const pump of pumpkins) {
    pump.addEventListener('click', (event) => {
        const element = event.target;
        if (element.classList.contains('activated')) return;

        element.classList.add('activated');
        const index = element.dataset.pump;
        printer(pumpkinTexts[index], strings[index]);
    })
}



