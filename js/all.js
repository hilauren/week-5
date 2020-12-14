//index page

$(document).ready(function() {
    //menu作用
    $(".assignment").click(function(event) {
      $(".assignment-main").css('visibility', 'visible');
      $(".admin-main").css('visibility', 'hidden');
    });

    $(".admin").click(function(event) {
        $(".admin-main").css('visibility', 'visible');
        $(".assignment-main").css('visibility', 'hidden');
      });

    //reply按鈕作用
    $('.reply').click(function(event) {
        $('.message-board').css('display', 'block');
        $('.answered').css('display', 'none');
        $('.footer').css('display', 'none');
    });

    //cancel按鈕作用
    $('.cancel').click(function(event) {
        $('.message-board').css('display', 'none');
        $('.answered').css('display', 'block');
        $('.footer').css('display', 'block');
    });
});

//admin page
$(document).ready(function() {
    //modal btn active
    $(".btn-outline-modal:first").click(function(event) {
        $(".btn-outline-modal:first").addClass('active');
        $(".verified-warning:first").css('display', 'none');
        $(".verified-pass:first").css('display', 'inline-block');
        $(".verified p:first").css('color', '#2A8356');
    });

    $(".btn-outline-modal:last").click(function(event) {
        $(".btn-outline-modal:last").addClass('active');
        $(".verified-warning:last").css('display', 'none');
        $(".verified-pass:last").css('display', 'inline-block');
        $(".verified p:last").css('color', '#2A8356');
        $(".verified p:last").removeClass('text-warning');
        $(".verified p:last").html('done!');
    });

    $(".deactivate").click(function(event) {
        $(".admin-info").css('display', 'none');
    });



});