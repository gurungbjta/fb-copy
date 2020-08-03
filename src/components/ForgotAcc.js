import React, {useState} from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import NavBar from './NavBar';

export default function ForgotAcc() {
    const [phone, setPhone] = useState('');

    return (
        <>
            <NavBar />
            <div className="main" style={{backgroundColor: '#edf0f5', height: '25rem'}}>
                <Box1 className="find-box">
                    <h2 className="pt-2">Find Your Account</h2>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td id="sentence" >Please enter your email or phone number to search for your account.</td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="number" type="text" placeholder="Mobile number" aria-label="Mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box1>
                <Box2>
                    <div className="bottom">
                        <button className="search" id="btn">Search</button>
                        <Link to="/">
                            <button className="cancel">Cancel</button>
                        </Link> 
                    </div>   
                </Box2>
                <Footer className="footer" />
            </div>
        </>      
    )
}

const Box1 = styled.div`
    border: 1px solid #ccc;
    border-radius: 4px 4px 0px 0px; //tl tr br bl
    // border-radius: 4px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 560px;
    height: 140px;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: .5em;
    position: relative;
    top: 100px;
    left: 0;
    right: 0;
    font-size: 12px;

    h2{
        // width: 1px;
        font-size: 16px;
        position: absolute;
        left: 1rem;
        
    }

    hr{
        margin-top: 2.3rem;
        width: 32rem;
        color: '#666'
        
        // position: absolute;
        // top: 1rem;
        
    }

    table{
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        width: 400px;
        border-collapse: separate;
        border-spacing: 2px;
    }

    td{
        text-align: left;
    }

    #number{
        border: 1px solid #ccc;
        width: 255px;
    }
`;

const Box2 = styled.div`
    border: 1px solid #ccc;
    // border-radius: 4px;
    border-radius: 0px 0px 4px 4px;  //tl tr br bl
    width: 560px;
    height: 45px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    // line-height: 16px;
    // border-bottom: none;
    // border-left: none;
    // border-right: none;
    // position: absolute;
    // top: 80;
    // left: 30;
    // padding: 8px 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    position: relative;
    top: 0;

    .bottom{
        padding-top: 0.5rem;
    }
    
    .search{
        position: absolute;
        left: 15rem;
    }

    .cancel{
        color: #666;
        backgroundColor: #f5f6f7;
        border: 1px solid #ccc;
        borderColor: '#999'
        border-width: 0.5px;
        border-radius: 2px;
        font-size: 12px; 
        font-weight: bold;
        margin-left: 12.5rem;
        font-weight: bold;
        position: absolute;
        left: 18.5rem;
        &:hover{
            background: #edf0f5;
        }
        
    }
    
`;
