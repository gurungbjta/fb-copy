import React, {useState} from 'react'
import {Icon} from 'react-icons-kit'
import {ic_help} from 'react-icons-kit/md/ic_help'
// import $ from 'jquery'
// import { Toast } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {InfoConsumer} from '../Context'

import { Popover, OverlayTrigger } from 'react-bootstrap';

// const years = [];
// let i = 1960;
// while(i <= 2020){
//     years = [...years, i]
//     i++;
// }

export default function SignUp() {
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [showBirthday, setShowBirthday] = useState(false);
    const [target, setTarget] = useState(null);
    const [showGender, setShowGender] = useState(false);

    const handleBday = (e) => {
        // setShowBirthday(true);
        setShowBirthday(!showBirthday);
        setShowGender(false);
        setTarget(e.target);
    };

    const closeBday = (e) => {
        setShowBirthday(false);
        // setShowBirthday(!showBirthday);
        setTarget(e.target);
    };

    const BdayPopover = (
        <Popover id="popover-basic">
          <Popover.Content>
            <div className="toast-text">
                <strong>Providing your birthday</strong> helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our <Link style={{color: '#3B5998'}} to='/'>Data Policy</Link>.
            </div>
            <hr />
            <button id="btn" onClick={closeBday}>Close</button>
          </Popover.Content>
        </Popover>
    );

    const handleGender = (e) => {
        setShowGender(!showGender);
        setShowBirthday(false);
        setTarget(e.target);
    };

    const closeGender = (e) => {
        setShowGender(false);
        // setShowBirthday(!showBirthday);
        setTarget(e.target);
    };

      const GenderPopover = (
        <Popover id="popover-basic">
          <Popover.Content>
            <div className="toast-text">
              You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.
            </div>
            <hr />
            <button id="btn" onClick={closeGender}>Close</button>
          </Popover.Content>
        </Popover>
      );

    return (
        <div className= "pt-3 pl-5">
            <div>
                <h2 className="pl-0">Sign Up</h2>
                <div className="pb-4 txt">It’s quick and easy.</div>
            </div>

            <form>
                <input type="text" placeholder="First name" className="mr-3 inputs" value={firstName} onChange={e => SetFirstName(e.target.value)} required/>
                <input type="text" placeholder="Last name" className="inputs" value={lastName} onChange={e => SetLastName(e.target.value)} style={{width: '11.1rem'}} required/>
                <br />

                <InfoConsumer>
                    {(value) => {
                        const {email, password, setEmail, setPassword} = value;
                        return(
                            <>
                                {/* console.log(`email ${email}`); */}
                                <input type="email" placeholder="Mobile number or email" style={{width: '22.9rem'}} className="mt-2 inputs" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <input type="password" placeholder="New password" style={{width: '22.9rem'}} className="mt-2 inputs" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <br />
                            </>
                            
                        )
                        
                    }}
                </InfoConsumer>
                
                
                <p className="pt-3 mb-1" style={{color: '#999'}} id="birthday">Birthday</p>
                
                <span className="options" >
                    <select aria-label="Month" title="Month" className="pr-4 pt-1 pl-1 pb-1">
                        <option>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </select>
                    <select aria-label="Day" title="Day" className="pr-4 pt-1 pl-1 pb-1">
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select aria-label="Year" title="Year" className="pr-4 pt-1 pl-1 pb-1">
                        <option>Year</option>
                        <option>1991</option>
                        <option>1992</option>
                        <option>1993</option>
                        <option>1994</option>
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>1880</option>
                        <option>1881</option>
                        <option>1882</option>
                        <option>1883</option>
                        <option>1884</option>
                        <option>1885</option>
                        <option>1886</option>
                        <option>1887</option>
                        <option>1888</option>
                        <option>1889</option>
                        <option>1990</option>
                        <option>1991</option>
                        <option>1992</option>
                        <option>1993</option>
                        <option>1994</option>
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                    </select>
                </span>
                

                <div className="main-popover">
                    <OverlayTrigger show={showBirthday} target={target} className="show-toast"  trigger="click" placement="left" overlay={BdayPopover}>
                        <Icon onClick={handleBday} className="Icon ic pl-2" icon={ic_help} size={20} />
                    </OverlayTrigger>
                </div>
                

                {/* <div className="main-toast">
                    <a href="/" className="show-toast" onClick={bdayClick}>
                        <Icon className="Icon ic pl-2" icon={ic_help} size={20} />
                    </a>
                </div> */}
                

                {/* <Toast show={showBirthday} delay={3000} autohide className="toast1" >    
                    <Toast.Body>
                        <div className="toast-text">
                            <strong>Providing your birthday</strong> helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our <Link to='/'>Data Policy</Link>.
                        </div>
                        <hr />
                        <button id="btn" onClick={closeBirthday}>Close</button>
                    </Toast.Body>
                </Toast>  */}

                <p className="pt-3 mb-1" style={{color: '#999'}}>Gender</p>
                <input type="radio" className="mr-1"/>
                <label>Female</label>
                <input type="radio" className="ml-4 mr-1"/>
                <label>Male</label>
                <input type="radio" className="ml-4 mr-1"/>
                <label>Custom</label>

                <div className="main-popover">
                    <OverlayTrigger show={showGender} target={target} className="show-toast"  trigger="click" placement="left" overlay={GenderPopover}>
                        <Icon className="Icon ic pl-2" icon={ic_help} size={20} onClick={handleGender} />
                    </OverlayTrigger>
                </div>

                {/* <a href="/" className="show-toast" onClick={genderClick}>
                    <Icon className="Icon ic pl-2" icon={ic_help} size={20} />
                </a>

                <Toast show={showGender} delay={3000} autohide className="toast2">
                    <Toast.Body>
                        <div className="toast-text">You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.</div>
                        <hr />
                        <button id="btn" onClick={closeGender}>Close</button>
                    </Toast.Body>
                </Toast>  */}

                <Policy className="pr-5" style={{color: '#666', marginRight: '7.5rem'}}>
                    By clicking Sign Up, you agree to our <Link to='/' style={{color: '#3B5998'}}>Terms</Link>, <Link to='/' style={{color: '#3B5998'}}>Data Policy</Link> and <Link to='/' style={{color: '#3B5998'}}>Cookies Policy</Link>. You may receive SMS Notifications from us and can opt out any time.
                </Policy>

                <button type="submit" className="sign-up-btn">
                    Sign Up
                </button>
                <hr style={{marginRight: '7.5rem'}} />
                <p style={{fontSize: '14px', fontWeight: 'bold'}}>
                    <Link to="/createPage" style={{color: '#385898'}}>Create a Page</Link> for a celebrity, band or business.
                </p>
            </form>
        </div>
    )
}

const Policy = styled.div`
    font-size: 12px;
`;

