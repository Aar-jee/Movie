import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//import Test from './components/Test/Test'
import Patient from './components/AllMovies/AllMovies';
import Home from './components/Home/Home';
import MovieComponent from './components/MovieComponent/MovieComponent'
import CastInfoComponent from './components/CastInfoComponent/CastInfoComponent'
/**
 * class to be defined
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {

  /**Maintain the state for the application
 * Creates an instance of App.
 * @param {any} props 
 * @memberof App
 */
  constructor(props) {
    super(props);
    this.state =
      {
        trending: [],
        popular: []
      };

  }

  componentWillMount() {
    fetch('https://api.trakt.tv/movies/trending', {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": "e51e26eee57ea109e331c7e3b83f2cb1ef1b23b3f779b5c13e27650c58986ba5"
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ trending: response });

      })

    fetch('https://api.trakt.tv/movies/popular', {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": "e51e26eee57ea109e331c7e3b83f2cb1ef1b23b3f779b5c13e27650c58986ba5"
      }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ popular: response });

      })

    //tempchosenMovieCastToDisplay
    let slugMovieId = 'tron-legacy-2010';
    fetch('https://api.trakt.tv/movies/' + slugMovieId + '/people', {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": "e51e26eee57ea109e331c7e3b83f2cb1ef1b23b3f779b5c13e27650c58986ba5"
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ tempchosenMovieCastToDisplay: response });
        //console.log("chosenMovieCastToDisplay", this.state.tempchosenMovieCastToDisplay)
      })

    //tempCastPersonalInfoDetails
    let slugCastId = 'gary-oldman';
    fetch('https://api.trakt.tv/people/' + slugCastId + '?extended=full', {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": "e51e26eee57ea109e331c7e3b83f2cb1ef1b23b3f779b5c13e27650c58986ba5"
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ tempCastPersonalInfoDetails: response });
        //console.log("chosenMovieCastToDisplay", this.state.tempchosenMovieCastToDisplay)
      })


    //tempAlsoAppearedIn
    let slugActorId = 'garrett-hedlund';
    fetch('https://api.trakt.tv/people/' + slugActorId + '/movies', {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": "e51e26eee57ea109e331c7e3b83f2cb1ef1b23b3f779b5c13e27650c58986ba5"
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ tempAlsoAppearedIn: response });
        //console.log("chosenMovieCastToDisplay", this.state.tempchosenMovieCastToDisplay)
      })
  }
  /**
   * method to fetch the data from api
   * 
   * @memberof App
   */
  componentDidMount() {

  }


  /**
   * SwitchHandler for handle event.
   * 
   * @memberof App
   */
  // switchNameHandler = () => {
  //   this.setState({
  //     persons: [
  //       { name: "5", value: 55 },
  //       { name: "2", value: 22 },
  //       { name: "6", value: 66 }
  //     ]
  //   }
  //   )
  // }

  /**
   * 
   *To handle the event of name change event 
   * @memberof App
   */
  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: event.target.value, value: 5545 },
  //       { name: event.target.value, value: 2224 },
  //       { name: event.target.value, value: 6677 }
  //     ]
  //   }
  //   )
  // }



  /**
   * main method to render
   * 
   * @returns 
   * @memberof App
   */
  render() {
    return (

      < div className="App" >
        <Header />
        <span><a href="/movie">movies</a></span>{' '}
        <BrowserRouter>
          <div>
            <Route exact={true} path='/' render={() => (
              <div className="App1">
                <h3>Home </h3>
              </div>
            )} />
            <Route exact={true} path='/home' render={() => (
              <div className="App3">

                <Home />
              </div>
            )} />
            <Route exact={true} path='/movie' render={() => (
              <div className="App3">
                <h3>Movie Page</h3>
                {this.state.trending ?
                  <Patient
                    trending={this.state.trending}
                    popular={this.state.popular}

                  />
                  : ''}
              </div>
            )} />

            <Route exact={true} path='/moviepluscastComponent' render={() => (
              <div className="App3">
                <h3>moviepluscastComponent Page</h3>
                {this.state.tempchosenMovieCastToDisplay ?
                  <MovieComponent
                    tempchosenMovieCastToDisplay={this.state.tempchosenMovieCastToDisplay}
                  />
                  : ''}
              </div>
            )} />

            <Route exact={true} path='/castPersonalInfoDetails' render={() => (
              <div className="App3">
                <h3>moviepluscastComponent Page</h3>
                {this.state.tempCastPersonalInfoDetails ?
                  <CastInfoComponent
                    tempCastPersonalInfoDetails={this.state.tempCastPersonalInfoDetails}
                    tempAlsoAppearedIn={this.state.tempAlsoAppearedIn}
                  />
                  : ''}
              </div>
            )} />

          </div>
        </BrowserRouter>

      </div >
    );
  }
}
export default App;
