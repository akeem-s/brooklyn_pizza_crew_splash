$(document).ready(function() {
  $('#unmute-button').hide()
  $("#mailchimp").hide();
  $("video").prop('muted', true);

  $("#unmute-button").click( function (){
    if( $("video").prop('muted') ) {
      $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });
  
  
  $('video').click(function(){this.paused?this.play():this.pause();});

  $("#video-section").mousemove(function(event){
    $('#unmute-button').show();
    $("#mailchimp").show();
    $("#mailchimp").delay(2000).fadeOut('slow');
    $('#unmute-button').delay(2000).fadeOut('slow');
  })
});
