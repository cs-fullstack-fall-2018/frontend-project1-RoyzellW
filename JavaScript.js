

$(".overlay").mouseover(blurImageParent);
$(".overlay").mouseout(unBlurImageParent);
$(".img-responsive").mouseover(blurImage);
$(".img-responsive").mouseout(unBlurImage);

function blurImageParent() {
    $(".img-responsive").css('filter','blur(2px)');
    $(this).siblings(".img-responsive").css('filter','blur(2px)');
}

function unBlurImageParent(){
    $(".img-responsive").css('filter','blur(0px)');
    $(this).parent().css('filter','blur(0px)');
    $(this).siblings(".img-responsive").css('filter','blur(0px)');
}

function blurImage() {
    $(".img-responsive").css('filter','blur(2px)');
    $(this).css('filter','blur(2px)');
}

function unBlurImage(){
    $(".img-responsive").css('filter','blur(0px)');
    $(this).css('filter','blur(0px)');
}

