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

    const [lectures, setLectures] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [studentNum, setStudentNum] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = sessionStorage.getItem('auth');
        setIsLogin(auth === 'true');
    
        
        if (auth === 'true') {
            
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

    // 로그아웃 API
    const post_logout = () => {
        const token = sessionStorage.getItem('token');
    
        axios.post('http://127.0.0.1:8000/logout/', {}, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(() => {
 
            sessionStorage.removeItem('auth');
            sessionStorage.removeItem('token');
            setIsLogin(false);
            navigate('/'); 
        })
        .catch(error => {
            console.log('Error during logout:', error);
        });
    };
    
    // 선택한 강의 가져오기 API
    useEffect(() => {
        // 인증 토큰을 세션 스토리지에서 가져옵니다.
        const token = sessionStorage.getItem('token');
        const config = {
            headers: { Authorization: `Token ${token}` }
        };

        axios.get('http://127.0.0.1:8000/register/userclasslist/', config)
            .then(response => {
                // 서버에서 받은 강의 데이터를 상태에 설정합니다.
                setLectures(response.data);
            })
            .catch(error => {
                console.error('Error fetching lectures:', error);
            });
    }, []);

    console.log("유저한 선택한 강의",lectures)

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
                                    <s.main_logout_btn onClick={post_logout}>로그아웃</s.main_logout_btn>
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
                                            {
                                                lectures.map((lecture, index) => {

                                                    return lecture.userclass.map((classInfo, classIndex) => (
                                                        <LectureItem 
                                                            key={`${index}-${classIndex}`} 
                                                            id={classInfo.id} 
                                                            title={classInfo.name} 
                                                            place={classInfo.place} 
                                                        />
                                                    ));
                                                })
                                            }
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