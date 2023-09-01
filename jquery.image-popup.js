(function($){ 
    $.fn.imagePopup = function(options) { //* extends function in jquery

        var settings = $.extend({
            overlay: 'rgba(0, 0, 0, 0.5)',
            closeButton:{
                src: null,
                width: '30px',
                height: '30px'
            },
            imageBorder: "5px solid #ffffff",
            borderRadius: "5px",
            imageWidth: "500px",
            imageHeight: "400px",
            imageCaption: {
                exist: true,
                color: "#ffffff",
                fontSize: "20px"

            }

        }, options);

        /* *
            Iterating through each image Gallery
        */

        return this.each(function(){

            // Declare new element(s) variables

            var $overlay, $closeButton, $image;

            setOverlayProperties();
            setCloseButtonProperties();
            setImageProperties();

            $(this).find("a").on("click", function(event){
                event.preventDefault();


                var imageSource = $(this).children("img").attr("src");
                $image.attr("src", imageSource);
                $overlay.show();


            });
 
            function setImageProperties(){
                $image = $("<img>");
                $image.css({
                    "width": settings.imageWidth,
                    "height": settings.imageWidth,
                    "border": settings.imageBorder,
                    "border-radius": settings.borderRadius
                        
                });

                $overlay.append($image);
            }

            function setOverlayProperties(){

                $overlay = $('<div></div>');

                $overlay.css({
                    'background': settings.overlay,
                    'position': 'absolute',
                    'top': '0px',
                    'left': '0px',
                    'display': 'none',
                    'text-align': 'center',
                    'width': '100%',
                    'height': '100%',
                    'padding-top': '5%'
                });

                $("body").append($overlay);
            }

            function setCloseButtonProperties(){
                    var prop = {
                        "color": "white",
                        "cursor": "pointer",
                        "font-size": "20px",
                        "width": settings.closeButton.width,
                        "height": settings.closeButton.height,
                        "position": 'absolute',
                        'top': '5px',
                        'right': '5px',
                        'border': '0px',
                        'z-index': '1'
                    };

                    if(settings.closeButton.src){
                        $closeButton        = $("<img>");
                        $closeButton.attr   = $("src", settings.closeButton.src);
                        
                    }else{
                        $closeButton = $("<span>X</span>");
                    }

                    $closeButton.css(prop);
                    $overlay.append($closeButton);

                    $closeButton.css(prop);
                    $overlay.append($closeButton);
            }

                $closeButton.click(function(){
                    $overlay.hide();

                });

        })

    }


}(jQuery));