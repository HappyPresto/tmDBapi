import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getPopularMovie} from '../AC'

class MainPage extends Component {
    render() {
        const {popularMovie} = this.props
        console.log("---")
        console.log(popularMovie)
        console.log(popularMovie.entities)
        console.log(popularMovie.loading)
        if (popularMovie.loading) return "Loading"
        if (popularMovie.loaded) {
            console.log(popularMovie.entities.results)
            let result = popularMovie.entities.results.map((movie, i) => {
                console.log(movie.title)
                console.log(movie.overview)
                console.log(movie.release_date)
                /*console.log('https://image.tmdb.org/t/p/w185' + movie.)*/
            })
            return (
                <div>
                    <h1>hey</h1>
                </div>
            )
        }
        return (
            <div>
                {popularMovie}
                <input type = "submit" value = "popularMovies" onClick = {this.update} />
            </div>
        )
    }   

    update = e => {
        console.log(this.props)
        this.props.getPopularMovie()
    }
}

export default connect(state => ({
    popularMovie: state.popularMovie
}), {getPopularMovie})(MainPage)
/*export default connect(state => ({
    popularMovie: getPopularMovies(state)
}), {getPopularMovie})(MainPage)*/