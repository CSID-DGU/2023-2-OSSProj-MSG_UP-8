import React from "react";
import { useNavigate } from 'react-router-dom';



function MainPage(props) {

    const navigate = useNavigate();

    const onClickLogin = () => {
            navigate(`/login`);
    };

    return(
        <>
            <div>
                <h1>메인페이지</h1>
                <button onClick={onClickLogin}>로그인
                    
                </button>
            </div>
        </>
    );
}

export default MainPage;