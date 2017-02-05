class Movies extends React.Component{
	getInitialState() {
		return{
			moviesToShow: []
		}
	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<div className="th-wrapper">
							<button className="btn btn-primary">Reset Search</button>
						</div>
						<div className="movie-rows">
							{/* movies go here*/}
						</div>
					</div>
				</div>
			</div>
		)
	}
}



ReactDOM.render(
	<Movies />
	document.getElementById('movie-gallery')
	)