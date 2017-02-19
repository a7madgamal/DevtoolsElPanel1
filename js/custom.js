$(document).ready(function() {
    var ee = new EventEmitter();
    $.smartscroll({
        mode: "vp",
        autoHash: true,
        sectionScroll: true,
        initialScroll: false,
        keepHistory: false,
        sectionWrapperSelector: ".section-wrapper",
        sectionClass: "section",
        animationSpeed: 500,
        headerHash: "header",
        breakpoint: null,
        eventEmitter: ee,
        dynamicHeight: true
    });
    $('#highlight_change_btn').click(function() {
        var r = Math.round(Math.random() * 100) + '';
        $('#highlight_change_div').html('<div>' + r + '</div>');
        $('#highlight_change_btn').addClass(r)
    });
    $('#log_el_btn').click(function() {
        console.log(this);
    });
    $('#log_jq_btn').click(function() {
        console.log($(this));
    });
    $('#popup_btn').click(function() {
        window.open('https://www.youtube.com/channel/UC7Ca8ilbTCu9sj-Ux6JaGWw', 'winname', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=350');
    });

    // https://css-tricks.com/reading-position-indicator/
    var getMax = function() {
        return $(document).height() - $(window).height();
    }
    var getValue = function() {
        return $(window).scrollTop();
    }
    var progressBar = $('progress');
    progressBar.attr({
        max: getMax()
    });
    $(document).on('scroll', function() {
        progressBar.attr({
            value: getValue()
        });
    });
    $(window).resize(function() {
        progressBar.attr({
            max: getMax(),
            value: getValue()
        });
    });

    // hide google bug!
    window.setTimeout(function(){
      console.clear()
    }, 800)
});


function onYtEvent(payload) {
    if (payload.eventType == 'subscribe') {
        // Add code to handle subscribe event.
    } else if (payload.eventType == 'unsubscribe') {
        // Add code to handle unsubscribe event.
    }
    // if (window.console) { // for debugging only
    //     window.console.log('YT event: ', payload);
    // }
}
