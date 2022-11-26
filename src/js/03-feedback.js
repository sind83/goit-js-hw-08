import * as storage from './storage';
import throttle from 'lodash.throttle';
import player from '@vimeo/player';

const form = document.querySelector('form.feedback-form');
const mail = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');
const sendBtn = form.querySelector('button[type="submit"]');

const KEY = "feedback-form-state";

// console.log(mail.value, message.value);

window.addEventListener("load", () => {
    const formData = storage.load(KEY);
    // console.log(formData.mail, ' :', formData.message);
    try {
        mail.value = formData.mail;
        message.value = formData.message;
    } catch (error) { }

});

form.addEventListener('input', throttle(() => {
    storage.save(KEY, { mail: mail.value, message: message.value });
}, 500)
);

sendBtn.addEventListener('click', (event) => {
    console.log();
    event.preventDefault();
    if ((mail.value == '') || (message.value == ''))
    {
        if (mail.value == '') {
            //console.log("Uzupełnij dane");
            alert("Uzupełnij dane emali");
        }
        if (message.value == '') {
            //console.log("Uzupełnij dane");
            alert("Uzupełnij tekst wiadomości");
        }
     
    }
    else {
        const formData = storage.load(KEY);
        console.log(formData.mail, ' : ', formData.message);
        mail.value = "";
        message.value = "";
        storage.remove(KEY);
    }
});