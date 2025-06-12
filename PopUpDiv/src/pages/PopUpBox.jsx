import React from 'react'
import closeIcon from '../assets/x-square.png'
function PopUpBox() {
    return (
        <>
            <div className="w-screen h-screen bg-black justify-center items-center flex fixed top-0 left-0 z-50">
                <div className="w-[696px] h-[552px] bg-white mx-auto border border-[0.5px] border-[#0B7B93]">

                    {/* Header bar with close button */}
                    <div className="w-full h-[40px] bg-red-500 flex items-center relative">
                        <div className="absolute bg-blue-500 w-[24px] h-[24px] right-[2%]">
                            <button className="w-full h-full object-cover">
                                <img className="w-full h-full object-cover" src={closeIcon} alt="" />
                            </button>
                        </div>
                    </div>

                    {/* Main content box */}
                    <div className="w-[596px] h-[467px] mx-auto bg-blue-500 mt-4">
                        {/* Your content */}
                    </div>

                </div>
            </div>

        </>
    )
}

export default PopUpBox