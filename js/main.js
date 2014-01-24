var $items = $('.items img');

var switchItem = function(current, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(current).hide().attr('data-state', '');
		$items.eq(incoming).attr('data-state', 'current');
	});
};
	

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function() {
	var current = $items.filter ('[data-state="current"]').index();
	var next = current + 1;
	
	if (next > $items.length -1) {
		next = 0;
	}
	
	switchItem(current, next);
});

$items.filter(':not([data-state="current"])').hide();

$('.previous').on('click', function() {
	var current = $items.filter ('[data-state="current"]').index();
	var previous = current -1;
	
	if (previous > $items.length -1) {
		previous = 0;
	}
	
	switchItem(current, previous);
});

var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/81447092?color=c9ff23&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	/* When triggering built-in JS functions we need to bypass jQuery
	In order to get to the raw JS element we cas use .get()
	
	Example:
	$videoDialog.show() - will trigger jQuery's show function
	$videoDialog.get(0).show - will get the first raw JS element and trigger its native show function
	*/
	$videoDialog.get(0).showModal();
	/*
	.show() allowes uers to interact with stuff behind the dialog
	.showModal() disables user interaction behind the dialog
	*/
});

$('.btn-close').on('click', function (){
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});