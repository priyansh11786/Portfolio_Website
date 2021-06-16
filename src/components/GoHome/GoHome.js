import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import homeIconBlack from './../../Asset/home_black.png'
import homeIconWhite from './../../Asset/home_white.png'
import './GoHome.css'

class GoHome extends Component {
    navigateToHome = () => {
        const {history} = this.props
        history.push('/')
    }

    render() {
        const {location} = this.props
        const whiteBtn = location.pathname ==='/'

        return (
           <button className={`go-home-btn ${whiteBtn ? 'white-bkg': 'gradient-bkg'}`}
                    onClick={this.navigateToHome}>
               <img 
                  src={whiteBtn ? homeIconBlack : homeIconWhite}
                  className="home-icon"
                  alt="home-icon"
                  />
           </button>
        )
    }
}

export default withRouter(GoHome)
