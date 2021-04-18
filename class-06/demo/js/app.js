// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';

const parentElement = document.getElementById('kittenProfiles');

let frankie = {
  name: 'frankie',
  age: 0,
  likes: ['napping', 'chasing', 'eating'],
  img: './images/frankie.jpeg',
  isGoodWithKids: true,
  isGoodWithDog: false,
  isGoodWithCat: true,
  breed: 'British',
  getAge: function(min, max) {
    this.age = getRandomNumber(min, max);
  },
  render: function() {
    const parentElement = document.getElementById('kittenProfiles');
    // console.log(parentElement);

    // Create a new element
    // add the text to the new element
    // append the new element to the parent element

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement)

    for(let i = 0; i < this.likes.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.likes[i];
      ulElement.appendChild(liElement);
    }

    const imgEle = document.createElement('img');
    // imgEle.setAttribute('src', this.img);
    imgEle.src = this.img;
    articleElement.appendChild(imgEle);
  }
}

let jumper = {
  name: 'jumper',
  age: 0,
  likes: ['napping', 'chasing'],
  img: './images/jumper.jpeg',
  isGoodWithKids: true,
  isGoodWithDog: false,
  isGoodWithCat: true,
  breed: 'Turkish',
  getAge: function(min, max) {
    this.age = getRandomNumber(min, max);
  },
  render: function() {
    const parentElement = document.getElementById('kittenProfiles');
    // console.log(parentElement);

    // Create a new element
    // add the text to the new element
    // append the new element to the parent element

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement)

    for(let i = 0; i < this.likes.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.likes[i];
      ulElement.appendChild(liElement);
    }

    const imgEle = document.createElement('img');
    // imgEle.setAttribute('src', this.img);
    imgEle.src = this.img;
    articleElement.appendChild(imgEle);
  }
}

let serena = {
  name: 'serena',
  age: 0,
  likes: ['napping', 'chasing'],
  img: './images/serena.jpeg',
  isGoodWithKids: true,
  isGoodWithDog: false,
  isGoodWithCat: true,
  breed: 'Turkish',
  getAge: function(min, max) {
    this.age = getRandomNumber(min, max);
  },
  render: function() {
    // console.log(parentElement);

    // Create a new element
    // add the text to the new element
    // append the new element to the parent element

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement)

    for(let i = 0; i < this.likes.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.likes[i];
      ulElement.appendChild(liElement);
    }

    const imgEle = document.createElement('img');
    // imgEle.setAttribute('src', this.img);
    imgEle.src = this.img;
    articleElement.appendChild(imgEle);
  }
}

frankie.getAge(3, 12);
frankie.render();
console.log(frankie);

jumper.getAge(3, 12);
jumper.render();
console.log(jumper);

serena.getAge(3, 12);
serena.render();
console.log(serena);
// console.log(this);

// General helper function
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

console.log(getRandomNumber(3, 12));