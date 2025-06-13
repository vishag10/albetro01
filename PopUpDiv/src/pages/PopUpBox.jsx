import React from 'react'
import closeIcon from '../assets/x-square.png'
import pic from '../assets/Frame (2).png'
import token from '../assets/Group 1000004189.png'

function PopUpBox() {
    return (
        <>
            <div className="w-screen h-screen bg-gray-700 justify-center items-center flex fixed top-0 left-0 z-50 p-2 sm:p-0">
                <div className="w-full max-w-[696px] h-auto bg-black mx-auto border border-[0.5px] border-[#0B7B93] sm:w-[696px] sm:h-[552px]">

                    {/* Header bar with close button */}
                    <div className="w-full h-[40px] bg-black flex items-center relative">
                        <div className="absolute  w-[24px] h-[24px] right-[2%]">
                            <button className="w-full h-full object-cover cursor-pointer">
                                <img className="w-full h-full object-cover" src={closeIcon} alt="" />
                            </button>
                        </div>
                    </div>

                    {/* Main content box */}
                    <div className="w-full px-4 pb-4 sm:w-[596px] sm:h-[467px] sm:mx-auto sm:px-0 sm:pb-0 sm:mt-4">
                        <div className="head w-full h-[35px] text-center mt-2 ">
                            <h1 className="font-bold text-[24px] text-white">Dividyn</h1>
                        </div>
                        <div className="para w-full h-[auto] mt-1">
                            <span className='text-white text-[13px] leading-[16px]' >Join the Dividyn and Watch Your Gains Grow <br />Maximize your returns by joining a Dividyn. Together ,we achieve more</span>
                        </div>

                        <div className="price w-full h-auto sm:h-[276px] mt-2">
                            <div className="text-white text-[12px] ">Dollar Amount
                            </div>
                            <div className="relative">
                                <select name="" id="" className='w-full h-[52px] text-[12px] bg-[#141414] border-t border-t-[#333333] text-white mt-2 pl-10'>
                                    <option value="">$50.0 Dollar</option>
                                </select>
                                <img
                                    src={pic}
                                    alt=""
                                    className="absolute left-3 top-1/2 transform -translate-y-1/3 w-[21px] h-[21px]"
                                />
                            </div>

                            <div className="text-white text-[12px] mt-2 ">ARS Tokens</div>
                            <div className="relative">
                                <div className='w-full h-[52px] text-[12px] bg-[#141414] border-t border-t-[#333333] text-white mt-2 pl-11 flex items-center'>
                                    359195.40 ARS tokens 
                                </div>
                                <img
                                    src={token}
                                    alt=""
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[21px] h-[21px]"
                                />
                            </div>

                            <div className="text-white text-[12px] mt-2 ">Total Earnings</div>
                            <div className="relative">
                                <div className='w-full h-[52px] text-[12px] bg-[#141414] border-t border-t-[#333333] text-white mt-2 pl-11 flex items-center'>
                                    $70.00 Dollar
                                </div>
                                <img
                                    src={pic}
                                    alt=""
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[21px] h-[21px]"
                                />
                            </div>

                        </div>


                        <div className="bt w-full mt-2 h-[52px]">
                            <button className="w-full h-full bg-[#0B7B93] text-white  text-[14px] cursor-pointer">Pay Wallet</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PopUpBox