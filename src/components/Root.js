import React from 'react'
import PropTypes from 'prop-types'
import './index.module.css'
import App from './App'
import store from '../store'
import {Provider} from 'react-redux'

function Root() {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

Root.propTypes = {

}

export default Root