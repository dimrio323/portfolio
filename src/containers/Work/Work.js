import React, { Component } from 'react'
import './Work.css'
// import css from '../Skills/css.svg'
import axios from '../../axios/axios';
// import { nanoid } from 'nanoid';

class Work extends Component {
    state={
        work: []
    }

    componentDidMount() {
        document.title = 'Работы';

        axios.get('work/send?type=all')
        .then(response => {
            // console.log(response.data.data[0])
            this.setState({
                work: response.data.data[0]
            })
            console.log(this.state.work);
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const logo = require('../Skills/css.svg')
        return (
            <div className='Work'>
                <h1 className='title'>Мои работы</h1>
                <div className='content'>
                    {/* {
                        this.state.work.map((work) => {
                            return (
                                <div className='item' key={nanoid()}>
                                    <p className='name' key={nanoid()}>{work.projectName}</p>
                                    <div className='img'  key={nanoid()}>
                                        <p key={nanoid()}>{work.logo}</p>
                                        // <img src={css}/>
                                    </div>
                                    <button key={nanoid()}>Просмотр</button>
                                </div>
                            )
                        })
                    } */}
                    <div className='item'>
                        <p className='name'>Имя проекта</p>
                        <div className='img'>
                            <img src={logo} />
                        </div>
                        <button>Просмотр</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work