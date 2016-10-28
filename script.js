var posData = {};

$(  function() 
    {
           

            $(".draggable" ).draggable();

            $(".resizeable" ).resizable({
                autoHide: true, ghost: true
            });

            $("#map" ).resizable({
                autoHide: true, ghost: true
            });

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
                                         width: $(this).find("img").width(), 
                                         height: $(this).find("img").height()
                                     };
                    }
                  );

                   
                  var jsonData = JSON.stringify(posData);
/*
                  $.ajax({
                        url:"https://api.myjson.com/bins",
                        type:"POST",
                        data: jsonData,
                        contentType:"application/json; charset=utf-8",
                        dataType:"json",
                        success: function(data, textStatus, jqXHR){
                            var str = data["uri"];
                            var ind = str.lastIndexOf("/");
                            var id = str.substring(ind + 1); 
                            alert(id);
                        }
                  });
*/

                  $.ajax({
                        url:"https://api.myjson.com/bins/19hhe",
                        type:"PUT",
                        data: jsonData,
                        contentType:"application/json; charset=utf-8",
                        dataType:"json",
                        success: function(data, textStatus, jqXHR){
                            
                            alert(jsonData);
                        }
                  });
                
                  console.log();
                }

                
            );

            $('#posLoader').click(
                function() 
                {

                  $.get("https://api.myjson.com/bins/19hhe", function(data, textStatus, jqXHR) {
                      alert(textStatus);
                      posData = data;
                      alert(posdata +"");
                  });

                  
                  
                  $(".draggable").each( 
                    function() 
                    { 
                      //console.log($(this).text()); 
                      var key = $(this).attr("id");
                      

                      $(this).css("left", posData[key]["left"]);
                      $(this).css("top", posData[key]["top"]);

                      $img = $(this).find("img");
                      $img.width(posData[key]["width"]).resizable( "destroy" ).resizable(); 
                      $img.height(posData[key]["height"]).resizable( "destroy" ).resizable();  
                      
                    }
                  );

                  


                  console.log();
                }

                
            );

            

   } 
);