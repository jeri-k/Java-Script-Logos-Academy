$(document).ready(function() {
    $('.color_b').animate( {
        width: '244px',
        height:  '412px'
    },120000).delay(1000).animate({
        width: '244px',
        height: '0px',
    },120000)
    setTimeout(function() {
        $('h1').html('1')
    },60000)
    setTimeout(function() {
        $('h1').html('0')
    },120000)

})