import React, { Component } from 'react'
import './Work.css'

class Work extends Component {

    componentDidMount() {
        document.title = 'Работы';
    }

    render() {
        return (
            <div>
                <h1>Work</h1>
            </div>
        )
    }
}

export default Work