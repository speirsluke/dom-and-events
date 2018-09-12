
//QUERYING: getElementBy...  

// Working in index.js of cloned dom-and-events repo...


// Find and console log the text content of element with id main-heading
const mainh = document.getElementById('main-heading'); 
console.log(mainh.textContent);

// Find and console log the text content of all elements with class technology. Remember that getElementsByClassName will return an HTMLCollection, an array like object which you will need to iterate over to get each element in it.
let techClass = document.getElementsByClassName('technology'); 
const techArr = [...techClass]; 
techArr.forEach(function(elem){
    console.log(elem.textContent)
})

// console.log the text content of each previous sibling of an element class form-input
let formIn = document.getElementsByClassName('form-input'); 
let formArr = [...formIn]; 
console.log(formArr)
formArr.forEach(function(arr){
    console.log(arr.previousElementSibling.textContent)
})

// Find all images on the page and console.log their src attributes
const images = document.getElementsByTagName('img'); 
const imageArr = [...images]; 
imageArr.forEach(function(image){
console.log(image.src)
})

// Find and console.log the href of all links on the page.
const hrefs = document.getElementsByTagName('a'); 
const hrefArr = [...hrefs]; 
hrefArr.forEach(function(ref){
    console.log(ref.href)
})



//QUERY SELECTOR 

// Working in index.js of cloned dom-and-events repo...


// Find and console log the text content of element with id main-heading
const mainh2 = document.querySelector('#main-heading'); 
console.log(mainh.textContent);

// Find and console log the text content of all elements with class technology. Remember that getElementsByClassName will return an HTMLCollection, an array like object which you will need to iterate over to get each element in it.
let techClass2 = document.querySelectorAll('.technology'); 
techClass2.forEach(function(elem){
    console.log(elem.textContent)
})

// console.log the text content of each previous sibling of an element class form-input
let formIn2 = document.querySelectorAll('.form-input'); 
console.log(formArr)
formIn2.forEach(function(arr){
    console.log(arr.previousElementSibling.textContent)
})

// Find all images on the page and console.log their src attributes
const images2 = document.querySelectorAll('img'); 
images2.forEach(function(image){
console.log(image.src)
})

// Find and console.log the href of all links on the page.
const hrefs2 = document.querySelectorAll('a'); 
hrefs2.forEach(function(ref){
    console.log(ref.href)
})


// mainh.innerHTML = `<i>${mainh2.textContent}</i>`;
// mainh.innerHTML = `<u>${mainh2.textContent}</u>`; //Overwrites the previous;
// mainh.innerHTML = `<u><i>${mainh.textContent}</i></u>`; 


// console.log(mainh.innerHTML);

// place * around the text in the top nav bar links
let navLinks = document.querySelectorAll('.nav-link'); 
navLinks.forEach(function(link){
    link.innerHTML = `*${link.textContent}*`;
})

// convert all text titles with class technology to italic using <i> tag
const titles = document.querySelectorAll('.technology'); 
titles.forEach(function(title){
    title.innerHTML = `<i>${title.textContent}<i>`;
})

// make all the text of label blue
const labels = document.querySelectorAll('label');
labels.forEach(function(label){
    console.log(label.setAttribute("style", "color: blue"));
});
 // Using createElement and createTextNode create a new navbar item link with text 'hobbies' which links to hobbies.html. 
// It should have same structure as the other links and appear just before contact.



const contact = document.querySelector('#contact-link-container')
var hobbiesNode = document.createElement('li'); 
var textNode = document.createTextNode('*Hobbies*'); 
hobbiesNode.appendChild(textNode);

var hobbies = contact.parentNode.insertBefore(hobbiesNode, contact)

console.log(hobbies)
hobbies.textContent = "*Hobbies*"
hobbies.innerHTML = `<a href="hobbies.html" class="nav-link">${hobbies.textContent}</a>`

// Remove navbar item with id about-link-container and save a reference
//  to it aka assign it to a variable. Insert the removed link as the last link.

const navBar = document.querySelector('.nav-items'); 
const about = document.querySelector('#about-link-container')

const remove = navBar.removeChild(about); 

navBar.appendChild(about); 

//Adding an event listen. 
// When hero image is clicked change the image displayed to img/flamingos

const hero = document.querySelector('#hero'); 
hero.addEventListener("click", function(event){
    hero.removeAttribute('src');
    hero.setAttribute('src', 'img/flamingos.jpg')
});

// Prevent clicks on links from triggering a url change in the browser. 
// Alert the text content of the bar link

let navLinks2 = document.querySelectorAll('.nav-link')


navLinks2.forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault();
        alert(`${link.href}`);
    })
})

// Console.log the value of text entered into the name input
const nameIn = document.querySelector('#name'); 

nameIn.addEventListener('input', function(event){
    
    console.log(event.target.value)
})


// Prevent the contact form from getting submitted

const forms = document.querySelector('form'); 

forms.addEventListener('submit', function(event){
    
    event.preventDefault();

})
    
    
