// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів.Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті.При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy колекція елементів має очищатися.
// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

"use strict";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountElements = document.querySelector ('#controls input'),
createBtn = document.querySelector ('button[data-create]'),
destroyBtn = document.querySelector ('button[data-destroy]'),
boxesElements = document.querySelector ('#boxes');

const createBoxes = () => {
  let amount = amountElements.value;
  const boxes = [];

  const createArray = amount => {
    for (let i = 0; i < amount; i++) {
      boxes.unshift ({ width: 30, heigth: 30, color: getRandomColor() });

      for (let i = 0; i < boxes.length; i++) {
        boxes[i].width += 10;
        boxes[i].heigth += 10;
      }
    }

    return boxes;
  };
  if (amount > 0 && amount <= 100) {
    createArray (amountElements.value);
    const newBoxes = boxes.reduce(
      (html, div) =>
        html +
        `<div style='width: ${div.width}px; height: ${div.heigth}px; background-color: ${div.color}; margin-top: 10px'></div>`,
      ""
    );
    boxesElements.innerHTML = newBoxes;

    amountElements.value = "";
    boxes.length = 0;
  } else {
    alert ("Please, enter a number from 1 to 100!");
    amountElements.value = "";
  }
};

const destroyBoxes = () => {
  boxesElements.innerHTML = "";
};

createBtn.addEventListener ("click", createBoxes);
destroyBtn.addEventListener ("click", destroyBoxes);