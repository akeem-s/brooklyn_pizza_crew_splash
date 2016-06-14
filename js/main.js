var header = (function(){
var $video, $volumeControl;

    function videoAudio(){
      $('video').click(function(){this.paused?this.play():this.pause();});
    }
    function volumeOn(event){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
       if($video.prop('muted') == true){
          $video.prop('muted', false)
          $('.volume-icon').html("<div class='volume-control tooltip'><a class='volume-icon' href='#''><span class='tooltiptext'>Click to mute</span><i id='volume-on' class='fa fa-volume-off fa-4x' aria-hidden='true'></i></a></div>")
       }else{
          $video.prop('muted', true)
          $('.volume-icon').html("<div class='volume-control tooltip'><a class='volume-icon' href='#''><span class='tooltiptext'>Click for sound</span><i id='volume-on' class='fa fa-volume-up fa-4x' aria-hidden='true'></i></a></div>")
       }

    }
    function mouseEffect(event){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      $("#mailchimp").show();
      $(".volume-icon").show();
      // $("#mailchimp").delay(3000).fadeOut('slow');
      $('.volume-icon').delay(3000).fadeOut('slow');
    }
    function holdForm(event){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      // $("#mailchimp").unbind('mousemove').show().delay(10000);
      // $("#mailchimp").find('.required').show().delay(5000);
        
    }

    function init(){
      videoAudio();
      $video = $('video');
      $video.prop('muted',true)
      $volumeControl = $('.volume-icon');
      $volumeControl.on('click',volumeOn);
      $("#video-section").on('mousemove',mouseEffect);
      $("#mailchimp").on('click',holdForm);

    }

    return {
      init: init

    }

})();

$(document).ready(header.init)

// $(document).ready(function() {
//   $('#unmute-button').hide()
//   $("#mailchimp").hide();
//   $("video").prop('muted', true);
  
//   // $("#unmute-button").click( function (){
//   //   if( $("video").prop('muted') ) {
//   //     $("video").prop('muted', false);
//   //   } else {
//   //     $("video").prop('muted', true);
//   //   }
//   // });

//   $("#volume-on").click(function(event){
//       $("video").prop('muted', false);
//       $("#volume-on").hide()
//       $("#volume-off").show()
//   })

//   $("#volume-off").click(function(event){
//       $("video").prop('muted', true);
//       $("#volume-off").hide()
//       $("#volume-on").show()
//   })
  
//   $('video').click(function(){this.paused?this.play():this.pause();});

//   $("#video-section").mousemove(function(event){
//     $('#unmute-button').show();
//     $("#mailchimp").show();
//     $("#mailchimp").delay(2000).fadeOut('slow');
//     $('#unmute-button').delay(2000).fadeOut('slow');
//   })
// });
