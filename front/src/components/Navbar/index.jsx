import React from "react";
import { useNavigate } from 'react-router-dom';
import Homepage from '../../assets/image/Homepage.svg';
import Mypage from "../../assets/image/Mypage.svg";
import Message from "../../assets/image/Message.svg";
import * as s from "./styles.js";


export default function Navbar(props) {

    const navigate = useNavigate();
    const onClickHome = () => {
        navigate(`/`);
    };

    return(
        <>
            <s.Wrapper>
                <s.LeftNav>
                    <s.LBox onClick={onClickHome}>
                        <s.Icon>
                            <img
                                src={Homepage}
                                alt="" />
                        </s.Icon>
                        <s.Description>홈으로</s.Description>
                    </s.LBox>
                    <s.LBox>
                        <s.Icon>
                            <img
                                src={Mypage}
                                alt="" />
                        </s.Icon>
                        <s.Description>마이 페이지</s.Description>
                    </s.LBox>
                </s.LeftNav>

                <s.RightNav>
                    <s.RBox>
                        <s.Icon>
                            <img
                                src={Message}
                                alt="" />
                        </s.Icon>
                        <s.Description>쪽 지</s.Description>
                        <s.NoteBox>1</s.NoteBox>
                    </s.RBox>
                    <s.RNameBox>
                        <s.Name>
                            유다현(2021111552) 님
                        </s.Name>
                        <s.NavBtn>
                            <s.UpdateShedule>강의 시간표 수정</s.UpdateShedule>
                            <s.LogoutBtn>로그아웃</s.LogoutBtn>
                        </s.NavBtn>
                    </s.RNameBox>
                </s.RightNav>
            </s.Wrapper>

        </>
    )
}