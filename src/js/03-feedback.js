//Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:
// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form"); 
const inputEmail = document.querySelector("input[name = email]");
const inputMessage = document.querySelector("textarea[name = message]");

const parsedData = JSON.parse(localStorage.getItem("feedback-form-state"));

const inputFormData = {
    email: "",
    message: ""
};

if (!parsedData) {
  inputEmail.value = "";
  inputMessage.value = "";
} else {

inputMessage.value = parsedData.message;
inputEmail.value = parsedData.email;
}


inputEmail.addEventListener('input', addData);
inputMessage.addEventListener('input', addData);


function addData(event) {
    inputFormData[this.name] = event.target.value;
    saveInLocalStorage();
}

 
const saveInLocalStorage = throttle(function () {   
    localStorage.setItem('feedback-form-state', JSON.stringify(inputFormData));
}, 500);



form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const {
      elements: { email, message }
    } = event.currentTarget;
  
    const userMessage = {
      email: email.value,
      message: message.value   
    };
  
    console.log(userMessage);

    localStorage.clear();
    
    event.currentTarget.reset();
  });
