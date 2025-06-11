import React, { useState } from 'react'
import "./page2.css"
import dividyn from "../assets/Vector.png"
import coin1 from "../assets/Frame.png"
import coin2 from "../assets/Group 1000004189.png"
import paisa from "../assets/Frame (2).png"
import cardimg from "../assets/Frame 2147223405.png"

function Page2() {
    const [activeView, setActiveView] = useState('history'); // 'history' or 'cardmember'

    const handleHistoryClick = () => {
        setActiveView('history');
    };

    const handleCardMemberClick = () => {
        setActiveView('cardmember');
    };

    return (
        <>
            <div className="main">
                <div className="section1">
                    <div className="dividentbar">
                        <div className="dividentmain_head">
                            <div className="dividentmain_head_text">
                                <h1>Dividend income</h1>
                            </div>
                            <div className="incom_box">
                                <label htmlFor="">completed</label>
                            </div>
                        </div>
                        <div className="dividyn">
                            <div className="dividyn_pic_head">
                                <div className="dividyn_pic">
                                    <img src={dividyn} alt="dividyn" />
                                </div>
                                <div className="dividyn_text">
                                    <h1>dividyn</h1>
                                </div>
                            </div>
                            <div className="dividyn_price">
                                <div className="price1">
                                    <div className="dividyn_price_img1">
                                        <img src={coin1} alt="coin1" />
                                    </div>
                                    <label htmlFor="" className='usd_price1'>9.890</label>
                                </div>
                                <div className="price2">
                                    <div className="dividyn_price_img1">
                                        <img src={coin2} alt="coin1" />
                                    </div>
                                    <label htmlFor="" className='usd_price1'>9.890</label>
                                </div>
                            </div>
                        </div>
                        <div className="levels">
                            <div className="indiactor">
                                <div className="indiactors1"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                <div className="indiactors"></div>
                                {/* <div className="indicatorslast"></div> */}
                            </div>
                            <div className="limit">
                                <div className="limit_head">
                                    <div className="limit_head_img">
                                        <img src={paisa} alt="paisa" />
                                    </div>
                                    <div className="limit_head_text">
                                        <h1>Limit</h1>
                                    </div>
                                </div>
                                <div className="limit_price">
                                    <label htmlFor="" className='usd_price2'>72</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section2">
                        <div className="history">
                            <button 
                                onClick={handleHistoryClick}
                                className={activeView === 'history' ? 'active' : ''}
                            >
                                history
                            </button>
                        </div>
                        <div className="cardmember">
                            <button 
                                onClick={handleCardMemberClick}
                                className={activeView === 'cardmember' ? 'active' : ''}
                            >
                                card member
                            </button>
                        </div>
                    </div>
                    
                    {/* Conditional rendering based on active view */}
                    {activeView === 'history' && (
                        <>
                            <div className="section3">
                                <h1>Dividyn Income History</h1>
                            </div>
                            <div className="section4">
                                <div className="card">
                                    {/* First Section - Image */}
                                    <div className="card_section1">
                                        <div className="card_img">
                                            <img src={cardimg} alt="card-icon" />
                                        </div>
                                    </div>

                                    {/* Second Section - Date */}
                                    <div className="card_section2">
                                        <p className="card_date_label">Date</p>
                                        <p className="card_date_value">2025-05-22</p>
                                    </div>

                                    {/* Third Section - Extra Bonus Text */}
                                    <div className="card_section3">
                                        <p className="card_bonus_text">Extra bonus</p>
                                    </div>

                                    {/* Fourth Section - Logo and Price */}
                                    <div className="card_section4">
                                        <div className="card_coin_img">
                                            <img src={coin2} alt="coin" />
                                        </div>
                                        <p className="card_price">9.890</p>
                                    </div>
                                </div>
                                
                                
                                <div className="card">
                                    {/* First Section - Image */}
                                    <div className="card_section1">
                                        <div className="card_img">
                                            <img src={cardimg} alt="card-icon" />
                                        </div>
                                    </div>

                                    {/* Second Section - Date */}
                                    <div className="card_section2">
                                        <p className="card_date_label">Date</p>
                                        <p className="card_date_value">2025-05-20</p>
                                    </div>

                                    {/* Third Section - Extra Bonus Text */}
                                    <div className="card_section3">
                                        <p className="card_bonus_text">Extra bonus</p>
                                    </div>

                                    {/* Fourth Section - Logo and Price */}
                                    <div className="card_section4">
                                        <div className="card_coin_img">
                                            <img src={coin2} alt="coin" />
                                        </div>
                                        <p className="card_price">9.890</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    
                    {activeView === 'cardmember' && (
                        <div className="section3 cardmember-section">
                            <div className="empty-state">
                                <h2>Card Member Section</h2>
                                <p>No card member information available at the moment.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Page2