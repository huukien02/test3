import './ResetPass.scss';
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function ResetPass() {
    return (
        <div>
            <Header />
            <div className='form_reset'>

                <div className='form'>
                    <h1>Reset Password</h1>
                    <p>
                        Enter email to reset your password
                    </p>
                    <span>Email:</span> <br></br>
                    <input /><br></br>

                    <button>RESET PASSWORD</button>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ResetPass