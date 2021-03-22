import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import python from './snake.svg'

class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <div className='logo'>
                    <Link to='/'><img src={python} className='logoImg' /></Link>
                    <h2>Piton</h2>
                    <p>Web Developer</p>
                </div>
                <div className='nav'>
                    <nav>
                        <Link to='/about'>Обо мне</Link>
                        <Link to='/skills'>Скилы</Link>
                        <Link to='/work'>Работы</Link>
                        <Link to='/contact'>Котнтакты</Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu