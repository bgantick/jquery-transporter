(function($){

  $.transporter = {

    init : function() {

      //clone an element and stick it somewhere else on the page
      if ( $('.move-me') ){

        var $nodeArray = $('.move-me');

        $nodeArray.each(function(){

          var $node = $(this);
          var nodeID = $node.data('move-name');
          var $mobile = $('.mobile-dump-container.' + nodeID);
          var $desktop = $('.desktop-dump-container.' + nodeID);

          if ( $(window).width() > $node.data('break') ) {
            $node.appendTo($desktop);
          }

          if ( $(window).width() < $node.data('break') ) {
            $node.appendTo($mobile);
          }

        });

      }

    }

  };

  // Global window.resize handler, throttled to 250ms
  $(window).resize( $.throttle( 250, function(){

    //HTML element cloner
    $.transporter.init();

  }));

  // Global document.ready handler
  $(document).ready(function(){

    //HTML element cloner
    $.transporter.init();

  });

})(jQuery);
