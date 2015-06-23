

$(function () {
	$('.thumbnail').on('click', function(event) {
		var $overlay = $('<div class="overlay">');
		var $modal   = $('<div class="modal">');

		var img   = $(event.currentTarget).data("img");
		var width = $(event.currentTarget).data("width");
		var $img  = $('<img src="images/' + img + '">');
		var video = $(event.currentTarget).data("video");


		$modal.append($img);
		if (video) {
			var $controlsBox = $('<div class="controls">');
			var $vidLink = $('<a href="#" class="video" data-video="' + video + '">play timelapse!</a>');
			
			$controlsBox.append($vidLink);
			$modal.append($controlsBox);
		}
		
		$('body').append($overlay, $modal);
		$modal.css('width', width);
		$overlay.on('click', function (event) {
			$modal.remove();
			this.remove();
		})
		
		
		$('a').on('click', function (event) {
			event.preventDefault();
			var video  = $(event.currentTarget).data('video');
			var $video = $('<video autoplay controls src="videos/' + video + '">' );
			$modal.empty();
			$modal.append($video);
			$modal.css('width', 1000);
		})
			
	});
});