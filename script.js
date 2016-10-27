var posData = {};

$(  function() 
    {
           

            $(".draggable" ).draggable();

            $(".resizeable" ).resizable();

            $("#map" ).resizable();

            $('#posSaver').click(
                function() 
                {
                  
                  $(".draggable").each( 
                    function() 
                    { 
                      //console.log($(this).text()); 
                      var key = $(this).attr("id");
                      posData[key] = {
                                         left: $(this).css("left"), 
                                         top: $(this).css("top"), 
                                         width: $(this).css("width"), 
                                         height: $(this).css("height")
                                     };
                    }
                  );

                  console.log();
                }

                
            );

            $('#posLoader').click(
                function() 
                {
                  
                  $(".draggable").each( 
                    function() 
                    { 
                      //console.log($(this).text()); 
                      var key = $(this).attr("id");
                      

                      $(this).css("left", posData[key]["left"]);
                      $(this).css("top", posData[key]["top"]);
                      $(this).css("width", posData[key]["width"]);
                      $(this).css("height", posData[key]["height"]);

                    }
                  );

                  console.log();
                }

                
            );

            

   } 
);