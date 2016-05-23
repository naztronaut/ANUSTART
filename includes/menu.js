/*
script.php
Title: ANUSTART
Author: Nazmus
URL: http://nazm.us
Github: https://github.com/nlinux1/

This script contains all custom JavaScript functionality
*/

$(document).ready(function () {
    
    $(".menuTitle").on("click",function(e){
       console.log($(e.target).data('name')); 
        title = $(e.target).data('name');

        if(title == "home")
        {
            $("#start").trigger("click");
        }
//        $("#showDropdown").html($(e.target).html()).append(" <span class=\"caret\"></span>");
        if(title == "about")
        {
            aboutMe();
        }
        
        if(title=="howto")
        {
            howTo();   
        }
        if(title=="contact")
        {
            contact();   
        }
    });
    
    function aboutMe(){
     
        text = "Welcome to ANUSTART! This is a fun script created by <a href=\"http://nazm.us\" target=\"_blank\">Nazmus</a>. It comprises of HTML, CSS, and JavaScript backend (lots of jQuery), and PHP and MySQL backend. More info to come later! Click the \"START\" button above to keep rolling!";
        
        $("#start").html("<i class=\"fa fa-rocket\" aria-hidden=\"true\"></i> Click here to Start");
        $("#content").hide().html(text).fadeIn({
                    duration: 600
                });
    }
    
    function howTo(){
        text = "Click the Start button to begin. If you want to view quotes from just one show, use the blue dropdown menu and click on your choice. <br /><br /> To view random quotes from all shows, select \"All Shows\" from the blue dropdown menu. That's all! <br /><br /> A more organized How To page coming soon to a browser near you.";
        
        $("#start").html("<i class=\"fa fa-rocket\" aria-hidden=\"true\"></i> Click here to Start");
        $("#content").hide().html(text).fadeIn({
                    duration: 600
                });
    }
    
    function contact(){
        text = "Please use a green smoke signal. And please make sure it's visible from Boston! ";
        
        $("#start").html("<i class=\"fa fa-rocket\" aria-hidden=\"true\"></i> Click here to Start");
        $("#content").hide().html(text).fadeIn({
                    duration: 600
                });
    }
});