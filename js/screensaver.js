//
// Get the URL parameters
//
function getUrlVar(key){
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
    return result && unescape(result[1]) || "";
}

//
// Set the screensaver
//
// 6 min = 360 sec = 360000 msec
// Longer than normal since we've got some long-ish videos
//
var s_saver;
// Debug screensaver length
//var s_saver_timeout = 5000;
var s_saver_timeout = 360000;

// Page attributes
var current_page = $(location).attr('pathname');
var s_saver_enabled = getUrlVar('saver');

$(window).bind("load", function() {
    //
    // Screensaver - load
    //
    // Check if the URL tells us to load the screensaver.
    // This happens when the timeout occurs on a sub page. The user is sent
    // back to the index page with this URL flag, enabling the screensaver.
    //

    if (s_saver_enabled != 'true') {
        // Start by hiding the screensaver overlay
        $('#screensaver').hide();

        // Run a timer from the load of the page
        s_saver = setTimeout(function(){
            window.location.replace('index.html?saver=true');
        }, s_saver_timeout);
    }
});

//
// Screensaver - reset
//
// Any time we get a click, reset the screensaver timer and make sure the
// screensaver is cleared.
//
$('body').mousedown(function() {

    // Hide screensaver
    $('#screensaver').fadeOut(100);

    // Reset the screensaver timer
    clearTimeout(s_saver);
    s_saver = setTimeout(function(){
        window.location.replace('index.html?saver=true');
    }, s_saver_timeout);

});

