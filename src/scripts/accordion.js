$(function() {
	$('.accordian li:odd:gt(0)').hide();

	$('.accordian li:odd').addClass('dimension');

	$('.accordian li:even:even').addClass('even');

	$('.accordian li:even:odd').addClass('odd');

	$('.accordian li:even').css('cursor', 'pointer');

	$('.accordian li:even').click( function() {

		var cur = $(this).next();
		$(this).toggleClass('active');

		var old = $('.accordian li:odd:visible');

		if ( cur.is(':visible') )
			return false;

		old.slideToggle(500);
		old.prev().toggleClass('active');

		cur.stop().slideToggle(500);


	} );
});