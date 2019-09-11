import {POPULAR_MOVIES, START, SUCCESS, FAIL} from '../constants'

var theMovieDBApiKey = "e5508ea1bc1c68bba86b598d4aea81c9"

export function getPopularMovie() {
    return (dispatch) => {
        dispatch({
            type: POPULAR_MOVIES + START
        })

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${theMovieDBApiKey}&language=en-US&page=1`)
            .then(function(res) {
                return res.json()
            })
            .then(data => dispatch({
                type: POPULAR_MOVIES + SUCCESS,
                payload: {data}
            }))
            .catch(error => dispatch({
                type: POPULAR_MOVIES + FAIL,
                payload: {error}
            }))
    }
}