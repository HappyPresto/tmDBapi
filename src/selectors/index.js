import {createSelector} from 'reselect'
import {create} from 'domain'


const popularMovies = state => state.popularMovie

export const getPopularMovies = createSelector(popularMovies, (popularMovies) => {
    console.log(popularMovies)
    return popularMovies
})