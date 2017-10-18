$(document).ready(function(){
	var rowsShown = 5;
	var rowsTotal = $('.row .col-lg-12.page-content').length;
	var numPages = Math.ceil(rowsTotal / rowsShown);

	$('#current_page').val(0);
	$('#show_per_page').val(rowsShown);

	$('.pagination').append('<li class="page-item previous"><a href="javascript:previous();">Previous</a></li>');
	for(i = 0; i < numPages; i++) {
		var pageNum = i + 1;
		$('.pagination').append('<li class="page-item link"><a class="page-link" href="javascript:go_to_page(' + i + ');" longdesc="' + i + '">' + pageNum + '</a></li>');
	}
	$('.pagination').append('<li class="page-item next"><span class="page-link"><a class="page-link" href="javascript:next();">Next</a></span></li>');

	$('.row .col-lg-12.page-content').hide();
	$('.row .col-lg-12.page-content').slice(0, rowsShown).show();
	$('li.page-item.link:first').addClass('active');
});

function previous() {
	new_page = parseInt($('#current_page').val()) - 1;

	if(new_page >= 0)
	{
		go_to_page(new_page);
	}
}

function next() {
	new_page = parseInt($('#current_page').val()) + 1;

	if($('.active').next('.link').length == true)
	{
		go_to_page(new_page);
	}
}

function go_to_page(page_num) {
	var show_per_page = parseInt($('#show_per_page').val());
	start_from = page_num * show_per_page;
	end_on = start_from + show_per_page;
	$('li.page-item').removeClass('active');
	$('.row .col-lg-12.page-content').css('opacity', '0.0').hide().slice(start_from, end_on).css('display', 'table').animate({opacity:1}, 300);
	$('a.page-link[longdesc=' + page_num + ']').parent().addClass('active');
	$('#current_page').val(page_num);
	$(window).scrollTop(0);
}
