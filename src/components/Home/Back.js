import React from 'react'
import "./Back.css";

function Back() {
    return (
        <div className="background">
            <img src="img/Background.png"
            className="backimge"/>
            <h1 className="back-text">
                <li>Make</li>
                <li>Our</li>
                <li>Software</li>
            </h1>
            <h1 className="back-word">
                <li className="back-mos">"Make Our Software"</li>
                <li>MOS는 1981년 창설된 원광대학교 컴퓨터 공학과의 학술동아리입니다.</li>
            </h1>
        </div>
    )
}

export default Back
