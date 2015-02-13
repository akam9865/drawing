

$(function () {
	$('.thumbnail').on('click', function(event) {
		var $overlay = $('<div class="overlay">');
		var $modal   = $('<div class="modal">');
		var img  = $(event.currentTarget).data("img");
		var $img = $('<img src="images/' + img + '">');

		$modal.append($img);
		$('body').append($overlay, $modal);
		
		$overlay.on('click', function (event) {
			$modal.remove();
			this.remove();
		})
	});
});