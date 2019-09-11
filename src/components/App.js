import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import MainPage from './mainPage'

class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Header />
                <MainPage />
            </div>
        )
    }
}

export default App