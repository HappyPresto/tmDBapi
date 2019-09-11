import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getPopularMovie} from '../AC'

class MainPage extends Component {
    render() {
        console.log("---")
        console.log(this.props)
        return (
            <div>
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