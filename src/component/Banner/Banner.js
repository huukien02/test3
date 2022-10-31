import './Banner.scss'
import React from 'react'

function Banner() {
    return (
        <div className='Banner'>
            <h1>Learn Anytime, Anywhere</h1>
            <h2>at HapoLearn   !</h2>
            <p>
                Interactive lessons, "on-the-go"
                practice, peer support.
            </p>
            <button className='btn1'>
                <p>Start Learning Now!</p>
            </button>
            <div className='Message'>
                <h1 className='icon'></h1>
                <p className='name'>HapoLearn</p>
                <div className='title'>
                    <h3>
                        HapoLearn xin chào bạn.
                        Bạn có cần chúng tôi hỗ trợ gì không?
                    </h3>
                    <button>
                        <i className="fa-brands fa-facebook-messenger"></i> Đăng nhập vào Messenger
                    </button>
                    <p>Chat với HapoLearn trong Messenger</p>
                </div>
            </div>
            <i id='message_small' className="fa-brands fa-facebook-messenger"></i>
        </div>
    )
}

export default Banner