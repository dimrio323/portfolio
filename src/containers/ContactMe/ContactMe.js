import React, { Component } from 'react'
import './ContactMe.css'

class ContactMe extends Component {
    render() {
        return (
            <div className='ContactMe'>
                <p className='titleMe'>Контакты</p>
                <p className='textMe'>Меня интересуют возможности фрилансера - особенно амбициозные или крупные проекты. Однако, если у вас есть другой запрос или вопрос, не стесняйтесь использовать эту форму.</p>
                <form method='POST' action="http://partfoliobackend.api:3003/">
                    <div className='info'>
                        <input name='name' placeholder='Имя' />
                        <input name='email' placeholder='Почта' />
                    </div>
                    <input name="topic" placeholder='Тема' />
                    <textarea name='message' placeholder='Сообщение' />
                    <button>Отправить</button>
                </form>
            </div>
        )
    }
}

export default ContactMe