import React, { Component } from 'react'
import './About.css'

class About extends Component {

    componentDidMount() {
        document.title = 'Обо мне';
    }

    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }
}

export default About