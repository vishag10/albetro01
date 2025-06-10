import React from 'react'
import "./page2.css"
import dividyn from "../assets/Vector.png"
import coin1 from "../assets/Frame.png"
import coin2 from "../assets/Group 1000004189.png"
import paisa from "../assets/Frame (2).png"

function Page2() {
    return (
        <> 
        <div className="main">
            <div className="section1">
                <div className="dividentbar">
                    <div className="dividentmain_head">
                        <div className="dividentmain_head_text">
                            <h1>Divident income</h1>
                        </div>
                        <div className="incom_box">
                            <label htmlFor="">pending</label>
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
                            <div className="indiactors1">
                            </div>
                            <div className="indiactors">
                            </div><div className="indiactors">
                            </div><div className="indiactors">
                            </div>
                            <div className="indiactors">
                            </div><div className="indiactors">
                            </div><div className="indiactors">
                            </div><div className="indiactors">
                            </div><div className="indiactors">
                            </div><div className="indiactors">
                            </div><div className="indiactors">
                            </div>
                            <div className="indicatorslast">

                            </div>

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
                     <button>history</button>
                    </div>
                    <div className="cardmember">
                       <button>card member</button>
                    </div>
                </div>
                <div className="section3">
                    <h1>Dividyn Income History</h1>
                </div>
                <div className="section4">
                    <div className="card">
                        
                    </div>
                </div>
            

            </div>

        </div>


        </>
    )
}

export default Page2