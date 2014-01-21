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