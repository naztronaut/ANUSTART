/*
script.php
Title: ANUSTART
Author: Nazmus
URL: http://nazm.us
Github: https://github.com/nlinux1/

This script contains all custom JavaScript functionality
*/

$(document).ready(function () {

    var id='';
    var title='';
    //get URL for specific search
    if (location.search) {
        var param = location.search;
        param = param.split("?");
        
        param = param[1].split("&");
//        console.log(param);
        
        for(var i=0;i<param.length;i++)
        {
            param2 = param[i].split("=");
            for(var j=0;j<param2.length;j++)
            {
                if(param2[j]=='id')
                {
                    id = param2[j+1];
                }
                else if(param2[j]=='title')
                {
                    title = param2[j+1];
                    updateDropdown(title);
                }
            }
        }
//        console.log(id + title);
//        var param2 = param[1].split("&");
        var param2;
//        console.log(param2);
        if (!isNaN(id)) {
            param2 = "id=" + id + "&title="+title;
            //let dom load and trigger click after 1ms
            setTimeout(function () {
                $("#start").trigger("click");
            }, 1);
            //set param2 back to blank so the #start button generates new content
            setTimeout(function () {
                param2 = "";
            }, 50);
        } else {
            param2 = "";
        }
//                console.log(param2);
    }

    //grab IP for analytics
    var ipAddr;
    $.getJSON('http://ipinfo.io', function (data) {
        ipAddr = data.ip;
    });
    //on click of the #start button
    $("#start").on("click", function () {
        //run this ajax
        $.ajax({
            url: "source.php",
            method: "GET",
            data: param2,
            dataType: "json",
            success: function (data) {
                var text = ''; //text placeholder
                for (var i = 0; i < data.length - 2; i++) {
                    //create span element and input the incoming data name 
                    var nameSpan = $("<span>", {
                        class: "name col-sm-3 text-right"
                    });
                    $(nameSpan).text(data[i].name);

                    //buffer div to append nameSpan to
                    var buffer = $("<div>", {
                        class: "row"
                    });
                    $(buffer).append($(nameSpan).append(": "));

                    //create span for quote and assign text from query
                    var quoteSpan = $("<span>", {
                        class: "quote col-sm-9 text-justify"
                    });
                    $(quoteSpan).text(data[i].quote);

                    //append quote to buffer so it appears after nameSpan
                    $(buffer).append($(quoteSpan)).append("<br />");

                    //assign entire buffer's HTML to text
                    text += $(buffer)[0].outerHTML;
                }
                //replace #content html with above text
                $("#content").hide().html(text).fadeIn({
                    duration: 600
                });
                //                console.log(data[data.length - 1].id);
                var shareUrl = location.origin + location.pathname + "?title=" + data[data.length-1].title;
                shareUrl += "&id=" + data[data.length - 2].id;
                $("#shareBox").val(shareUrl);
                footerScroll();
                updateDropdown(data[data.length-1].title);
//                console.log(data[data.length-1].title);
            }
        });
        //change text in button
        $("#start").html("<i class=\"fa fa-rocket\" aria-hidden=\"true\"></i> Click here for ANUSTART");

        //trigger analyitics.php and send ipAddress and update click command
        $.ajax({
            url: "analytics.php",
            method: "post",
            data: 'ipAddr=' + ipAddr + '&updateClick=1',
            //            success: function (data) {
            //                console.log(data);
            //            }
        });
    });

    //instantiate copy url button
    new Clipboard('.copyButton');

    function footerScroll() {
        if ($("body").height() > ($(window).height()-15)) {
            $("#footer").css("position","relative");
        }
        else
        {
            $("#footer").css("position","fixed");
//            $("#footer").css("width","100%");
        }
    };

    //call footerScroll if window is resized to move footer position
    $(window).resize(footerScroll);
    
    $(".showtitle").on("click",function(e){
//       console.log($(e.target).data('name')); 
        title = $(e.target).data('name');
        if(title == 'all'){
            param2 = ""
        }
        else
        {
            param2 = "title="+title;
        }
        $("#start").trigger("click");
        $("#showDropdown").html($(e.target).html()).append(" <span class=\"caret\"></span>");
    });
    
    function updateDropdown(p){
        if(p == "pr")
        {
            $("#showDropdown").html("Parks &amp; Rec").append(" <span class=\"caret\"></span>");
        }
        else if(p == "all")
        {
            $("#showDropdown").html("All Shows").append(" <span class=\"caret\"></span>");
        }
        else
        {
            $("#showDropdown").html("Arrested Development").append(" <span class=\"caret\"></span>");
        }
    }
});