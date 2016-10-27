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
                      console.log($(this).text()); 
                    }
                  );
                }
            );
   } 
);