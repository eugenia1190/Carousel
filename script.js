let newsHeader = [...document.getElementsByClassName('news__item-header')];
let newsPhoto = [...document.getElementsByClassName('news__item-photo')];
let newsText = [...document.getElementsByClassName('news__item-text')];

const wrapHeader = document.getElementById('nav__news-header');
const wrapPhoto = document.getElementById('nav__news-photo');
const wrapText = document.getElementById('nav__news-text');



let circles = [...document.getElementsByClassName('nav__circle-item')];

let i = 0;
let newsInterval = setInterval(nextNews, 6000);

function nextNews() {
	wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
 	wrapHeader.innerHTML = newsHeader[i].innerHTML;
 	wrapText.innerHTML = newsText[i].innerHTML;
	i=(i+1)%6;
}




