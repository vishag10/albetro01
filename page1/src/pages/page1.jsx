import React from 'react';
import dividyn from "../assets/Vector.png"
import coin1 from "../assets/Frame.png"
import coin2 from "../assets/Group 1000004189.png"
import paisa from "../assets/Frame (2).png"

function Page1() {
    const indicators = Array.from({ length: 11 }, (_, i) => i);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
            {/* Main Content */}
            <div className="flex flex-col items-center justify-start min-h-screen pt-8 lg:pt-16 px-4 lg:px-8">
                
                {/* Dividend Bar */}
                <div className="w-full max-w-md lg:max-w-2xl bg-slate-800/30 backdrop-blur-sm border border-cyan-700/50 rounded-xl p-4 lg:p-6 mb-6">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                        <div>
                            <h1 className="text-white text-lg lg:text-xl font-semibold">Dividend Income</h1>
                        </div>
                        <div className="bg-cyan-900/50 border border-cyan-600 px-3 py-1 rounded-xl">
                            <span className="text-cyan-400 text-xs lg:text-sm font-medium">pending</span>
                        </div>
                    </div>

                    {/* Dividyn Section */}
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-full flex items-center justify-center">
                                <img src={dividyn} alt="dividyn" className="w-5 h-5 lg:w-6 lg:h-6" />
                            </div>
                            <h2 className="text-white text-lg lg:text-xl font-semibold">Dividyn</h2>
                        </div>
                        
                        <div className="flex">
                            <div className="flex items-center space-x-2 bg-slate-700/50 border border-cyan-600 px-3 py-2 rounded-l-lg">
                                <img src={coin1} alt="coin1" className="w-4 h-4 lg:w-5 lg:h-5" />
                                <span className="text-white text-sm lg:text-base font-medium">9.890</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-slate-700/50 border border-cyan-600 border-l-0 px-3 py-2 rounded-r-lg">
                                <img src={coin2} alt="coin2" className="w-4 h-4 lg:w-5 lg:h-5" />
                                <span className="text-white text-sm lg:text-base font-medium">9.890</span>
                            </div>
                        </div>
                    </div>

                    {/* Levels Section */}
                    <div className="flex items-end space-x-2 lg:space-x-3">
                        {/* Indicators */}
                        <div className="flex items-end space-x-1 flex-1">
                            {indicators.map((_, index) => (
                                <div 
                                    key={index}
                                    className={`bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm ${
                                        index < 8 
                                            ? 'w-2 lg:w-3 h-12 lg:h-16' 
                                            : 'w-2 lg:w-3 h-6 lg:h-8'
                                    }`}
                                />
                            ))}
                            <div className="flex-1 bg-gradient-to-r from-cyan-600/30 to-cyan-400/30 h-6 lg:h-8 rounded-t-sm ml-1" />
                        </div>
                        
                        {/* Limit Box */}
                        <div className="bg-cyan-900/30 border border-cyan-600 rounded-lg p-2 lg:p-3 w-16 lg:w-20">
                            <div className="flex items-center justify-center space-x-1 mb-1">
                                <img src={paisa} alt="paisa" className="w-4 h-4 lg:w-5 lg:h-5" />
                                <span className="text-white text-xs lg:text-sm font-medium">Limit</span>
                            </div>
                            <div className="text-center">
                                <span className="text-white text-lg lg:text-2xl font-bold">75</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex space-x-3 lg:space-x-4 w-full max-w-md lg:max-w-2xl mb-8 lg:ml-[5%] lg:mr-auto lg:max-w-none">
                    <button className="flex-1 lg:flex-none lg:w-48 bg-slate-800/40 border border-cyan-700/50 rounded-lg py-3 px-4 text-white font-medium hover:bg-slate-700/50 transition-colors">
                        History
                    </button>
                    <button className="flex-1 lg:flex-none lg:w-48 bg-slate-800/40 border border-cyan-700/50 rounded-lg py-3 px-4 text-white font-medium hover:bg-slate-700/50 transition-colors">
                        Card members
                    </button>
                </div>

                {/* Desktop dimension indicator */}
                <div className="hidden lg:block bg-cyan-500 text-white px-4 py-2 rounded-lg mb-8 lg:ml-[5%] lg:mr-auto">
                    <span className="font-mono text-sm">730 x 173</span>
                </div>

                {/* History Section */}
                <div className="w-full max-w-md lg:max-w-4xl lg:ml-[5%] lg:mr-auto">
                    <h3 className="text-white text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Dividyn Income History</h3>
                    
                    {/* History Items */}
                    <div className="space-y-3 lg:space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 lg:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3 lg:space-x-4">
                                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-cyan-600/20 border border-cyan-600 rounded-lg flex items-center justify-center">
                                            <span className="text-cyan-400 text-lg lg:text-xl">↓</span>
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm lg:text-base">Date</div>
                                            <div className="text-slate-400 text-xs lg:text-sm">2024-06-22</div>
                                        </div>
                                        <div className="hidden lg:block">
                                            <div className="text-white font-medium">Extra bonus</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img src={coin2} alt="coin" className="w-4 h-4 lg:w-5 lg:h-5" />
                                        <span className="text-white font-semibold text-sm lg:text-base">9.890</span>
                                    </div>
                                </div>
                                <div className="lg:hidden mt-2">
                                    <span className="text-slate-300 text-sm">Extra bonus</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page1;