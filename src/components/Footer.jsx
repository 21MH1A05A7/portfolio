import React from "react";
import tele from '../tele.png';
import dribble from '../dribble.png';
import inst from '../inst.png';

function Footer(){
    return(
            <div className="relative overflow-hidden bg-[#171717] py-16 sm:py-24 lg:py-20">
                <div className="block px-6 lg:px-8 max-w-3xl mx-auto space-y-2">
                    <div className="mx-auto w-fit flex space-x-4">
                        <a href="mailto:harshadsai1312@gmail.com"><img src={dribble} alt="" className="w-10 h-10 hover:opacity-[0.5]" /></a>
                        <a href="https://www.linkedin.com/in/harshad-sai-matuparthi-a8375a267/"><img src={tele} alt="" className="w-10 h-10 hover:opacity-[0.5]"/></a>
                        <a href="https://www.instagram.com/w_hi_te_d_e_v_i_l/"><img src={inst} alt="" className="w-10 h-10 hover:opacity-[0.5]"/></a>
                    </div>
                    <div className="mx-auto w-fit text-center">
                        <h1 className="text-white">@ copyright - 2024</h1>
                        <p className="text-gray-500">Dm me for the information</p>
                    </div>
                </div>
                <div className="absolute bottom-0 flex space-x-2 w-full pb-8">
                    <div className="flex space-x-2 mx-auto max-w-7xl">
                        <h1 className="text-gray-400">harshadsai1312@gmail.com</h1>
                        <h1 className="text-gray-400">+91 7997420906</h1>
                    </div>
                </div>
            </div>
            
          )
}


export default Footer;