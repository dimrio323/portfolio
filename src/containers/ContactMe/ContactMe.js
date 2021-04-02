import axios from 'axios'
import React, { Component } from 'react'
import axiosBack from '../../axios/axios'
import vk from './vk.svg'
import telegram from './telegram.svg'
import './ContactMe.css'
import { Link } from 'react-router-dom'

class ContactMe extends Component {

    componentDidMount() {
        document.title = 'Контакты';
    }

    render() {

        const send = (e) => {
            e.preventDefault()
            const dataReqest = new FormData()
            let name = document.querySelector('.name').value
            let email = document.querySelector('.email').value
            let topic = document.querySelector('.topic').value
            let message = document.querySelector('.message').value
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();

            today = dd + '.' + mm + '.' + yyyy;
            dataReqest.append('name', name)
            dataReqest.append('email', email)
            dataReqest.append('topic', topic)
            dataReqest.append('message', message)
            dataReqest.append('messagedate', today)
            axiosBack.post('/contact/send', dataReqest)
            .then(response => {
                console.log(response.data)
                if (response.data.data.success) {
                    // window.alert(response.data.data.success)
                    document.querySelector('.name').value = ''
                    document.querySelector('.email').value = ''
                    document.querySelector('.topic').value = ''
                    document.querySelector('.message').value = ''
                    axios.get('https://api.telegram.org/bot1749802640:AAFK8oGysgZ0GAqleIaK4Z70DxKrWMtAWzM/sendMessage?chat_id=-1001239600340&text=Имя: ' + name + '%0AПочта: ' + email + '%0AТема сообщения: ' + topic + '%0AТекст сообщения: ' + message + '%0AДата сообщения: ' + today)
                }
                if (response.data.data.error){
                    window.alert(response.data.data.error)
                }
            }).catch(err => {
                console.log(err)
            })
        }

        return (
            <div className='ContactMe'>
                <div className="content" >
                    <div className="form">
                        <p className='titleMe'>Контакты</p>
                        <p className='textMe'>Меня интересуют возможности фрилансера - особенно амбициозные или крупные проекты. Однако, если у вас есть другой запрос или вопрос, не стесняйтесь использовать эту форму.</p>
                        <form method='POST'>
                            <div className='info'>
                                <input className='name' name='name' placeholder='Имя' />
                                <input className='email' name='email' placeholder='Почта' />
                            </div>
                            <input className='topic' name="topic" placeholder='Тема' />
                            <textarea className='message' name='message' placeholder='Сообщение' />
                            <button onClick={send}>Отправить</button>
                        </form>
                    </div>
                    <div className="contact">
                        <div className='links'>
                            <Link to="https://vk.com/piton56"><img alt='' src={vk} className="icon"/>
                            <p>Моя страница</p></Link>
                        </div>
                        <div className='links'>
                            <Link to="https://t.me/pitonishe56"><img alt='' src={telegram} className="icon"/>
                            <p>Мой телеграм</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe