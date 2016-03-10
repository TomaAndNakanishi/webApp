$( function() {
  $( "body").append( '<button id="btn">Please Click!!!!</button>');

  $( "#btn").on( 'click', function( eve) {
    $( "body").append( "<h1>Happy 乳 Year!!!</h1>");
  });

});

