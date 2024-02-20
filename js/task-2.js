// Напиши скрипт для створення галереї зображень на основі масиву даних.HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

"use strict";

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const list = document.querySelector(".gallery");

const makeGallery = () => {
  const galleryItem = images.map(image => `<li class="list-item"><img class="photo" src="${image.url} alt="${image.alt} width="300px"/></li>`).join("");

list.insertAdjacentHTML("afterbegin", galleryItem);
}

makeGallery();

list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.gap = "150px";
list.style.listStyleType = "none";



// const gallery = document.querySelector(".gallery");

// images.forEach((image) => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   li.appendChild(img);
//   gallery.appendChild(li);
// });

// gallery.style.display = "flex";
// gallery.style.flexWrap = "wrap";
// gallery.style.gap = "150px";
// gallery.style.listStyleType = "none";
// gallery.style.width = "300";