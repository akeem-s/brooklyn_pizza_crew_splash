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
          $('.volume-icon').html("<div class='volume-control tooltip'><a class='volume-icon' href='#''><i id='volume-on' class='fa fa-volume-off fa-4x' aria-hidden='true'></i></a></div>")
       }else{
          $video.prop('muted', true)
          $('.volume-icon').html("<div class='volume-control tooltip'><a class='volume-icon' href='#''><i id='volume-on' class='fa fa-volume-up fa-4x' aria-hidden='true'></i></a></div>")
       }

    }
    function mouseEffect(event){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      $("#mailchimp").show();
      $(".volume-icon").show();
      $("#mailchimp").delay(3000).fadeOut('slow');
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
      //On mouse move the subscription box for mailchimp disappears when typing. need to fix
      $("#video-section").on('mousemove',mouseEffect);
      $("#mailchimp").on('click',holdForm);

    }
    return {
      init: init

    }
})();

$(document).ready(header.init)

