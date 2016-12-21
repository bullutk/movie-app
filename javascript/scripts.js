var genreArray = []

genreArray[28] = 'item Action';
genreArray[12] = 'item Adventure';
genreArray[16] = 'item Animation';
genreArray[35] = 'item Comedy';
genreArray[80] = 'item Crime';
genreArray[99] = 'item Documentary';
genreArray[18] = 'item Drama';
genreArray[10751] = 'item Family';
genreArray[14] = 'item Fantasy';
genreArray[36] = 'item History';
genreArray[27] = 'item Horror';
genreArray[10402] = 'item Music';
genreArray[9648] = 'item Mystery';
genreArray[10749] = 'item Romance';
genreArray[878] = 'item Science Fiction';
genreArray[10770] = 'item TV Movie';
genreArray[53] = 'item Thriller';
genreArray[10752] = 'item War';
genreArray[37] = 'item Western';

$(document).ready(function(){
	console.log("test")
	// the base url for all api calls
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	// the base url for searching
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
	// now playing constant url
	const nowPlayingUrl = apiBaseUrl + 'movie/now_playing?api_key=' + apiKey;
	$.getJSON(nowPlayingUrl, function(nowPlayingData){
		console.log(nowPlayingData);
		var nowPlayingHTML = '';
		for(let i = 0; i < nowPlayingData.results.length; i++){
			var poster = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			var genre = imageBaseUrl + nowPlayingData.results[i].genre_ids;
			var genreCodeArray = nowPlayingData.results[i].genre_ids;
			var genreString = '';
			for(let j = 0; j<genreCodeArray.length; j++){
				var currentGenreCode = genreCodeArray[j];
				genreString += genreArray[currentGenreCode] + ' ';
			}
			console.log(genreString);
			nowPlayingHTML += '<div class="col-sm-3 '+genreString+'">';
				nowPlayingHTML += '<img src="'+poster+'">';
				// for movie names
				nowPlayingHTML += '<div></div>';
			nowPlayingHTML += '</div>';
		}
		$('#movie-grid').html(nowPlayingHTML);
			//activate isotope with jquery code
			$('.main-iso').isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows'
			});
			//isotope click function
			$('.iso-nav ul li').click(function(){
				$('.iso-nav ul li').removeClass('active');
				$(this).addClass('active');

				var selector = $(this).attr('data-filter');
				console.log(selector);
				$('.main-iso').isotope({
					filter: selector
				});
				return false;
			});


	});
});






