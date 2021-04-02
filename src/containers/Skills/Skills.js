import Chart from 'chart.js';
import React, {Component} from 'react'
import axios from '../../axios/axios';
import './Skills.css'
import html5 from './html5.svg'
import css3 from './css.svg'
import js from './js.svg'
import Reactjs from './Reactjs.svg'
import php from './php.svg'
import scss from './sass.svg'
import mysql from './mysql.svg'
import python from './python.svg'

class Skills extends Component {
    state = {
        Skills: {
            frontEnd: 0,
            backEnd: 0,
            dizayn: 0,
            html: 0,
            css: 0,
            js: 0,
            reactjs: 0,
            php: 0,
            scss: 0,
            sqlskill: 0,
            python: 0
        }
    }

    componentDidMount() {
        document.title = 'Скилы';
        axios.get('/admin/skills?type=value')
        .then(response => {
            // console.log(response.data.data[0])
            this.setState({
                Skills: response.data.data[0]
            })

            var ctx = document.getElementById('all').getContext('2d');
            var HTML = document.getElementById('HTML').getContext('2d');
            var CSS = document.getElementById('CSS').getContext('2d');
            var js = document.getElementById('js').getContext('2d');
            var reactjs = document.getElementById('reactjs').getContext('2d');
            var php = document.getElementById('php').getContext('2d');
            var scss = document.getElementById('scss').getContext('2d');
            var sql = document.getElementById('sql').getContext('2d');
            var python = document.getElementById('python').getContext('2d');

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Front-End', 'Back-End', 'Dizayn'],
                    datasets: [
                    {
                        data: [this.state.Skills.frontEnd, this.state.Skills.backEnd, this.state.Skills.dizayn],
                        backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)'
                        ]
                    }
                    ]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        position: 'top',
                        labels: {
                            fontColor: '#fff',
                            fontFamily: 'PantonSemiBoldItalic',
                            fontSize: 20
                        }
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        callbacks: {
                            label: function(tooltipItems, data) {
                                return data.labels[tooltipItems.index];
                            }
                        }
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

            new Chart(HTML, {
                type: 'pie',
                data: {
                    labels: ['HTML'],
                    datasets: [
                    {
                        data: [this.state.Skills.html, 100-this.state.Skills.html],
                        backgroundColor: [
                        'rgb(221, 75, 37)'
                        ]
                    }
                    ]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false,
                }
            });

            new Chart(CSS, {
                type: 'pie',
                data: {
                    labels: ['CSS'],
                    datasets: [{
                        data: [this.state.Skills.css, 100-this.state.Skills.css],
                        backgroundColor: [
                        'rgb(37, 75, 221)'
                        ],
                        pointHoverBackgroundColor: 'rgb(37 75 221)'
                    }]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

            new Chart(js, {
                type: 'pie',
                data: {
                    labels: ['JS'],
                    datasets: [{
                        data: [this.state.Skills.js, 100-this.state.Skills.js],
                        backgroundColor: [
                        '#ffff00'
                        ],
                        pointHoverBackgroundColor: 'rgb(37 75 221)'
                    }]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

            new Chart(reactjs, {
                type: 'pie',
                data: {
                    labels: ['ReactJS'],
                    datasets: [{
                        data: [this.state.Skills.reactjs, 100-this.state.Skills.reactjs],
                        backgroundColor: [
                        '#61dafb'
                        ],
                        pointHoverBackgroundColor: 'rgb(37 75 221)'
                    }]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

            new Chart(php, {
                type: 'pie',
                data: {
                    labels: ['PHP'],
                    datasets: [{
                        data: [this.state.Skills.php, 100-this.state.Skills.php],
                        backgroundColor: [
                        '#7377ad'
                        ],
                        pointHoverBackgroundColor: 'rgb(37 75 221)'
                    }]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

            new Chart(scss, {
                type: 'pie',
                data: {
                    labels: ['scss/sass'],
                    datasets: [{
                        data: [this.state.Skills.scss, 100-this.state.Skills.scss],
                        backgroundColor: [
                        '#c76494'
                        ],
                        pointHoverBackgroundColor: 'rgb(37 75 221)'
                    }]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

            new Chart(sql, {
                type: 'pie',
                data: {
                    labels: ['sql'],
                    datasets: [{
                        data: [this.state.Skills.sqlskill, 100-this.state.Skills.sqlskill],
                        backgroundColor: [
                        '#007979'
                        ],
                        pointHoverBackgroundColor: 'rgb(37 75 221)'
                    }]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

            new Chart(python, {
                type: 'pie',
                data: {
                    labels: ['sql'],
                    datasets: [{
                        data: [this.state.Skills.python, 100-this.state.Skills.python],
                        backgroundColor: [
                        '#ffc107'
                        ],
                        pointHoverBackgroundColor: 'rgb(37 75 221)'
                    }]
                },
                options: {
                    rotation: -Math.PI,
                    cutoutPercentage: 80,
                    circumference: Math.PI,
                    animationDuration: 10000,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 3000
                    },
                    tooltips: {
                        caretSize: 5,
                        enabled: false
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            });

        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className='Skills'>
                <div className='all'>
                    <h1>Мои навыки:</h1>
                    <p style={{width: '50%', fontSize: '25px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos.</p>
                    <canvas id='all' style={{ width: 500, height: 250, marginLeft: 'auto', marginRight: '60px', marginTop: '-200px' }}/>
                </div>
                <div className='skil'>
                    <div className='HTML'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>HTML</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='50px' src={html5}/>
                            <canvas id='HTML' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                    <div className='CSS'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>CSS</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='50px' src={css3}/>
                            <canvas id='CSS' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                    <div className='scss'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>SCSS / SASS</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='80px' style={{left: '37%'}} src={scss}/>
                            <canvas id='scss' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                    <div className='js'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>JS</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='50px' src={js}/>
                            <canvas id='js' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                    <div className='reactjs'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>ReactJS</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='80px' style={{left: '37%'}} src={Reactjs}/>
                            <canvas id='reactjs' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                    <div className='php'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>PHP</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='80px' style={{left: '37%'}} src={php}/>
                            <canvas id='php' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                    <div className='python'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>Python</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='80px' style={{left: '37%'}} src={python}/>
                            <canvas id='python' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                    <div className='sql'>
                        <div className='text' style={{width: '95%'}}>
                            <h1>SQL</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi, itaque accusantium ducimus perferendis delectus facilis pariatur blanditiis tempore architecto, rem, eveniet consequatur velit aliquid quod possimus recusandae dolorem eos</p>
                        </div>
                        <div className='svg'>
                            <img alt='' width='80px' style={{left: '37%'}} src={mysql}/>
                            <canvas id='sql' style={{ width: '300px', height: '150px', display: 'block', margin: '0 50px 0 auto' }}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills