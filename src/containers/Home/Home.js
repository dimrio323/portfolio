import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

    componentDidMount() {
        document.title = 'Главная';
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default Home