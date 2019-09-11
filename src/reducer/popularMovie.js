import {POPULAR_MOVIES, SUCCESS, START, FAIL} from '../constants'
import { fail } from 'assert'

export default (popularMovies, action) => {
    const {type, payload} = action
    console.log(popularMovies)
    console.log(payload)
    console.log(type)
    if (payload != undefined) {console.log(payload.data)}
    switch (type) {
        case POPULAR_MOVIES + START:
            return "1"

        case POPULAR_MOVIES + SUCCESS:
            return payload.data

        case POPULAR_MOVIES + FAIL:
            return 'fail'
    }

    return 'popularMovies'
}