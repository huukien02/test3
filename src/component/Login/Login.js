import './Login.scss'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import axios from 'axios'

function Login() {

    const style = {
        position: 'relative',
        top: '12px'
    }

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (username == '' || password == '') {
            alert('Nhập mật khẩu')
        }
        else {
            axios.post('https://servertraining.herokuapp.com/login', {
                username: username,
                password: password
            })
                .then(function (response) {
                    console.log(response.data.message);
                    console.log(response.data.token)


                    localStorage.setItem('token', response.data.token);
                    alert(response.data.message)


                    window.location = '/'

                })
                .catch(function (error) {
                    console.log(error);
                    alert(error.response.data)
                });
        }
    }


    return (
        <div>
            <Header />
            <div className='form'>
                <div className='Form_Login'>
                    <h1>Sign in to HapoLearn</h1>
                    <p>Username</p>
                    <input
                        placeholder='Enter username'
                        value={username}
                        onChange={e => { setUserName(e.target.value) }}
                    />
                    <p>Password</p>
                    <input
                        placeholder='Enter password'
                        type={'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br></br><br></br>
                    <button onClick={handleLogin} className='Login'>Login</button>
                    <a href='#'>Forgot password</a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>______________________________  <sup style={style}> Sign in with </sup>  _____________________________</p>
                    <br></br>
                    <button className='Google'>
                        <i className="fa-brands fa-google fa-2x"></i>
                        <i className="fa-solid fa-plus"></i>
                        <span> Google</span>
                    </button>
                    <br></br>
                    <br></br>
                    <p>____________________________  <sup style={style}> or New to HapoLearn </sup>  _________________________</p>
                    <br></br>
                    <button className='create'>

                        <span>
                            <NavLink to='/signup'>Create New Account</NavLink>
                        </span>
                    </button>
                </div>
            </div>
            <Footer />

        </div >
    )
}

export default Login