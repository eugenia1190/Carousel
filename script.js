let newsHeader = [...document.getElementsByClassName('news__item-header')];
let newsPhoto = [...document.getElementsByClassName('news__item-photo')];
let newsText = [...document.getElementsByClassName('news__item-text')];
let circles = [...document.getElementsByClassName('nav__circle-item')];
console.log(circles);
const wrapHeader = document.getElementById('nav__news-header');
const wrapPhoto = document.getElementById('nav__news-photo');
const wrapText = document.getElementById('nav__news-text');

wrapPhoto.setAttribute('src', newsPhoto[0].getAttribute('src'));
wrapHeader.innerHTML = newsHeader[0].innerHTML;
wrapText.innerHTML = newsText[0].innerHTML;
circles[0].classList.add('nav__circle-item-active');


let newsInterval = setInterval(nextNews, 6000);


// circles.forEach(function(el) {
	// circles[el].addEventListener('click', event => {
// 		console.log(circles[el]);
// 	} );});

	let i = 0;
function nextNews() {

	i=(i+1)%6;
	wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
 	wrapHeader.innerHTML = newsHeader[i].innerHTML;
 	wrapText.innerHTML = newsText[i].innerHTML;
 	if(circles[i-1]) {circles[i-1].classList.remove("nav__circle-item-active");};
 	if( circles[5].classList.length == 2 && i==0) {
 		circles[5].classList.remove("nav__circle-item-active");
 	 	};
 	circles[i].classList.add('nav__circle-item-active');
}
