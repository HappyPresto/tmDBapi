import {POPULAR_MOVIES, SUCCESS, START, FAIL} from '../constants'
import {OrderedMap, Record} from 'immutable'

const PopularState = Record({
    loading: false,
    loaded: false,
    entities: []
})

const defaultPopular = new PopularState()

export default (popularMovies = defaultPopular, action) => {
    const {type, payload} = action
    console.log("---redstart---")
    console.log(popularMovies)
    console.log(payload)
    console.log(type)
    console.log("---redend---")
    switch (type) {
        case POPULAR_MOVIES + START:
            return popularMovies
                .set('loading', true)
                

        case POPULAR_MOVIES + SUCCESS:
            return popularMovies
                .set('loading', false)
                .set('loaded', true)
                .set('entities', payload.data)




        case POPULAR_MOVIES + FAIL:
            return 'fail'
    }

    return popularMovies
}