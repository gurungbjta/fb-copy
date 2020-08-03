import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import plus from '../images/plus.png'
import { RiCopyrightLine } from "react-icons/ri";

export default function Footer() {
    return (
        <>
            <FooterContainer className="container pl-0 ml-4">
                <div className="mainDiv">
                <div>
                    <ul className="footer-columns mt-2 ml-3">
                        <li style={{color: '#737373'}}>English (US)</li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Español</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Français (France)</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>中文(简体)</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>العربية</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Português (Brasil)</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>한국어</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Italiano</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Deutsch</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>हिन्दी</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>日本語</Link>
                        </li>
                        <li>
                            <Link to='/' className="button pl-1 pr-1">
                                <img src={plus} alt="plus" style={{height: '0.80rem', width: '1rem'}}/>
                            </Link>
                        </li>
                    </ul>

                    <hr style={{width: '61.8rem', height: '8px', marginLeft: '3.5rem', marginRight: '5rem', marginTop: '2.3rem', marginBottom: '2.3rem'}}/>
                </div>

                <div>
                    <ul className="footer-columns2 mt-2">
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Sign Up</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Log In</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Messenger</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Facebook Lite</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Watch</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>People</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Pages</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Page Categories</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Places</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Games</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Locations</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Marketplace</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Facebook Pay</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Groups</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Oculus</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Portal</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Instagram</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Local</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Fundraisers</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Services</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>About</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Create Ad</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Create Page</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Developers</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Careers</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Privacy</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Cookies</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Ad Choices</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Terms</Link>
                        </li>
                        <li>
                            <Link to='/' style={{color: '#385898'}}>Help</Link>
                        </li>
                    </ul>
                </div> 

                <div className="sp">
                    <span className="mt-2 ml-5" style={{color: '#737373'}}>Facebook <RiCopyrightLine/> 2020</span>
                </div>  
                </div>
            </FooterContainer>
            
        </>
        
    )
}

const FooterContainer = styled.footer`
    font-size: 12px;
    // padding-top: 2rem;
    // padding-bottom: 5rem;

    .container{
        position: relative;
        top: 0;
    }

    hr{
        position: absolute;
        top: 48rem;
        left: 2rem;   
    }

    .footer-columns{
        position: absolute;
        top: 48rem;
        left: 2rem;   
        align-items: center;
        display: flex;    
    }

    .footer-columns li{
        padding-left: 5px;
    }

    .footer-columns li .button{
        background-color: #f5f6f7;
        color: #737373;
        border: 1px solid;
        border-radius: 2px;
        padding-bottom: 3px
    }

    .footer-columns2{
        position: absolute;
        top: 50.5rem;
        left: 2rem; 
        right: 8rem;  
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        // display: grid;
        // grid-template-columns: repeat(13, 0.5fr);
    }

    .footer-columns2 li{
        padding-left: 15px;
        margin-left: 5px;
        margin-right: 5px;
        // margin-top: 40px;
        // position: absolute;
        // top: 3rem;
        // margin-left: 25px;
        // padding-right: 0;
        // display: inline-block;
        // display: flex;
        // vertical-align: top;
        // line-height: 1.6;

        // margin-block-start: 1em;
        // margin-block-end: 1em;
        // margin-inline-start: 0px;
        // margin-inline-end: 0px;
        // padding-inline-start: 40px;
    }

    .sp{
        position: absolute;
        top: 56rem;
        left: 2rem;   
        padding-left: 10px;
        padding-bottom: 2rem;
    }

    
`;
