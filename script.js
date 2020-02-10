const newsHeader = [...document.getElementsByClassName('news__item-header')];
const newsPhoto = [...document.getElementsByClassName('news__item-photo')];
const newsText = [...document.getElementsByClassName('news__item-text')];
const circles = [...document.getElementsByClassName('slider__circle-item')];
const wrapHeader = document.getElementById('slider__news-header');
const wrapPhoto = document.getElementById('slider__news-img');
const wrapText = document.getElementById('slider__news-text');
const arrow = document.getElementById('arrow');

let i = 0;
wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
wrapHeader.innerHTML = newsHeader[i].innerHTML;
wrapText.innerHTML = newsText[i].innerHTML;
circles[i].classList.add('slider__circle-item-active');


let newsInterval = setInterval(nextNews, 3000);


function nextNews() {
	circles.forEach(function(item) {item.classList.remove('slider__circle-item-active');});
	i=(i+1)%6;
	wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
 	wrapHeader.innerHTML = newsHeader[i].innerHTML;
 	wrapText.innerHTML = newsText[i].innerHTML;
 	circles[i].classList.add('slider__circle-item-active');
}



circles.forEach(function(item) {
	item.addEventListener('click', event => {
		circles.forEach(function(elem) {elem.classList.remove('slider__circle-item-active');});
		i = circles.indexOf(item);
		wrapPhoto.setAttribute('src', newsPhoto[i].getAttribute('src'));
 		wrapHeader.innerHTML = newsHeader[i].innerHTML;
 		wrapText.innerHTML = newsText[i].innerHTML;
 	 	circles[i].classList.add('slider__circle-item-active');
	});
});

arrow.addEventListener('click', function (event) {
	document.documentElement.scrollIntoView({behavior: 'smooth'});
});

window.addEventListener('scroll', function() {
	if (window.pageYOffset >= 250) {
		arrow.classList.add ('arrow-active');
	} else {
		arrow.classList.remove('arrow-active');
	}
});
