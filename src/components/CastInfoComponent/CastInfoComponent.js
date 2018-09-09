//https://api.trakt.tv/people/gary-oldman?extended=full   slug= gary-oldman

import React, { Component } from "react";

class CastInfoComponent extends Component {
  
  render() {

const tempAlsoAppearedInThis = this.props.tempAlsoAppearedIn.cast.map((tempAlsoAppeared) =>
 //console.log(tempAlsoAppeared.movie)
<div className="card" key={tempAlsoAppeared.movie.ids.slug}>
        <a className="header">
          <div>{tempAlsoAppeared.movie.title}</div>
          <div>{tempAlsoAppeared.movie.year}</div>
        </a>
      </div>
// <div classNameName="card" key={castInMovieObj.person.ids.slug}>
// <a classNameName="header">
//   <div>{castInMovieObj.person.name}</div>
//   <div>{castInMovieObj.person.birthday}</div>
// </a>
// </div>

 )



    return (
        this.props.tempCastPersonalInfoDetails?
      ( 
                <div className="ui link cards">
           
                    <div className="">
                        <div className="header">{this.props.tempCastPersonalInfoDetails.name}</div>
                        <div className="meta">
                            <div>
                                <strong>DOB:</strong> {this.props.tempCastPersonalInfoDetails.birthday}
                            </div>
                            <div>
                                <strong>BIRTHPLACE:</strong> {this.props.tempCastPersonalInfoDetails.birthplace}
                            </div>
                        </div>
                        <div className="meta">
                            <strong>DEATH:</strong> {this.props.tempCastPersonalInfoDetails.death ? this.props.tempCastPersonalInfoDetails.death : 'ALIVE'}
                        </div>
                        <div className="description">
                            <strong>BIOGRAPHY:</strong>
                            <div></div>
                            {this.props.tempCastPersonalInfoDetails.biography}
                        </div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="user icon"></i>
                            {this.props.tempCastPersonalInfoDetails.homepage}
                        </span>
                    </div>
                    <div className="ui ten stackable cards">
                        {tempAlsoAppearedInThis}
                    </div>

                
                </div>)
      :'Loading'
    )
  }
}

export default CastInfoComponent;
