import React, { Component } from "react";
import MovieComponent from '../MovieComponent/MovieComponent'

class AllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
      chosenMovieCastToDisplay: []
    };
//this.chosenMovieToDisplay = this.chosenMovieToDisplay.bind(this)

  }
      
    chosenMovieCastToDisplay = () =>
    {
      let slugId = 'the-dark-knight-2008';
    fetch('https://api.trakt.tv/movies/'+slugId+'/people',{
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version" : 2,
        "trakt-api-key": "e51e26eee57ea109e331c7e3b83f2cb1ef1b23b3f779b5c13e27650c58986ba5"
        // "Content-Type": "application/x-www-form-urlencoded",
    }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ chosenMovieCastToDisplay: response });
        //console.log("chosenMovieCastToDisplay", this.state.chosenMovieCastToDisplay)
      })
    }
   

  componentDidMount() {


  }


  render() {
    // movies.movie.ids.slug
    const trendinglistItems = this.props.trending.map((trendingMovies) =>
      <div className="card" key={trendingMovies.movie.ids.slug}>
        <a className="header" onClick={this.chosenMovieCastToDisplay}>
          <div>{trendingMovies.movie.title}</div>
          <div>{trendingMovies.movie.year}</div>
        </a>
      </div>
    )

    const popularlistItems = this.props.popular.map((popularMovies) =>
      <div className="card" key={popularMovies.ids.slug}>
        <a className="header" href="/home">
          <div>{popularMovies.title}</div>
          <div>{popularMovies.year}</div>
        </a>
      </div>
    )
    return (
      this.props?
      (<div>
        <div>TRENDING
      <div className="ui ten stackable cards">
            {trendinglistItems}
          </div>
        </div>
        <div>POPULAR
      <div className="ui ten stackable cards">
            {popularlistItems}
          </div>
        </div>
      </div> )
      :'Loading'
    )
  }
}

export default AllMovies;
