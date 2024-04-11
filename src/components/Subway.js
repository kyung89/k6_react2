import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { isLogin } from './StAtom'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

export default function Subway() {

    const isLoginCheck = useRecoilValue(isLogin);

    return (
        <div>
            {isLoginCheck ? "Subway" : <Login />}
        </div>
    )
}
