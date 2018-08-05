var misrc = "";
var mihref = "";

$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
    var a = $(this).attr("href");
    console.log($(this).attr("href"));
    misrc = $(".mainimg").attr("src", a);
    mihref = $(".mainimg").attr("href", a);
    

});


// main image
$(document).on('click', '[data-toggle="lightbox3"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
    console.log($(this).attr("href"));

});



// instagram button
$(document).on('click', '[data-toggle="lightbox2"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
    

});