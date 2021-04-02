import React, { Component } from 'react'
import './About.css'

class About extends Component {

    componentDidMount() {
        document.title = 'Обо мне';
    }

    render() {
        return (
            <div className='About'>
                <div className='text'>
                    <p>Я Full-stack разработчик из России.</p>
                    <p>У меня есть серьезная страсть к Front-End и созданию интуитивно понятного, динамичного пользовательского сайта. Интересует весь спектр фронтенда и работа над амбициозными проектами с позитивными людьми.</p>
                    <p>Так же есть увлечение к Back-End.</p>
                    <p>Давай сделаем что-нибудь особенное.</p>
                </div>
                <div className='photo'>

                </div>
            </div>
        )
    }
}

export default About