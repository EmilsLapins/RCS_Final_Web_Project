

$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
    var a = $(this).attr("href");
    
     $(".mainimg").attr("src", a);
     $(".mainimg").attr("href", a);
    

});


// main image
$(document).on('click', '[data-toggle="lightbox3"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
   

});



// instagram button
$(document).on('click', '[data-toggle="lightbox2"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
    

});