
window.onload = function() {
// Check if Jquery is already loaded, if not, load the jquery magic! Then load the instant sort list. Borrowed most of this from someone else's example, because it is awesome and works well.
    (function(url, position, callback){
        // default values
        url = url || 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
        position = position || 0;

        // Check is jQuery exists
        if (!window.jQuery) {
            // Jquery not loaded -- insert jquery!
            // Initialize <head>
            var head = document.getElementsByTagName('head')[0];
            // Create <script> element
            var script = document.createElement("script");
            // Append URL
            script.src = url;
            // Append type
            script.type = 'text/javascript';
            // Append script to <head>
            head.appendChild(script);
            // Move script on proper position
            head.insertBefore(script,head.childNodes[position]);

            script.onload = function(){
                if(typeof callback == 'function') {
                    callback(jQuery);
                }
            };
        } 
        else {
            if(typeof callback == 'function') {
                callback(jQuery);
                // Jquery already loaded!             
            }
        }
    }('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', 5, function($){ 
        // Stuff that happens after jquery init confirmed (this case, call our token builder doorway function)
        cookiesNotice();
    }));

}

function cookiesNotice(){

    // Add the CSS (Find where the instant filter list files are stored and add the CSS file.)
    var cookiesNoticeDir = $('script[src*="cookiesNotice-dist.js"').attr('src'),
        cookiesNoticeCSS = (cookiesNoticeDir.substr(0, cookiesNoticeDir.indexOf('cookiesNotice-dist.js'))) + 'cookiesNotice-dist.css'; 
    $('head').append('<link rel="stylesheet" href="' + cookiesNoticeCSS + '" type="text/css" />');

    // Wrap the cookies message and add OK button
    $('.madln-cookiesNotice').wrap('<div class="madln-cookiesNotice-wrap" style="display:none;"></div>');
    $('.madln-cookiesNotice').after('<a href="#" class="btn-cookiesOK">OK</a>');
    

    // Check local storage and hide or show message, depending on if it's been dismissed before.
    var cookiesOK = localStorage.getItem('cookiesOK');
    if(cookiesOK == 'true'){
        // User has previously dismissed the message. Don't show it again.
        $('.madln-cookiesNotice-wrap').hide();
        $('.madln-cookiesNotice').hide();
    }
    else {
        // No record of ser having previously seen the message, or it has been reset. Show the message.
        $('.madln-cookiesNotice').show();
        $('.madln-cookiesNotice-wrap').fadeIn(800);
    }

    // When uer clicks the OK button, message is dismissed, and recorded in local storage
    $('body').on('click', '.btn-cookiesOK', function(e){    
        e.preventDefault();
        localStorage.setItem('cookiesOK', 'true'); 
        $(".madln-cookiesNotice-wrap").fadeOut( 800, function() {
            $('.madln-cookiesNotice').hide();
        });
    });

    // Hook into the following to reset the cookies notice (button with class madln-resetCookieNotice should do the trick)
    $('body').on('click', '.madln-resetCookieNotice', function(e){    
        e.preventDefault();
        localStorage.setItem('cookiesOK', ''); 
        $('.madln-cookiesNotice').show();
        $('.madln-cookiesNotice-wrap').fadeIn(800);
    });

}