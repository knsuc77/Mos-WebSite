import React from 'react'
import "./LoginForm.css";

function LoginForm() {
    return (
        <div className="LOGIN">
            <h1 className="MOS">MOS</h1>
            <input type="text" className="id" placeholder="아이디"/>
            <br/>
            <input type="password" className="pw" placeholder="비밀번호"/>
            <br/>
            <button className="submit">LOGIN</button>
            <br/>
            <ul className="text">
            <li className="text1">혹시 MOS 신입생이세요? </li>
            <li className="text2-1"><a className="text2" href="#">회원가입</a></li>
            </ul>
        
        
        </div>
        
    )
}

export default LoginForm
