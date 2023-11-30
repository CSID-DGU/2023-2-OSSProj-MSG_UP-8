import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "../../assets/image/Homepage.svg";
import Mypage from "../../assets/image/Mypage.svg";
import Message from "../../assets/image/Message.svg";
import * as s from "./styles.js";
import axios from "axios";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [studentNum, setStudentNum] = useState("");

  const onClickHome = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const auth = sessionStorage.getItem("auth");

    if (auth === "true") {
      const token = sessionStorage.getItem("token");

      axios
        .get("http://127.0.0.1:8000/profile/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          const studentNum = response.data.student_id;
          const userName = response.data.name;
          setStudentNum(studentNum);
          setUserName(userName);
        })
        .catch((error) => {
          console.log("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <>
      <s.Wrapper>
        <s.LeftNav>
          <s.LBox onClick={onClickHome}>
            <s.Icon>
              <img src={Homepage} alt="" />
            </s.Icon>
            <s.Description>홈으로</s.Description>
          </s.LBox>
          <s.LBox>
            <s.Icon>
              <img src={Mypage} alt="" />
            </s.Icon>
            <s.Description>마이 페이지</s.Description>
          </s.LBox>
        </s.LeftNav>

        <s.RightNav>
          <s.RBox>
            <s.Icon>
              <img src={Message} alt="" />
            </s.Icon>
            <s.Description>쪽 지</s.Description>
            <s.NoteBox>1</s.NoteBox>
          </s.RBox>
          <s.RNameBox>
            <s.Name>
              {userName}
              <div>(</div>
              {studentNum}
              <div>)</div>
              <div> 님</div>
            </s.Name>
            <s.NavBtn>
              <s.UpdateShedule>강의 시간표 수정</s.UpdateShedule>
              <s.LogoutBtn>로그아웃</s.LogoutBtn>
            </s.NavBtn>
          </s.RNameBox>
        </s.RightNav>
      </s.Wrapper>
    </>
  );
}
