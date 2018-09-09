import React, { Component } from "react";

class MovieComponent extends Component {
  
  render() {
//console.log(this.props.tempchosenMovieCastToDisplay.cast);
// const castInMovie = this.props.tempchosenMovieCastToDisplay.cast;
// console.log("hello cast",castInMovie[0].person);
const castInMovielistItems = this.props.tempchosenMovieCastToDisplay.cast.map((castInMovieObj) =>
//console.log(castInMovieObj.person)
<div className="card" key={castInMovieObj.person.ids.slug}>
<a className="header">
  <div>{castInMovieObj.person.name}</div>
</a>
</div>

 )



    return (
        this.props.tempchosenMovieCastToDisplay.cast?
      (<div>
        <div>CAST OF THE MOVIE
        <div className="ui eight stackable cards">
              {castInMovielistItems}
            </div>
          </div>
      </div> )
      :'Loading'
    )
  }
}

export default MovieComponent;
