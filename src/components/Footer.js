import React from 'react'
import "./Footer.css";
import {GoLocation} from 'react-icons/go';
import {MdEmail} from 'react-icons/md';
import {RiContactsLine} from 'react-icons/ri';


function Footer() {
    return (
        <div className="footer">
            <img src="img/Full-MOS logo.png"
            className="full-logo"/>
            <ul className="footer-text">
                <h1 className="conect">conect</h1>
                <h2 className="footer-word">
                    저희 MOS동아리에 관심있는 학우 분들은 다음<br/>
                연락처 또는 동아리방으로 연락, 방문해주시기<br/> 
                바랍니다.</h2>
            </ul>
            <ul className="footer-info">
                <li className="footer-inner-info"><GoLocation/> 전라북도 익산시 익산대로 460 공학관 5층</li>
                <li className="footer-inner-info"><MdEmail/> gksqls0509@naver.com</li>
                <li className="footer-inner-info"><RiContactsLine/> 회장 주한빈: 010-9129-1392 </li>
            </ul>
            
            
        </div>
    )
}

export default Footer

