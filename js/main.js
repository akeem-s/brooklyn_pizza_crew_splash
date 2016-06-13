$(document).ready(function() {
  $("video").prop('muted', true);

  $("#unmute-button").click( function (){
    if( $("video").prop('muted') ) {
      $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });
  
  // $('#unmute-button').delay(5000).fadeOut('slow');
  $('video').click(function(){this.paused?this.play():this.pause();});
});
