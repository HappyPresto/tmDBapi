import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    state = {
        search: ""
    }
    
    render() {
        return (
            <header>
                <div className = "content header">
                    <p className = "header__logo">
                        The Movie DB API
                    </p>
                    <nav>
                        <ul className = "header__nav">
                            <li className = "header__nav_el">
                                Page
                            </li>
                        </ul>
                        <input type = "text" value = {this.state.search} onChange = {this.handleSearchChange} />
                        <input type = "submit" value = "Search" onClick = {this.search}/>
                    </nav>
                </div>
            </header>
        )
    }

    handleSearchChange() {

    }

    search() {
        
    }

}

export default Header