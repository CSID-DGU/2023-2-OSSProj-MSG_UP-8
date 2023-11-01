import React from "react";
import { useNavigate } from 'react-router-dom';



function MainPage(props) {

    const navigate = useNavigate();

    const onClickLogin = () => {
            navigate(`/login`);
    };
    const onClickSignup = () => {
        navigate(`/signup`);
};

    return(
        <>
            <div>
                {/* 확인용 */}
                <h1>메인페이지</h1>
                <button onClick={onClickLogin}>로그인</button>
                <button onClick={onClickSignup}>회원가입</button>
            </div>
        </>
    );
}

export default MainPage;