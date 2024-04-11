import React from 'react'
import { useRecoilState } from 'recoil'
import { isLogin } from './StAtom'
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import Logout from './Logout';

export default function Login() {

    const [ user, setUser ] = useState();
    const [ isLoginCheck, setIsLoginCheck ] = useRecoilState(isLogin);

    const handleLogin = (u) => {
        localStorage.setItem('user', u);
        setUser(u);
        setIsLoginCheck(true);
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsLoginCheck(false);
    }

    useEffect(()=>{
        const luser = localStorage.getItem("user");
        console.log(luser);
        if(luser) {
            setUser(luser);
            setIsLoginCheck(true);
        }else{
            setUser(null);
            setIsLoginCheck(false);
        } 
    }, []);

    return (
    <div className="bg-slate-100 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {isLoginCheck ? <Logout user={user} handleLogout={handleLogout} /> : <LoginForm handleLogin={handleLogin} />}
    </div>
  )
}
