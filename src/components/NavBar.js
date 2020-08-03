import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import {InfoConsumer} from '../Context'
import Error from './Error'
import SuccessfulLogin from './SuccessfulLogin'

export default function NavBar() {
    const [typedEmail, setTypedEmail] = useState('');
    const [typedPassword, setTypedPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyEmail();
        setTypedEmail('');
        setTypedPassword('');
    }

    const verifyEmail = () => {
        return(
            <InfoConsumer>
                {(value) => {
                    const {email, password} = value;
                    if(typedEmail !== email || typedPassword !== password){
                        return (
                            <Error />
                        )
                    }
                    else{
                        return (
                            <SuccessfulLogin />
                        )
                    }
                }}
            </InfoConsumer>
        )
        
    }

    return (
        <nav className="navbar text-white pt-0">
            <div className="nav-center container">
                <div className="nav-header">
                    <Link to="/" >
                        <img className="fbLogo" src={logo} alt="fbLogo" style={{height: '210px'}} />
                    </Link>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit} className="nav-login">
                        <table>
                            <tbody>
                                <tr className="emailPassword">
                                    <td>
                                        <label className="mb-0">Email or Phone</label>
                                    </td>
                                    <td>
                                        <label className="mb-0">Password</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="mr-2 emailPassword" type="email" id="email" value={typedEmail} onChange={e => setTypedEmail(e.target.value)} required/>
                                    </td>
                                    <td>
                                        <input className="mr-2 emailPassword" type="password" id="password" value={typedPassword} onChange={e => setTypedPassword(e.target.value)} required/>
                                    </td>
                                    <td>
                                        {/* <label> */}
                                            <button type="submit" id="loginBtn" className="text-center">Log In</button>
                                        {/* </label> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link to='/forgot' id="forgot">Forgot account?</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>      
            </div>
        </nav>
    )
}
