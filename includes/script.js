$(document).ready(function () {
    //on click of the #start button
    $("#start").click(function () {
        //run this ajax
        $.ajax({
            url: "source.php",
            method: "GET",
            dataType: "json",
            success: function (data) {
                var text = ''; //text placeholder
                for(var i = 0; i < data.length; i++)
                    {
                        //create span element and input the incoming data name 
                        var nameSpan = $("<span>",{class: "name col-sm-4 text-right"}); 
                        $(nameSpan).text(data[i].name);
                        
                        //buffer div to append nameSpan to
                        var buffer = $("<div>", {class: "row"});
                        $(buffer).append($(nameSpan).append(": "));
                        
                        //create span for quote and assign text from query
                        var quoteSpan = $("<span>", {class: "quote col-sm-8 text-justify"});
                        $(quoteSpan).text(data[i].quote);

                        //append quote to buffer so it appears after nameSpan
                        $(buffer).append($(quoteSpan)).append("<br />");
                        
                        //assign entire buffer's HTML to text
                        text += $(buffer)[0].outerHTML;
                    }
                //replace #content html with above text
                $("#content").html(text);
            }
        });
        //change text in button
        $("#start").text("Click here for ANUSTART");
    });

});