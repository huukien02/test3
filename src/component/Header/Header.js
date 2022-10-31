import './Header.scss'

import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

function Header() {
    const [show, setShow] = useState(false)

    const handleShowMenu = () => {
        setShow(prev => !prev)
    }



    return (
        <div className='Header'>

            <div className='Logo'>
                <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/305769195_634412011603376_3370918847146201639_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=EQwIU-qrsK0AX-2-er7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKPu1JlYslk8Bmhd-Y2GB6HZtzkZ1yKGVWjk6Au01kK-w&oe=636C7EA2' />
            </div>

            <div className='Menu'>
                <ul>
                    <li>
                        <NavLink to='/' end >HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/listcourses'>ALL COURSES</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>LOGIN</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile'>PROFILE</NavLink>
                    </li>

                </ul>
            </div>
            <i onClick={handleShowMenu} className="fa-solid fa-bars"></i>

            {show ? (<div className='Menu_2'>
                <ul>
                    <li>HOME</li>
                    <li>All COURSES</li>
                    <li>LOGIN/REGISTER</li>
                    <li>PROFILE</li>
                </ul>
            </div>) : ('')}

        </div>
    )
}

export default Header