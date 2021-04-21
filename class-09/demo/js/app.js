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
const catForm = document.getElementById('catForm');

function Cat(name, likes, breed, isGoodWithCat, isGoodWithDog, isGoodWithKids, img) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.breed = breed;
  this.isGoodWithCat = isGoodWithCat;
  this.isGoodWithDog = isGoodWithDog;
  this.isGoodWithKids = isGoodWithKids;
  this.img = img;
}

Cat.prototype.getAge = function(min, max) {
  this.age = getRandomNumber(min, max);
};

Cat.prototype.render = function() {
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

  const table = document.createElement('table');
  articleElement.appendChild(table);

  const tr1 = document.createElement('tr');
  table.appendChild(tr1);

  let headArray = ['Is Good With Kids', 'Is Good With Cats', 'Is Good With Dogs'];
  for(let i = 0; i < headArray.length; i++) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.textContent = headArray[i];
  }

  const tr2 = document.createElement('tr')
  table.appendChild(tr2);

  let bodyArray = [this.isGoodWithKids, this.isGoodWithCat,  this.isGoodWithDog];
  for(let i = 0; i < bodyArray.length; i++) {
    const tdBody = document.createElement('td');
    tr2.appendChild(tdBody);
    tdBody.textContent = bodyArray[i];
  }

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

let frankieCat = new Cat('frankie', ['napping', 'chasing', 'eating'], 'British', true, false, false, './images/frankie.jpeg');
let jumper = new Cat('jumper', ['napping', 'chasing', 'eating'], 'British', true, false, false, './images/jumper.jpeg'); 


frankieCat.getAge(3, 6);
frankieCat.render();
jumper.getAge(3, 6);
jumper.render();
console.log(frankieCat);

// General helper function
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(3, 12));


catForm.addEventListener('submit', eventButton)

function eventButton(event) {
  event.preventDefault();
  console.log(event.target.catName.value);
  const name = event.target.catName.value;
  const breed = event.target.breed.value;
  const likes = event.target.likes.value.split(',');
  const kids = event.target.goodKids.checked;
  const cats = event.target.goodCat.checked;
  const dogs = event.target.goodDog.checked;

  let newCat = new Cat(name, likes, breed, cats, dogs, kids, '');
  newCat.getAge(3, 12);
  newCat.render();

  catForm.reset();

  console.table(name, breed, likes, kids, cats, dogs)
}