$(function (){
	$('.bar').click( function(){
		$('.menu-list').slideToggle();
	  });
    $('.select-left').styler();
    $('.select-right').styler();
    $('.location').styler();
    $('.popup__play-link').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	  }
	  )
	  wow.init();
});