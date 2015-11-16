(function ($) {

    $.fn.blurryLoad = function (options) {

        var parentContainer = $(this).parent(),
            imageContainer = $(this)
        
        
        parentContainer.addClass('blurry-load-container');
        imageContainer.addClass('img-blur')

        // 1: load small image and show it
        var img = new Image();
        img.src = imageContainer.attr('src');
        img.onload = function () {
            imageContainer.addClass('loaded');
        };

        // 2: load large image
        var imgLarge = new Image();
        imgLarge.src = $(this).attr('data-large');
        imgLarge.onload = function () {
             imgLarge.classList.add('loaded');
        };
        parentContainer.append(imgLarge)
       
    };

}(jQuery));