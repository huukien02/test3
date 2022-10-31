import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'

function Home() {
    var token = localStorage.getItem("token");
    return (
        <div>
            {token ? (<div>
                <Header />
                <Banner />
                <Body />
                <Footer />
            </div>) : (<Login />)}

        </div>
    )
}

export default Home