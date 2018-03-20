<<<<<<< HEAD
$('.acc-item').on('click', function(){
    $(this).toggleClass('opened');
   $(this).find('.acc-body').slideToggle();
   if ($(this).find('svg').hasClass('rotate')){
   		$(this).find('svg').css({'transform': 'rotate(0deg)'}).removeClass('rotate');
   } else {
   	$(this).find('svg').css({'transform': 'rotate(180deg)'}).addClass('rotate');
   }
  
=======
$('.acc-item').on('click', function(){
    $(this).toggleClass('opened');
   $(this).find('.acc-body').slideToggle();
   if ($(this).find('svg').hasClass('rotate')){
   		$(this).find('svg').css({'transform': 'rotate(0deg)'}).removeClass('rotate');
   } else {
   	$(this).find('svg').css({'transform': 'rotate(180deg)'}).addClass('rotate');
   }
  
>>>>>>> 62ebab02320bda5c42943c6692401c0255b44d82
});