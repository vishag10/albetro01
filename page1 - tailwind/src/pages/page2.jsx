import React, { useState } from 'react'
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
            <div className="box-border">
                <main className="m-0 w-full h-screen bg-black font-sans">
                    <div className="section1 m-0 w-full min-h-screen bg-black flex flex-col justify-start items-center pt-[60px] pb-5 px-5 
                                    sm:pt-10 sm:px-[15px] 
                                    xs:pt-[25px] xs:px-[10px] 
                                    lg:pt-20">
                        
                        {/* Dividend Bar */}
                        <div className="dividentbar w-full max-w-[450px] h-auto mb-5 lg:max-w-[550px]">
                            {/* Dividend Main Head */}
                            <div className="dividentmain_head flex h-10 items-center justify-start flex-wrap gap-[10px] 
                                          sm:h-auto sm:min-h-[35px] sm:gap-2 sm:justify-start">
                                <div className="dividentmain_head_text h-[25px] flex-none">
                                    <h1 className="text-[clamp(12px,3.5vw,15px)] text-white m-0">Dividend income</h1>
                                </div>
                                <div className="incom_box w-[50px] h-5 ml-[10px] bg-[#0B7B9338] items-center text-center flex justify-center flex-shrink-0">
                                    <label className="text-[#0B7B93] text-[clamp(10px,2.5vw,12px)]">pending</label>
                                </div>
                            </div>

                            {/* Dividyn Section */}
                            <div className="dividyn h-auto min-h-[42.84px] w-full flex items-center relative my-[10px] flex-wrap 
                                          sm:flex-col sm:items-start sm:gap-3 
                                          md:flex-nowrap">
                                <div className="dividyn_pic_head flex items-center flex-1 min-w-[150px] sm:min-w-auto">
                                    <div className="dividyn_pic w-[clamp(20px,5vw,27.45px)] h-[clamp(20px,5vw,27.45px)] flex-shrink-0">
                                        <img src={dividyn} alt="dividyn" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="dividyn_text h-auto pl-[3%]">
                                        <h1 className="m-0 text-[clamp(14px,4vw,18px)] text-white">dividyn</h1>
                                    </div>
                                </div>
                                <div className="dividyn_price h-auto min-h-9 relative flex w-full max-w-[200px] items-center mt-[10px] 
                                              sm:static sm:w-full sm:max-w-none sm:mt-0 
                                              md:absolute md:right-0 md:mt-0 md:w-[200px]">
                                    <div className="price1 flex w-1/2 h-9 items-center border-[1.34px] border-[#0B7B93] bg-[#0B7B9321] p-1 sm:p-[3px]">
                                        <div className="dividyn_price_img1 w-[clamp(18px,4vw,23px)] h-[clamp(18px,4vw,23px)] ml-[2%] flex-shrink-0">
                                            <img src={coin1} alt="coin1" className="w-full h-full object-cover" />
                                        </div>
                                        <label className="usd_price1 text-[clamp(12px,3.5vw,16px)] ml-[3%] text-white">9.890</label>
                                    </div>
                                    <div className="price2 flex w-1/2 h-9 items-center border-[1.34px] border-[#0B7B93] border-l-0 bg-[#0B7B9321] p-1 sm:p-[3px]">
                                        <div className="dividyn_price_img1 w-[clamp(18px,4vw,23px)] h-[clamp(18px,4vw,23px)] ml-[2%] flex-shrink-0">
                                            <img src={coin2} alt="coin2" className="w-full h-full object-cover" />
                                        </div>
                                        <label className="usd_price1 text-[clamp(12px,3.5vw,16px)] ml-[3%] text-white">9.890</label>
                                    </div>
                                </div>
                            </div>

                            {/* Levels Section */}
                            <div className="levels flex w-full h-auto min-h-[60px] mt-3 flex-wrap gap-2 
                                          sm:flex-row sm:gap-2 sm:min-h-[55px] sm:items-stretch 
                                          xs:min-h-[50px] xs:items-stretch">
                                <div className="indiactor w-full max-w-[380px] h-[60px] flex flex-1 min-w-[200px] 
                                              sm:w-auto sm:flex-1 sm:min-w-[120px] sm:h-[55px] sm:overflow-hidden 
                                              xs:h-[50px] xs:min-w-[100px]">
                                    <div className="indiactors1 w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] m-0 flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indiactors w-3 h-full bg-gradient-to-b from-[#0B7B93] to-[#06CBF5] ml-[3px] flex-shrink-0 
                                                  sm:w-2 sm:min-w-[6px] 
                                                  xs:w-[6px] xs:min-w-1"></div>
                                    <div className="indicatorslast flex-1 min-w-20 h-full bg-gradient-to-r from-[rgba(11,123,147,0.46)] to-[rgba(6,203,245,0.46)] ml-[3px] 
                                                  sm:min-w-10 sm:flex-1 
                                                  xs:min-w-[30px] xs:flex-1"></div>
                                </div>
                                <div className="limit ml-auto w-[65px] h-[60px] min-h-[60px] bg-[#0B7B9375] border-[1.8px] border-[#0B7B93] flex-shrink-0 
                                              sm:ml-2 sm:w-20 sm:max-w-20 sm:self-stretch sm:h-[55px] sm:min-h-[55px] sm:flex sm:flex-col 
                                              xs:h-[50px] xs:min-h-[50px] xs:w-[70px] xs:max-w-[70px]">
                                    <div className="limit_head w-full h-5 flex items-center px-[2px] py-[1px] flex-shrink-0">
                                        <div className="limit_head_img h-[clamp(14px,3.5vw,18px)] w-[clamp(14px,3.5vw,18px)] flex-shrink-0">
                                            <img src={paisa} alt="paisa" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="limit_head_text h-auto flex text-center items-center flex-1 min-w-0">
                                            <h1 className="text-[clamp(8px,2vw,10px)] m-0 pl-[2px] text-white whitespace-nowrap overflow-hidden text-ellipsis 
                                                         xs:text-[clamp(7px,1.8vw,9px)]">Limit</h1>
                                        </div>
                                    </div>
                                    <div className="limit_price h-[calc(100%-22px)] w-full flex items-center justify-center flex-1">
                                        <label className="text-[clamp(10px,3vw,14px)] text-white text-center 
                                                        xs:text-[clamp(9px,2.5vw,12px)]">72</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Section 2 - Navigation Buttons */}
                        <div className="section2 flex w-full max-w-[450px] h-[38px] mt-[15px] ml-[5%] gap-2 flex-wrap self-start 
                                      sm:flex-row sm:h-8 sm:gap-2 sm:ml-0 sm:self-center sm:justify-center 
                                      xs:ml-0 xs:self-center xs:justify-center xs:h-[30px] 
                                      lg:max-w-[550px] 
                                      md:ml-[5%] md:self-start">
                            <div className="history h-[38px] w-[140px] text-center bg-[#0B7B9321] flex-shrink-0 
                                          sm:w-[110px] sm:h-8 sm:max-w-none sm:ml-0 
                                          xs:w-[100px] xs:h-[30px] xs:max-w-none">
                                <button 
                                    onClick={handleHistoryClick}
                                    className={`w-full h-full text-white bg-transparent border-none text-[clamp(11px,2.5vw,14px)] cursor-pointer transition-colors duration-300 hover:bg-[#0B7B9350] 
                                              xs:text-[clamp(10px,2vw,12px)] ${activeView === 'history' ? 'bg-[#0B7B9350]' : ''}`}
                                >
                                    history
                                </button>
                            </div>
                            <div className="cardmember h-[38px] w-[140px] text-center bg-[#0B7B9321] flex-shrink-0 ml-0 
                                          sm:w-[110px] sm:h-8 sm:max-w-none sm:ml-0 
                                          xs:w-[100px] xs:h-[30px] xs:max-w-none">
                                <button 
                                    onClick={handleCardMemberClick}
                                    className={`w-full h-full text-white bg-transparent border-none text-[clamp(11px,2.5vw,14px)] cursor-pointer transition-colors duration-300 hover:bg-[#0B7B9350] 
                                              xs:text-[clamp(10px,2vw,12px)] ${activeView === 'cardmember' ? 'bg-[#0B7B9350]' : ''}`}
                                >
                                    card member
                                </button>
                            </div>
                        </div>
                        
                        {/* Conditional rendering based on active view */}
                        {activeView === 'history' && (
                            <>
                                <div className="section3 h-auto w-full max-w-[450px] py-2 px-0 mt-[15px] ml-[5%] self-start 
                                              sm:ml-0 sm:self-center 
                                              xs:ml-0 xs:self-center 
                                              lg:max-w-[550px] 
                                              md:ml-[5%] md:self-start">
                                    <h1 className="m-0 pt-2 text-[clamp(14px,3.5vw,18px)] text-white">Dividyn Income History</h1>
                                </div>
                                <div className="section4 w-full max-w-[450px] mt-[15px] h-auto flex flex-col justify-center items-center px-0 py-0 bg-black gap-[15px] 
                                              sm:w-full sm:px-0 sm:gap-3 
                                              xs:w-full xs:px-0 xs:gap-[10px] 
                                              lg:max-w-[550px] lg:gap-5 
                                              md:w-full md:px-0 md:bg-black md:gap-[15px]">
                                    <div className="card w-full h-[70px] bg-[#0B7B930F] border-[0.5px] border-[#0B7B93] max-w-full flex items-center px-[5%] py-0 gap-2 first:mt-0 
                                                  sm:w-full sm:h-20 sm:border-[0.5px] sm:border-[#0B7B93] sm:bg-[#0B7B930F] sm:max-w-full sm:flex sm:items-center sm:px-[5%] sm:py-0 sm:gap-[6px] 
                                                  xs:h-[70px] xs:px-[3%] xs:py-0 xs:border-[0.5px] xs:border-[#0B7B93] xs:bg-[#0B7B930F] xs:gap-[5px] 
                                                  lg:w-full lg:h-[70px] lg:border-[0.5px] lg:border-[#0B7B93] lg:bg-[#0B7B930F] lg:px-[5%] lg:py-0 
                                                  md:w-full md:h-[70px] md:border-[0.5px] md:border-[#0B7B93] md:bg-[#0B7B930F] md:px-[5%] md:py-0">
                                        {/* First Section - Image */}
                                        <div className="card_section1 flex items-center flex-shrink-0">
                                            <div className="card_img w-10 h-10 flex-shrink-0 
                                                          sm:w-[35px] sm:h-[35px] 
                                                          xs:w-[30px] xs:h-[30px] 
                                                          lg:w-[45px] lg:h-[45px]">
                                                <img src={cardimg} alt="card-icon" className="w-full h-full object-cover" />
                                            </div>
                                        </div>

                                        {/* Second Section - Date */}
                                        <div className="card_section2 flex flex-col items-start flex-shrink-0 ml-[15px] 
                                                      sm:ml-5 sm:items-start 
                                                      xs:ml-[10px] xs:items-start">
                                            <p className="card_date_label text-[clamp(12px,3vw,14px)] text-white m-0 mb-[2px] 
                                                        sm:text-[clamp(11px,2.8vw,13px)] 
                                                        xs:text-[clamp(10px,2.5vw,12px)]">Date</p>
                                            <p className="card_date_value text-[clamp(12px,3vw,14px)] text-white m-0 
                                                        sm:text-[clamp(11px,2.8vw,13px)] 
                                                        xs:text-[clamp(10px,2.5vw,12px)]">2025-05-22</p>
                                        </div>

                                        {/* Third Section - Extra Bonus Text */}
                                        <div className="card_section3 flex items-center flex-1 min-w-0 justify-center">
                                            <p className="card_bonus_text text-[clamp(14px,3.5vw,16px)] text-white m-0 text-center 
                                                        sm:text-[clamp(13px,3.2vw,15px)] 
                                                        xs:text-[clamp(12px,3vw,14px)]">Extra bonus</p>
                                        </div>

                                        {/* Fourth Section - Logo and Price */}
                                        <div className="card_section4 flex items-center flex-shrink-0 gap-[5px] mr-0 
                                                      sm:mr-0 
                                                      xs:mr-0 
                                                      lg:mr-0 
                                                      md:mr-0">
                                            <div className="card_coin_img w-5 h-5 flex-shrink-0 
                                                          sm:w-[18px] sm:h-[18px] 
                                                          xs:w-4 xs:h-4 
                                                          lg:w-[22px] lg:h-[22px]">
                                                <img src={coin2} alt="coin" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="card_price text-[clamp(14px,3.5vw,16px)] text-white m-0 
                                                        sm:text-[clamp(13px,3.2vw,15px)] 
                                                        xs:text-[clamp(12px,3vw,14px)]">9.890</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="card w-full h-[70px] bg-[#0B7B930F] border-[0.5px] border-[#0B7B93] max-w-full flex items-center px-[5%] py-0 gap-2 mt-[15px] 
                                                  sm:w-full sm:h-20 sm:border-[0.5px] sm:border-[#0B7B93] sm:bg-[#0B7B930F] sm:max-w-full sm:flex sm:items-center sm:px-[5%] sm:py-0 sm:gap-[6px] sm:mt-3 
                                                  xs:h-[70px] xs:px-[3%] xs:py-0 xs:border-[0.5px] xs:border-[#0B7B93] xs:bg-[#0B7B930F] xs:gap-[5px] xs:mt-[10px] 
                                                  lg:w-full lg:h-[70px] lg:border-[0.5px] lg:border-[#0B7B93] lg:bg-[#0B7B930F] lg:px-[5%] lg:py-0 lg:mt-5 
                                                  md:w-full md:h-[70px] md:border-[0.5px] md:border-[#0B7B93] md:bg-[#0B7B930F] md:px-[5%] md:py-0 md:mt-[15px]">
                                        {/* First Section - Image */}
                                        <div className="card_section1 flex items-center flex-shrink-0">
                                            <div className="card_img w-10 h-10 flex-shrink-0 
                                                          sm:w-[35px] sm:h-[35px] 
                                                          xs:w-[30px] xs:h-[30px] 
                                                          lg:w-[45px] lg:h-[45px]">
                                                <img src={cardimg} alt="card-icon" className="w-full h-full object-cover" />
                                            </div>
                                        </div>

                                        {/* Second Section - Date */}
                                        <div className="card_section2 flex flex-col items-start flex-shrink-0 ml-[15px] 
                                                      sm:ml-5 sm:items-start 
                                                      xs:ml-[10px] xs:items-start">
                                            <p className="card_date_label text-[clamp(12px,3vw,14px)] text-white m-0 mb-[2px] 
                                                        sm:text-[clamp(11px,2.8vw,13px)] 
                                                        xs:text-[clamp(10px,2.5vw,12px)]">Date</p>
                                            <p className="card_date_value text-[clamp(12px,3vw,14px)] text-white m-0 
                                                        sm:text-[clamp(11px,2.8vw,13px)] 
                                                        xs:text-[clamp(10px,2.5vw,12px)]">2025-05-20</p>
                                        </div>

                                        {/* Third Section - Extra Bonus Text */}
                                        <div className="card_section3 flex items-center flex-1 min-w-0 justify-center">
                                            <p className="card_bonus_text text-[clamp(14px,3.5vw,16px)] text-white m-0 text-center 
                                                        sm:text-[clamp(13px,3.2vw,15px)] 
                                                        xs:text-[clamp(12px,3vw,14px)]">Weekly bonus</p>
                                        </div>

                                        {/* Fourth Section - Logo and Price */}
                                        <div className="card_section4 flex items-center flex-shrink-0 gap-[5px] mr-0 
                                                      sm:mr-0 
                                                      xs:mr-0 
                                                      lg:mr-0 
                                                      md:mr-0">
                                            <div className="card_coin_img w-5 h-5 flex-shrink-0 
                                                          sm:w-[18px] sm:h-[18px] 
                                                          xs:w-4 xs:h-4 
                                                          lg:w-[22px] lg:h-[22px]">
                                                <img src={coin2} alt="coin" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="card_price text-[clamp(14px,3.5vw,16px)] text-white m-0 
                                                        sm:text-[clamp(13px,3.2vw,15px)] 
                                                        xs:text-[clamp(12px,3vw,14px)]">12.560</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        
                        {activeView === 'cardmember' && (
                            <div className="section3 cardmember-section w-full max-w-[450px] lg:max-w-[550px]">
                                <div className="empty-state text-center py-10">
                                    <h2 className="text-[clamp(16px,4vw,20px)] text-white mb-4">Card Member Section</h2>
                                    <p className="text-[clamp(14px,3.5vw,16px)] text-white opacity-80">No card member information available at the moment.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Page2