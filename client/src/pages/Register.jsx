import React, { useContext, useState } from "react";
import { PiWechatLogoFill } from 'react-icons/pi';
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const { registerInfo, updateRegisterInfo } = useContext(AuthContext);
    return (
        <>
            <div className="flex items-center justify-center m-16">
                <div className="bg-slate-600 w-full max-w-[400px] rounded py-5 h-[90px] flex flex-col items-center">
                    <h1 className="text-3xl"><PiWechatLogoFill color="green"/></h1>
                    <h1 className="text-2xl font-bold text-yellow-500">talkto.me</h1>
                    
                    <form >
                        <div className="flex flex-col m-7">
                            <label className="mt-4">Name</label>
                            <input className="p-1 rounded bg-slate-500" type="text" onChange={(e) => 
                                updateRegisterInfo({ ...registerInfo, name: e.target.value})
                            } />

                            <label className="mt-4">Email</label>
                            <input className="p-1 rounded bg-slate-500" type="email" onChange={(e) => 
                                updateRegisterInfo({ ...registerInfo, email: e.target.value})
                            } />

                            <label className="mt-4">Password</label>
                            <input className="p-1 rounded bg-slate-500" type="password" onChange={(e) =>
                                updateRegisterInfo({ ...registerInfo, password: e.target.value})
                            } />

                            <label className="mt-4">Mobile No.</label>
                            <input className="p-1 rounded bg-slate-500" type="text" onChange={(e) => 
                                updateRegisterInfo({ ...registerInfo, mobile: e.target.value})
                            } />

                            <button className="bg-lime-700 p-2 mt-9 w-72 rounded font-bold text-2xl" type="submit">SIGN IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};


export default Register;