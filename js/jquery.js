$(function() {
    $(".toggle").on("click",function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
         else{
            $(".item").addClass("active");
        }
    })
});
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('close');
    })
})