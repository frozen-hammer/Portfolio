$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    })

    $(".welcm").typed({
        strings:["Helllllooooooo ....."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $(".type-effect").typed({
        strings:["Btech. CSE","Specialization in AI and Robotics"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});