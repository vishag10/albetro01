import React, { useState } from 'react'
import dividyn from "../assets/Vector.png"
import coin1 from "../assets/Frame.png"
import coin2 from "../assets/Group 1000004189.png"
import paisa from "../assets/Frame (2).png"
import cardimg from "../assets/Frame 2147223405.png"

function Page2() {
    const [activeView, setActiveView] = useState('history');

    const handleHistoryClick = () => setActiveView('history');
    const handleCardMemberClick = () => setActiveView('cardmember');

    return (
        <div className="bg-black w-full min-h-screen">
            <div className="flex flex-col items-center pt-[60px] px-[20px] pb-[20px] bg-black w-full min-h-screen">
                {/* Section 1 - Dividend Bar */}
                <div className="w-full max-w-[450px] mb-[20px] lg:max-w-[550px]">
                    {/* Dividend Header - Adjusted to keep on same line */}
                    <div className="flex items-center h-[40px] gap-[10px]">
                        <h1 className="text-white text-[15px] leading-none m-0">Dividend income</h1>
                        <div className="w-[70px] h-[20px] bg-[#2BC71638] flex items-center justify-center">
                            <span className="text-[#2BC716] text-[12px]">completed</span>
                        </div>
                    </div>
                    
                    {/* Dividyn Section */}
                    <div className="flex items-center w-full min-h-[42.84px] my-[10px] flex-wrap">
                        <div className="flex items-center flex-1 min-w-[150px]">
                            <div className="w-[27.45px] h-[27.45px] flex-shrink-0">
                                <img src={dividyn} alt="dividyn" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-auto pl-[3%]">
                                <h1 className="text-white text-[18px] leading-none m-0">dividyn</h1>
                            </div>
                        </div>
                        <div className="flex items-center w-full max-w-[200px] min-h-[36px] mt-[10px]">
                            <div className="flex items-center w-1/2 h-[36px] border-[1.34px] border-[#2BC716] bg-[#2BC71621] p-[4px]">
                                <div className="w-[23px] h-[23px] ml-[2%] flex-shrink-0">
                                    <img src={coin1} alt="coin1" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-white text-[16px] ml-[3%]">9.890</span>
                            </div>
                            <div className="flex items-center w-1/2 h-[36px] border-[1.34px] border-l-0 border-[#2BC716] bg-[#2BC71621] p-[4px]">
                                <div className="w-[23px] h-[23px] ml-[2%] flex-shrink-0">
                                    <img src={coin2} alt="coin1" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-white text-[16px] ml-[3%]">9.890</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Levels Section */}
                    <div className="flex flex-wrap w-full min-h-[60px] mt-[12px] gap-[8px]">
                        <div className="flex w-full max-w-[380px] h-[60px] flex-1 min-w-[200px]">
                            {[...Array(30)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`w-[12px] h-full ${i === 0 ? 'bg-gradient-to-b from-[#50B174] to-[#2BC716]' : 'bg-gradient-to-b from-[#50B174] to-[#2BC716] ml-[3px]'}`}
                                />
                            ))}
                        </div>
                        <div className="ml-auto w-[65px] h-[60px] min-h-[60px] bg-[#2BC71675] border-[1.8px] border-[#2BC716] flex-shrink-0">
                            <div className="w-full h-[20px] flex items-center p-[1px]">
                                <div className="h-[18px] w-[18px] flex-shrink-0">
                                    <img src={paisa} alt="paisa" className="w-full h-full object-cover" />
                                </div>
                                <div className="h-auto flex items-center flex-1 min-w-0">
                                    <h1 className="text-white text-[10px] ml-[2px] truncate m-0">Limit</h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full h-[calc(100%-22px)]">
                                <span className="text-white text-[14px]">72</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Section 2 - Toggle Buttons - Keep original alignment */}
                <div className="w-full max-w-[450px] h-[38px] mt-[15px] lg:max-w-[550px] lg:ml-[5%] lg:self-start">
                    <div className="flex gap-[8px]">
                        <div className="h-[38px] w-[140px] text-center bg-[#0B7B9321]">
                            <button 
                                onClick={handleHistoryClick}
                                className={`w-full h-full text-white bg-transparent border-none text-[14px] cursor-pointer ${activeView === 'history' ? 'bg-[rgba(11,123,147,0.31)]' : ''}`}
                            >
                                history
                            </button>
                        </div>
                        <div className="h-[38px] w-[140px] text-center bg-[#0B7B9321]">
                            <button 
                                onClick={handleCardMemberClick}
                                className={`w-full h-full text-white bg-transparent border-none text-[14px] cursor-pointer ${activeView === 'cardmember' ? 'bg-[rgba(11,123,147,0.31)]' : ''}`}
                            >
                                card member
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* History View - Expanded cards to match toggle buttons width */}
                {activeView === 'history' && (
                    <>
                        <div className="w-full max-w-[450px] py-[8px] mt-[15px] lg:max-w-[550px] lg:ml-[5%] lg:self-start">
                            <h1 className="text-white text-[18px] pt-[8px] m-0">Dividyn Income History</h1>
                        </div>
                        <div className="w-full max-w-[450px] mt-[15px] flex flex-col items-center gap-[15px] lg:max-w-[90%] lg:ml-[5%] lg:self-start">
                            {/* Card 1 */}
                            <div className="w-[100%] h-[70px] bg-[#0B7B930F] border-[0.5px] border-[#0B7B93] flex items-center px-[5%] gap-[8px]">
                                <div className="flex items-center flex-shrink-0">
                                    <div className="w-[40px] h-[40px] flex-shrink-0">
                                        <img src={cardimg} alt="card-icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start flex-shrink-0 ml-[25px]">
                                    <p className="text-white text-[14px] m-0 mb-[2px]">Date</p>
                                    <p className="text-white text-[14px] m-0">2025-05-22</p>
                                </div>
                                <div className="flex items-center flex-1 min-w-0 justify-center">
                                    <p className="text-white text-[16px] m-0">Extra bonus</p>
                                </div>
                                <div className="flex items-center flex-shrink-0 gap-[5px] mr-[5%]">
                                    <div className="w-[20px] h-[20px] flex-shrink-0">
                                        <img src={coin2} alt="coin" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-white text-[16px] m-0">9.890</p>
                                </div>
                            </div>
                            
                            {/* Card 2 */}
                            <div className="w-full h-[70px] bg-[#0B7B930F] border-[0.5px] border-[#0B7B93] flex items-center px-[5%] gap-[8px]">
                                <div className="flex items-center flex-shrink-0">
                                    <div className="w-[40px] h-[40px] flex-shrink-0">
                                        <img src={cardimg} alt="card-icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start flex-shrink-0 ml-[25px]">
                                    <p className="text-white text-[14px] m-0 mb-[2px]">Date</p>
                                    <p className="text-white text-[14px] m-0">2025-05-20</p>
                                </div>
                                <div className="flex items-center flex-1 min-w-0 justify-center">
                                    <p className="text-white text-[16px] m-0">Extra bonus</p>
                                </div>
                                <div className="flex items-center flex-shrink-0 gap-[5px] mr-[5%]">
                                    <div className="w-[20px] h-[20px] flex-shrink-0">
                                        <img src={coin2} alt="coin" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-white text-[16px] m-0">9.890</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                
                {/* Card Member View */}
                {activeView === 'cardmember' && (
                    <div className="w-full max-w-[450px] mt-[15px] lg:max-w-[550px] lg:ml-[5%] lg:self-start">
                        <div className="text-center">
                            <h2 className="text-white text-lg">Card Member Section</h2>
                            <p className="text-white text-sm">No card member information available at the moment.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page2