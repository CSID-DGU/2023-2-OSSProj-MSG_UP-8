import React, { useState, useEffect } from "react";
import * as s from "./styles.js";
import { useNavigate } from "react-router-dom";

export default function LectureItem(props) {
  const navigate = useNavigate();

  const goToLecturePage = () => {
    navigate(`/class/${props.id}`);
  };
  return (
    <>
      <s.Wrapper>
        <s.LectureItem id={props.id}>
          <s.Title>
            <s.LectureTitle>{props.title}</s.LectureTitle>
            {/* 강의실 바로가기 페이지 연결 */}
            <s.LecturePageBtn onClick={goToLecturePage}>강의실 가기</s.LecturePageBtn>
          </s.Title>
          <s.Time>
            <s.LectureTime>강의 장소 : {props.place}</s.LectureTime>
          </s.Time>

          <s.BtnContainer>
            <s.BtnContainer_c>학습자료실</s.BtnContainer_c>
            <s.BtnContainer_c>공지사항</s.BtnContainer_c>
            <s.BtnContainer_c>과제제출</s.BtnContainer_c>
          </s.BtnContainer>
        </s.LectureItem>
      </s.Wrapper>
    </>
  );
}
