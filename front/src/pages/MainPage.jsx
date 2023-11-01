import React from "react";
// import { useNavigate } from 'react-router-dom';
import * as s from '../style/Main.Style.js';
// import dgu_logo from "../assets/image/dgu_logo.svg";
import eclass_logo from '../assets/image/eclass_logo.png';
import DGU_logo from "../assets/image/dgu_logo.svg";



function MainPage(props) {

    // const navigate = useNavigate();

    // const onClickLogin = () => {
    //         navigate(`/login`);
    // };
    // const onClickSignup = () => {
    //     navigate(`/signup`);


    return(
        <>
            <s.Wrapper>
                <s.Container>
                        <s.TitleBox>
                            <img
                            src={eclass_logo}
                            alt=""
                            />
                            <s.main_login_btn>로그인 및 회원가입</s.main_login_btn>
                        </s.TitleBox>

                        <s.ComponentBox>

                            {/* 시간표 */}
                            <s.Item>
                                <img
                                src={DGU_logo}
                                alt=""
                                />
                                <s.message>로그인 후 사용가능합니다.</s.message>
                            </s.Item>
                            

                            {/* 강의 컴포넌트 */}
                            <s.Item>
                                <img
                                src={DGU_logo}
                                alt=""
                                />
                                <s.message>로그인 후 사용가능합니다.</s.message>
                            </s.Item>


                            {/* todo */}  
                            <s.Item>
                                <img
                                src={DGU_logo}
                                alt=""
                                />
                                <s.message>로그인 후 사용가능합니다.</s.message>
                            </s.Item>


                            {/* 캘린더 */}
                            <s.Item>
                            
                            </s.Item>




                        </s.ComponentBox>


                </s.Container>
            </s.Wrapper>
        </>
    );
}

export default MainPage;