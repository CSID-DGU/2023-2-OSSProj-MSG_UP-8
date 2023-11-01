import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as s from '../style/Main.Style.js';
// import dgu_logo from "../assets/image/dgu_logo.svg";
import eclass_logo from '../assets/image/eclass_logo.png';
import DGU_logo from "../assets/image/dgu_logo.svg";
import LectureItem from "../components/LectureItem";

function MainPage(props) {


    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const onClickLogin = () => {
            navigate(`/login`);
    };
    // const onClickSignup = () => {
    //     navigate(`/signup`);

    // LectureItem 더미
    const Ldata = [
        { id: 1, title: "컴퓨터 시스템", time: "09:00-10:30" },
        { id: 2, title: "오픈소프트웨어 프로젝트", time: "13:00-15:00" },
        { id: 3, title: "융합프로그래밍1", time: "15:00-16:30"},
    ]

    return(
        <>
            <s.Wrapper>
                <s.Container>
                {
                    isLogin ?

                        <>
                            <s.TitleBox>
                                    <img
                                        src={eclass_logo}
                                        alt="" />
                                    <s.main_logout_btn>로그아웃</s.main_logout_btn>

                                </s.TitleBox><s.ComponentBox>

                                        {/* 시간표 */}
                                        <s.Item>

                                            <img
                                                src={DGU_logo}
                                                alt="" /> :
                                            <s.message>로그인 후 사용가능합니다.</s.message>

                                        </s.Item>


                                        {/* 강의 컴포넌트 */}
                                        <s.Item>
                                            <s.Main_Lecture_item>
                                                {Ldata.map((item, index) => (
                                                    <LectureItem key={index} id={item.id} title={item.title} time={item.time} />
                                                ))}
                                            </s.Main_Lecture_item>
                                        </s.Item>


                                        {/* todo */}
                                        <s.Item>
                                            <img
                                                src={DGU_logo}
                                                alt="" />
                                            <s.message>로그인 후 사용가능합니다.</s.message>
                                        </s.Item>


                                        {/* 캘린더 */}
                                        <s.Item>

                                        </s.Item>

                                    </s.ComponentBox>
                                </>
                    :
                        <>
                            <s.TitleBox>
                                <img
                                src={eclass_logo}
                                alt=""
                                /> 
                                <s.main_login_btn onClick={onClickLogin}>로그인 및 회원가입</s.main_login_btn>
                            
                            </s.TitleBox>

                            <s.ComponentBox>

                                {/* 시간표 */}
                                <s.Item>
                                
                                    <img
                                    src={DGU_logo}
                                    alt=""
                                    /> :
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
                        </>
                }
                </s.Container>
            </s.Wrapper>
        </>
    );
}


export default MainPage;