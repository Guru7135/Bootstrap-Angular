/*const darkMode = document.querySelector('.dark-mode');
if(darkMode != null){
	darkMode.addEventListener('click', () =>{
		document.body.classList.toggle('dark-mode-variables');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
	});
}*/

$(document).on('click', '.color-modes', function(e){
    e.preventDefault();
    var color = $(this).attr('data-color');
    $("body").removeClass(function (index, className) {
        return (className.match (/\S+-mode-variables/g) || []).join(' ');
    });
    
    $("body").addClass(color+'-mode-variables');
    if($(this).parent().hasClass('dark-mode')){
        $(this).addClass('active');
        $(this).siblings('span').removeClass('active');
    }

});

$(document).on('click', '.dark-mode span', function(e){
    e.preventDefault();

    var theme = $(this).attr('data-theme');
    $("body").removeClass(function (index, className) {
        return (className.match (/\S+-theme/g) || []).join(' ');
    });

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $("body").addClass(theme+'-theme');
});


$(document).on('click', '#language li', function(e){
    e.preventDefault();
    $("body").removeClass(function (index, className) {
        return (className.match (/\S+-lang/g) || []).join(' ');
    });
    var lang = $(this).text().toLowerCase();
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');

    $("body").addClass(lang+'-lang');
});


/*const colorRed = document.querySelector('.red-mode');
if(colorRed != null){
    colorRed.addEventListener('click', () =>{
        document.body.classList.toggle('red-mode-variables');
    });
}*/

$(document).on('click', '#close-btn', function(e){
	$('.collapse-container').toggleClass('inactive');
});
$(document).ready(function(){
});


$(document).on('click', '.toggle-password', function(e){
    $(this).toggleClass("bi bi-eye bi-eye-slash");
    input = $(this).parent().find("input");
    console.log(input);
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});


$(function(){
    //Bootstrap Validator
 $('form').validator().on('validated.bs.validator', function(e){
   var target = e.relatedTarget;
      if (target.id == 'login-name'){
        $('#chosen-name').prop('disabled', !target.checkValidity());
      }
  });
});


$(window).on('load',function(){
    setTimeout(function(){ // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
    },500);
});


$(window).on("load", function(){
    $('.save-button').on('click', save_onclick);
    $('.cancel-button').on('click', cancel_onclick);
    $('.edit-button').on('click', edit_onclick);
    $('.save-button, .cancel-button').hide();
});
function edit_onclick(){
    setFormMode($(this).closest("form"), 'edit');
}
function cancel_onclick(){
    setFormMode($(this).closest("form"), 'view');
    //TODO: Undo input changes?
}
function save_onclick(){
    setFormMode($(this).closest("form"), 'view');
    //TODO: Send data to server?
}
function setFormMode($form, mode){
    switch(mode){
        case 'view':
            $form.find('.save-button, .cancel-button').hide();
            $form.find('.edit-button').show();
            $form.find("input, select, textarea").prop("disabled", true);
            break;
        case 'edit':
            $form.find('.save-button, .cancel-button').show();
            $form.find('.edit-button').hide();
            $form.find("input, select, textarea").prop("disabled", false);
            break;
    }
}