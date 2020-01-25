let newsHeader = [...document.getElementsByClassName('news__item-header')];
let newsPhoto = [...document.getElementsByClassName('news__item-photo')];
let newsText = [...document.getElementsByClassName('news__item-text')];
let circles = [...document.getElementsByClassName('nav__circle-item')];
console.log(circles);
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



circles.forEach(function(item) {
	item.classList.remove("nav__circle-item-active");
	item.addEventListener('click', event => {
			i = circles.indexOf(item);
			console.log(i);
			setInterval(newsInterval);
			wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
 	wrapHeader.innerHTML = newsHeader[i].innerHTML;
 	wrapText.innerHTML = newsText[i].innerHTML;
 	 	circles[i].classList.add('nav__circle-item-active');

		});
});