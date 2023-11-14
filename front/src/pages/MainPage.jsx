import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as s from '../style/Main.Style.js';
// import dgu_logo from "../assets/image/dgu_logo.svg";
import eclass_logo from '../assets/image/eclass_logo.png';
import DGU_logo from "../assets/image/dgu_logo.svg";
import LectureItem from "../components/LectureItem";
import Todo from "../components/Todo";
import TimeTable from "../components/TimeTable";
import LogoutCal from "../components/LogoutCal/index.jsx";
import LoginCal from "../components/LoginCal/index.jsx";
import axios from "axios";

function MainPage(props) {


    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [studentNum, setStudentNum] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // 로컬 스토리지나 세션 스토리지에서 로그인 상태 확인
        const auth = sessionStorage.getItem('auth');
        setIsLogin(auth === 'true');
    
        // 로그인 상태일 경우 사용자 정보를 가져옵니다.
        if (auth === 'true') {
            // 인증 토큰을 세션 스토리지에서 가져옵니다.
            const token = sessionStorage.getItem('token');

            axios.get('http://127.0.0.1:8000/profile/', {
                headers: {
                    Authorization: `Token ${token}`
                }

            })
            .then(response => {
                const studentNum = response.data.student_id;
                const userName = response.data.name;
                setStudentNum(studentNum);
                setUserName(userName);
            })
            .catch(error => {
                console.log('Error fetching user data:', error);
            });
        }
    }, []);
    

    const onClickLogin = () => {
            navigate(`/login`);
    };

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
                                    <s.UserBox>
                                        <s.User>
                                        <p>{userName}</p>
                                        <p>( </p>
                                        <p>{studentNum}</p>
                                        <p> )</p>
                                        </s.User>
                                        <s.Description>쪽 지</s.Description>
                                        <s.NoteBox>1</s.NoteBox>
                                    </s.UserBox>
                                    
                                </s.TitleBox>
                                <s.ComponentBox>

                                        {/* 시간표 */}
                                        <s.Item>
                                            <s.Main_TimeTable_item>
                                                <TimeTable />
                                            </s.Main_TimeTable_item>
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
                                            <s.Main_Todo_item>
                                                <Todo />
                                            </s.Main_Todo_item>
                                        </s.Item>


                                        {/* 캘린더 */}
                                        <s.Item>
                                            <s.Main_LogoutCal_item>
                                                <LoginCal />
                                            </s.Main_LogoutCal_item>
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
                                    <s.Main_LogoutCal_item>
                                        <LogoutCal />
                                    </s.Main_LogoutCal_item>
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