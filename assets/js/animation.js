var index = 0;
// var position = [300];
$(window).scroll(function (){
    var top = $(window).scrollTop();
    // console.log(top);
    if (top > 0){
        $(".sec-first").addClass("active")
    }
    if(top >= 300){
        $(".about-l img").addClass("active1")
        $(".about-r .text").addClass("active2")
        // console.log($("about-l").addClass("active1"));
        // $(".sec-second").addClass("active")
    }
    if(top >= 850){
        $(".line5").addClass("active");
        $(".map").addClass("active")
    }
})