import './DetailCourses.scss'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login';

function DetailCourses() {

    let { id } = useParams()

    const [data, setData] = useState([])
    const [dataCmt, setDataCmt] = useState([])

    const [lessons, setLessons] = useState(true)
    const [teacher, setTeacher] = useState(false)
    const [review, setReview] = useState(false)
    const [search, setSearch] = useState('')

    const [cmt, setCmt] = useState('')

    useEffect(() => {
        var token = localStorage.getItem("token");
        async function getData() {
            const res = await axios.get(`https://servertraining.herokuapp.com/cmt/courses/${id}`, { 'headers': { 'Authorization': token } })
            return res;
        }
        getData().then((res) => setDataCmt(res.data)).catch(err => {
            console.log(err);
        })
    }, [])

    if (dataCmt) {
        var listCmt = dataCmt
    }

    console.log(dataCmt);


    useEffect(() => {
        var token = localStorage.getItem("token");

        async function getData() {
            const res = await axios.get(`https://servertraining.herokuapp.com/api/listcourses`, { 'headers': { 'Authorization': token } })
            return res;
        }
        getData().then((res) => setData(res.data)).catch(err => {
            console.log(err);
        })
    }, [])

    if (data.length > 0) {
        var find = data.find((item) => {
            /* Trả về data đầu tiên tìm thấy */
            return item._id == id;
        })
    }

    const handleLessons = () => {
        setLessons(true)
        setTeacher(false)
        setReview(false)
    }

    const handleTeacher = () => {
        setLessons(false)
        setTeacher(true)
        setReview(false)
    }

    const handleReview = () => {
        setLessons(false)
        setTeacher(false)
        setReview(true)
    }

    const handleSearch = () => {
        let list = document.querySelectorAll('.item_lesson')

        for (let i = 0; i < list.length; i++) {
            if (list[i].childNodes[0].innerText.toUpperCase().includes(search.toUpperCase())) {
                list[i].style.display = 'block'
            }
            else {
                list[i].style.display = 'none'
            }
        }

    }

    const handleCMT = () => {

        if (cmt == '') {
            alert('Không được để trống')
        }
        else {
            const name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const d = new Date();
            let day = d.getDay()
            let year = d.getFullYear()
            let month = name[d.getMonth()]
            let hour = d.getHours();
            let minutes = d.getMinutes();

            if (hour <= 12) {
                var today = month + ' ' + day + '' + ', ' + year + ' at ' + hour + ':' + minutes + ' am'
            }
            else if (hour > 12) {
                hour = hour - 12;
                var today = month + ' ' + day + '' + ', ' + year + ' at ' + hour + ':' + minutes + ' pm'
            }


            var token = localStorage.getItem("token");

            axios.post('https://servertraining.herokuapp.com/cmt/courses', {
                token, cmt, id, today
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


    return (

        <>
            {data.length > 0 ? (<div>
                <Header />
                <div className='form_detail'>

                    <div className='left'>
                        <div className='banner'>
                            <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/305007902_632090735253550_8052442853680707690_n.png?stp=dst-png_s370x247&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=TMniuXQL3RAAX924Sy2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR_yiivuBSpXhe0Sxh0WHOrrJ3_BDH9t_IXtKbu4OoscQ&oe=6370F37A' />
                        </div>


                        <div className='body'>

                            <div className='btn'>
                                <button className={lessons ? ('change_btn') : ('')} onClick={handleLessons}>Lessons</button>
                                <button className={teacher ? ('change_btn') : ('')} onClick={handleTeacher}>Tearcher</button>
                                <button className={review ? ('change_btn') : ('')} onClick={handleReview}>Reviews</button>
                            </div>
                            <hr></hr>



                            {lessons ? (
                                <div className='lessons'>
                                    <div className='search'>
                                        <input
                                            placeholder='Enter lesson'
                                            onChange={e => setSearch(e.target.value)}
                                            value={search}
                                        />
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <button onClick={handleSearch} className='btn_search'>tìm kiếm</button>
                                        <button className='btn_join'>Tham gia khóa học</button>
                                    </div>
                                    <ul>
                                        {find ? ((find.lessons.map((item, index) => {
                                            return (
                                                <li className='item_lesson' key={index}>
                                                    <span>{item.name}</span>
                                                    <Link to={`/detail/listcourses/lessons/${id}/${index}`}>
                                                        Learn
                                                    </Link>
                                                </li>
                                            )
                                        }))) : ('')}

                                    </ul>
                                </div>
                            ) : ('')}

                            {teacher ? (
                                <div className='teacher'>
                                    <h1>Main Teachers</h1>

                                    {find ? ((find.teacher.map((item, index) => {
                                        return (
                                            <div key={index} className='item'>

                                                <div className='header'>
                                                    <img src={item.img} />
                                                    <div className='info'>
                                                        <h1>{item.name}</h1>
                                                        <p>Second Year Teacher</p>
                                                        <i className="fa-brands fa-google"></i>
                                                        <i className="fa-brands fa-instagram"></i>
                                                        <i className="fa-brands fa-youtube"></i>
                                                    </div>
                                                </div>

                                                <div className='title'>
                                                    <p>
                                                        Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique
                                                    </p>
                                                </div>

                                            </div>
                                        )
                                    }))) : ('')}

                                </div>
                            ) : ('')}


                            {review ? (
                                <div className='review'>
                                    {listCmt ? ((<h1>{listCmt.length} REVIEW</h1>)) : ('')}


                                    <div className='banner_review'>
                                        <div className='left'>
                                            <p className='quality'>5</p>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <p>2 Ratings</p>
                                        </div>
                                        <div className='right'>
                                            <p>
                                                5 stars
                                                <span className='line'></span>
                                            </p>
                                            <p>
                                                4 stars
                                                <span className='line'></span>
                                            </p>
                                            <p>
                                                3 stars
                                                <span className='line'></span>
                                            </p>
                                            <p>
                                                2 stars
                                                <span className='line'></span>
                                            </p>
                                            <p>
                                                1 stars
                                                <span className='line'></span>
                                            </p>
                                        </div>

                                    </div>

                                    <div className='cmt'>
                                        <h5>
                                            Show all reviews <i className="fa-solid fa-caret-down"></i>
                                        </h5>

                                        {listCmt ? ((listCmt.map((item, index) => {
                                            return (
                                                <div className='item'>
                                                    <div className='header'>
                                                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/302053327_409881834664736_6617838889930370882_n.png?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=y0TSwLFB7_AAX_V356i&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQUezi56ynIA451FKQCYlntCXRTZpyUfkcCybAANRnerw&oe=63747B90' />
                                                        <span className='name'>{item.user}</span>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <span className='date'>{item.today}</span>
                                                    </div>
                                                    <div className='title'>
                                                        <p>{item.cmt}</p>
                                                    </div>
                                                </div>
                                            )
                                        }))) : ('')}
                                    </div>

                                    <div className='vote'>
                                        <h1>Leave a Review</h1>
                                        <p>Message</p>
                                        <textarea
                                            placeholder='Enter comment'
                                            onChange={e => setCmt(e.target.value)}
                                            value={cmt}
                                        />
                                        <h3>
                                            Vote:
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </h3>
                                        <button onClick={handleCMT}>
                                            <span>Comment </span>
                                        </button>
                                    </div>

                                </div>
                            ) : ('')}



                            <div className='change_page'>
                                <button><i className="fa-solid fa-arrow-left"></i></button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button><i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className='right'>

                        <div className='top'>
                            <h1>Descriptions course</h1>
                            <p className='line'></p>
                            <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique.</p>
                        </div>

                        <div className='mid'>
                            <p>
                                <i className="fa-solid fa-user-group fa-2x"></i>
                                <p className='title'>Learners:</p>
                                <p className='footer'> 500</p>

                            </p>
                            <hr></hr>
                            <p>
                                <i className="fa-solid fa-chess-board fa-2x"></i>
                                <p className='title'> Lessons:</p>
                                <p className='footer'> 100 lessons</p>
                            </p>
                            <hr></hr>
                            <p>
                                <i className="fa-solid fa-clock fa-2x"></i>
                                <p className='title'>  Times:</p>
                                <p className='footer'> 80 hours</p>
                            </p>
                            <hr></hr>
                            <p>
                                <i className="fa-solid fa-key fa-2x"></i>
                                <p className='title'>  Tags:</p>
                                <p className='footer'> #learn #code</p>
                            </p>
                            <hr></hr>
                            <p>
                                <i className="fa-regular fa-money-bill-1 fa-2x"></i>
                                <p className='title'>Price:</p>
                                <p className='footer'> Free</p>
                            </p>
                        </div>

                        <div className='bot'>
                            <div className='title'>
                                <h1>Other Courses</h1>
                            </div>
                            <ul>
                                <li>1 Lorem ipsum dolor sit amet, consectetur the adipiscing elit.</li>
                                <li>2 Lorem ipsum dolor sit amet, consectetur the adipiscing elit.</li>
                                <li>3 Lorem ipsum dolor sit amet, consectetur the adipiscing elit.</li>
                                <li>4 Lorem ipsum dolor sit amet, consectetur the adipiscing elit.</li>
                                <li>5 Lorem ipsum dolor sit amet, consectetur the adipiscing elit.</li>
                            </ul>
                            <button>View all ours courses</button>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>) : (<Login />)}
        </>
    )
}

export default DetailCourses