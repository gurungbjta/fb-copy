import React from 'react'
import SignUp from './SignUp'
import timeline from '../images/timeline.png'
import news from '../images/news.png'
import find from '../images/find.png'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Body() {
    return (
        <>
            <NavBar />
            <div className="main" style={{backgroundColor: '#edf0f5'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 pt-5 pl-4 leftSide">
                            <h3 className="pr-5">
                                Connect with friends and the world around you on Facebook.
                            </h3>
                            
                            <div className="mt-5">
                                {/* <i className="news-icon"></i> */}
                                <img src={news} alt="newsfeed" style={{width: '70px', height: '53px'}} />
                                <span style={{color: '#666'}} className="ml-4">
                                    <span id="see-photos">See photos and updates</span> from friends in News Feed.
                                </span>
                            </div>
                            <div className="mt-5">
                                <img src={timeline} alt="timeline" style={{width: '70px', height: '56px'}}/>
                                <span style={{color: '#666'}} className="ml-4">
                                    <span id="see-photos">Share what's new</span> in your life on your Timeline.
                                </span>
                            </div>
                            <div className="mt-5">
                                <img src={find} alt="find" style={{width: '70px', height: '56px'}}/>
                                <span style={{color: '#666'}} className="ml-4">
                                    <span id="see-photos">Find more</span> of what you're looking for with Facebook Search.
                                </span>
                            </div>
                        </div>
                        <div className="col-6 rightSide">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    )
}
