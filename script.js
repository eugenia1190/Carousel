let newsHeader = [...document.getElementsByClassName('news__item-header')];
let newsPhoto = [...document.getElementsByClassName('news__item-photo')];
let newsText = [...document.getElementsByClassName('news__item-text')];
let circles = [...document.getElementsByClassName('nav__circle-item')];

const wrapHeader = document.getElementById('nav__news-header');
const wrapPhoto = document.getElementById('nav__news-photo');
const wrapText = document.getElementById('nav__news-text');

let i = 0;
wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
wrapHeader.innerHTML = newsHeader[i].innerHTML;
wrapText.innerHTML = newsText[i].innerHTML;
circles[i].classList.add('nav__circle-item-active');


let newsInterval = setInterval(nextNews, 3000);


function nextNews() {
	circles.forEach(function(item) {item.classList.remove("nav__circle-item-active");});
	i=(i+1)%6;
	wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
 	wrapHeader.innerHTML = newsHeader[i].innerHTML;
 	wrapText.innerHTML = newsText[i].innerHTML;
 	circles[i].classList.add('nav__circle-item-active');
}



circles.forEach(function(item) {
	item.addEventListener('click', event => {
		circles.forEach(function(elem) {elem.classList.remove("nav__circle-item-active");});
		i = circles.indexOf(item);
		wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
 		wrapHeader.innerHTML = newsHeader[i].innerHTML;
 		wrapText.innerHTML = newsText[i].innerHTML;
 	 	circles[i].classList.add('nav__circle-item-active');
	});
});