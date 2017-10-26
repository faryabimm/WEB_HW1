$(document).ready(function(){
    resizeDiv();
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    // vpw = $(window).width();
    vph = $(window).height();

    $('#scrollable1').css({'height': (vph-153) + 'px'});
    $('#scrollable2').css({'height': (vph-92) + 'px'});
    $('#dashboard').css({'height': (vph-48) + 'px'});
    $('#scrollable3').css({'height': (vph-108) + 'px'});
}