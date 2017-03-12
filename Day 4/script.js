window.onload = function () {
 var el = document.querySelector('.btn-animation');
 console.log(el.innerHTML);
 el.innerHTML = 'Новый текст';

 $('.btn-animation').click(function() {
 	$('.btn-animation').toggleClass('active');

 });
}