import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import home from '../images/home.png'
import flag from '../images/flag.png'
import {Icon} from 'react-icons-kit'
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown'
import { Popover, OverlayTrigger } from 'react-bootstrap';
import styled from 'styled-components'

export default function CreatePage() {
    const [showForm, setShowForm] = useState(true);
    const [target, setTarget] = useState(null);

    const handleShow = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
        setTarget(e.target);
    }

    const formPopover = (
        <Popover id="popover-basic" className="pop">
            <Popover.Title style={{backgroundColor: '#fff', height: '205px'}} className="firstDrop mb-3 pb-2">
                <label className="dropLabel">Email or Phone</label> <br/>
                <input className="dropInputs" type="email" /> <br/>
                <label className="dropLabel">Password</label> <br/>
                <input className="dropInputs" type="password" /> <br/>
                <Link to="/forgot" id="formForgot">Forgot account?</Link> <br />
                <button type="submit" id="dropBtn">Log In</button>
            </Popover.Title>
            <Popover.Content style={{backgroundColor: '#edf0f5', height: '80px', marginTop: '-1rem', borderRadius: '3px'}} id="secondDrop">
                <div>
                    <div style={{color: '#666', fontSize: '12px'}} className="pl-4">Do you want to join Facebook?</div>
                    <button className="lightGreenBtn secondSignUpBtn" type="submit">Sign Up</button>
                </div>
            </Popover.Content>
        </Popover>
    );

    return (
        <>
            <nav className="navbar text-white pt-0 pl-4">
                <div className="pageNav container pl-5">
                    <div className="nav-header">
                        <Link to="/" >
                            <img className="fbLogo" src={logo} alt="fbLogo" style={{height: '210px'}} />
                            <button className="signUpBtn lightGreenBtn">Sign Up</button>
                        </Link>
                    </div>
                    
                    <div className="join" style={{fontSize: '12px', fontWeight: 'bold'}}  >
                        <div onClick={handleShow} style={{color: '#fff', cursor: 'pointer'}}>
                            Join or Log Into Facebook 
                            <OverlayTrigger show={showForm} target={target} trigger="click" placement="bottom" overlay={formPopover}>
                                    <Icon icon={arrowSortedDown} className="dropDown ml-2"  />
                            </OverlayTrigger>
                        </div>
                    </div>     
                </div>
            </nav>
            <div className="main">
                <div className="container pt-2">
                    <div className="createPageContainer">
                        <div style={{color: '#1c1e21', fontSize: '24px', fontWeight: 'bold'}}>Create a Page</div>
                        <div style={{fontSize: '14px', paddingTop: '2px'}}>Connect your business, yourself or your cause to the worldwide community of people on Facebook. To get started, choose a Page category.</div>
                    </div>
                    <div className="pageTable">
                        <table >
                            <tbody>
                                <tr>
                                    <td >
                                        <div className="tds business">
                                            <img src={home} alt="home" style={{height: '200px'}} />< br/>
                                            <span style={{fontSize: '18px', fontWeight: 'bold', paddingBottom: '12px'}}>Business or Brand</span> <br/>
                                            <span style={{color: '#90949c', fontSize: '14px'}}>Showcase your products and services, spotlight your brand and reach more customers on Facebook.</span> <br/>
                                            <Link to="/">
                                                <Button>Get Started</Button>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="tds community">
                                            <img src={flag} alt="flag" style={{height: '200px'}} />< br/>
                                            <span style={{fontSize: '18px', fontWeight: 'bold', paddingBottom: '12px'}}>Community or Public Figure</span> <br/>
                                            <span style={{color: '#90949c', fontSize: '14px'}}>Connect and share with people in your community, organization, team, group or club.</span> <br/>
                                            <Link to="/">
                                                <Button>Get Started</Button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{height: '2rem'}} />
                </div>
                
            </div>

            

        </>
    )
}

const Button = styled.button`
    font-size: 12px;
    font-weight: bold;
    margin-top: 7rem;
    color: rgb(68, 73, 80);
    background-color: rgb(245, 246, 247);
    border: 1px solid;
    border-color: rgb(218, 221, 225);
    height: 28px;
    padding-left: 11px;
    padding-right: 11px;
    border-radius: 2px;
    &:hover{
        background-color: #DADCDE;
    }
`;
