import './Footer.scss'
import React from 'react'

function Footer() {
    return (
        <div className='Footer'>
            <div className='left'>
                <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/310411141_1127075724862030_5587779737926837600_n.png?_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=biCYDo01CDcAX8E5tyK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRlsaLkoNLgNnpcxxe7VrKKpFEE7K51mEXnccZda3rTqQ&oe=636D9D7D' />
                <p>
                    Interactive lessons, "on-the-go"
                    practice, peer support.
                </p>
            </div>

            <div className='mid'>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Courses</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className='right'>
                <i className="fa-brands fa-facebook-messenger fa-2x"></i>
                <i className="fa-solid fa-phone fa-2x"></i>
                <i className="fa-solid fa-envelope fa-2x"></i>
                <p>facebook.com/tuyen.dung.haposoft</p>
            </div>
        </div>
    )
}

export default Footer