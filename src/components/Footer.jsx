import React from "react";
import tele from '../tele.png';
import dribble from '../dribble.png';
import inst from '../inst.png';

function Footer(){
    return(
            <div className="relative overflow-hidden bg-[#171717] py-16 sm:py-24 lg:py-20">
                <div className="block px-6 lg:px-8 max-w-3xl mx-auto space-y-2">
                    <div className="mx-auto w-fit flex space-x-4">
                        <img src={dribble} alt="" className="w-10 h-10 hover:opacity-[0.5]" />
                        <img src={tele} alt="" className="w-10 h-10 hover:opacity-[0.5]"/>
                        <img src={inst} alt="" className="w-10 h-10 hover:opacity-[0.5]"/>
                    </div>
                    <div className="mx-auto w-fit text-center">
                        <h1 className="text-white">@ copyright - 2024</h1>
                        <p className="text-gray-700">Dm me for the information</p>
                    </div>
                </div>
            </div>
            
          )
}


export default Footer;