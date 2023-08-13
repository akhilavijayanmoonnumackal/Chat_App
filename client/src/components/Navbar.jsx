import React, { useEffect, useState } from "react";
import { PiWechatLogoFill } from 'react-icons/pi';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [header, setHeader] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleHeader = () => {
        setHeader(!header);
    };

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return (
        <>

        <div className={`flex  top-0 justify-between items-center h-24 w-[100%] mx-auto px-4 text-white transition-colors${scrolled ? 'bg-gray-900':'bg-transparent'}`}>
            <h1 className="w-1 text-3xl"><PiWechatLogoFill color="green"/></h1>     
            <h1 className="w-full text-3xl font-bold text-yellow-500 ml-6"><Link to='/'>talkto.me</Link></h1>
            <span className="text-yellow-600">Akhila</span>
            <ul className="hidden md:flex">
                <Link to='/login' className="p-4">Login</Link>
                <Link to='/register' className="p-4">Register</Link>
            </ul>
            <div onClick={handleHeader} className="block md:hidden">
                { header ? <AiOutlineCloseCircle size={20}/> : <BiMenu size={20}/>}
            </div>
            <div className={header ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="pt-5 w-1 text-3xl h-0 ml-3"><PiWechatLogoFill color="green"/></h1>
                <h1 className="w-full font-bold text-2xl ml-12 pt-0">talkto.me</h1>
                <ul className="flex flex-col p-12">
                    <Link to='/login' className="p-1 border-b border-gray-700">Login</Link>
                    <Link to='/register' className="p-1 border-b border-gray-700">Register</Link>
                </ul>
            

            </div>
            
        </div>
        </>
    )

    
    
};

export default Navbar;