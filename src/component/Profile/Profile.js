import './Profile.scss'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'

function Profile() {
    const [data, setData] = useState([])


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [about, setAbout] = useState('')


    useEffect(() => {
        var token = localStorage.getItem("token");

        async function getData() {
            const res = await axios.get(`https://servertraining.herokuapp.com/api/listusers`, { 'headers': { 'Authorization': token } })
            return res;
        }
        getData().then((res) => setData(res.data)).catch(err => {
            console.log(err);
        })
    }, [])

    const handleEdit = () => {
        var id = localStorage.getItem("token");

        if (name == '' || email == '' || date == '' || phone == '' || address == '' || about == '') {
            alert('Không được bỏ trống')
        }
        else {
            axios.post('https://servertraining.herokuapp.com/edit/profile', {
                id: id,
                name: name,
                email: email,
                date: date,
                phone: phone,
                address: address,
                about: about
            })
                .then(function (response) {
                    console.log(response);
                    alert(response.data)
                    window.location.reload();


                })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }

    const handleLogout = () => {
        if (window.confirm("Bạn muốn đăng xuất")) {
            localStorage.removeItem("token");
            window.location.reload(false);
        }
    }

    return (
        <>
            {data.length > 0 ? (
                <div>
                    <Header />
                    <div className='form_profile'>

                        <div className='left'>
                            <img onClick={handleLogout} src='https://scontent.xx.fbcdn.net/v/t1.15752-9/300739642_801515090968927_1699331268353659465_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ucjKezH4DNwAX8pV-nF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRNHKVoW5Uc8ABnoeFbF9Fe1zKqVF76hwpaBE_k9ZAdJQ&oe=636E5373' />
                            <h1 className='name'>{data[0].name != '' ? (data[0].name) : ('Unknown')}</h1>
                            <p className='email'>{data[0].email != '' ? (data[0].email) : ('Unknown')}</p>

                            <p className='date'>
                                <i className="fa-solid fa-cake-candles"></i> {data[0].date != '' ? (data[0].date) : ('Unknown')}
                            </p>
                            <p className='phone'>
                                <i className="fa-solid fa-phone"></i> {data[0].phone != '' ? (data[0].phone) : ('Unknown')}
                            </p>
                            <p className='home'>
                                <i className="fa-solid fa-house"></i>{data[0].address != '' ? (data[0].address) : ('Unknown')}
                            </p>
                            <p>
                                {data[0].about != '' ? (data[0].about) : ('Unknown')}
                            </p>

                        </div>

                        <div className='right'>

                            <div className='My_courses'>
                                <h1>My courses</h1>
                                <p className='line'></p>
                                <div className='list_courses'>
                                    <div className='item'>
                                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/310899027_991543868914516_6688550758162959517_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3BBkwkZMgVEAX_6FimO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-o-kdbwjuN1XA9XlLQ46fCYrGvjouovDCMb479XnmNw&oe=636E58D7' />
                                        <p>HTML</p>
                                    </div>
                                    <div className='item'>
                                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/310899027_991543868914516_6688550758162959517_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3BBkwkZMgVEAX_6FimO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-o-kdbwjuN1XA9XlLQ46fCYrGvjouovDCMb479XnmNw&oe=636E58D7' />
                                        <p>HTML</p>
                                    </div>
                                    <div className='item'>
                                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/310899027_991543868914516_6688550758162959517_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3BBkwkZMgVEAX_6FimO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-o-kdbwjuN1XA9XlLQ46fCYrGvjouovDCMb479XnmNw&oe=636E58D7' />
                                        <p>HTML</p>
                                    </div>
                                    <div className='item'>
                                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/310899027_991543868914516_6688550758162959517_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3BBkwkZMgVEAX_6FimO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-o-kdbwjuN1XA9XlLQ46fCYrGvjouovDCMb479XnmNw&oe=636E58D7' />
                                        <p>HTML</p>
                                    </div>
                                    <div className='item'>
                                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/310899027_991543868914516_6688550758162959517_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3BBkwkZMgVEAX_6FimO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-o-kdbwjuN1XA9XlLQ46fCYrGvjouovDCMb479XnmNw&oe=636E58D7' />
                                        <p>HTML</p>
                                    </div>
                                </div>
                            </div>

                            <div className='edit_profile'>
                                <h1>Edit Profile</h1>
                                <p className='line'></p>
                                <div className='list_input'>
                                    <div>
                                        <p>Name:</p>
                                        <input
                                            placeholder='Enter name'
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Email:</p>
                                        <input
                                            placeholder='Enter email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Date of birthday:</p>
                                        <input type={'date'}
                                            value={date}
                                            onChange={e => setDate(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Phone:</p>
                                        <input
                                            placeholder='Enter phone'
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Address:</p>
                                        <input
                                            placeholder='Enter Address'
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>About me:</p>
                                        <textarea
                                            placeholder='Enter about'
                                            value={about}
                                            onChange={e => setAbout(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button onClick={handleEdit}>
                                    <i className="fa-solid fa-pen-to-square fa-3x"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            ) : (<Login />)}

        </>
    )
}

export default Profile