import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="http://localhost:3000/">
                   Home
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
    
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/payment/:method">
                                Dashboard
                            </a>
                        </li>
                    </ul>
    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="https://testtracker.covid19.dhhs.vic.gov.au/citizen-prefill">
                              Testing Registration Form
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.coronavirus.vic.gov.au/where-get-tested-covid-19">
                                More details 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
        )
    }
}
export default Header;