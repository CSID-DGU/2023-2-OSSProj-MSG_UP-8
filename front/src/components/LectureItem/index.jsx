import React, { useState } from "react";
import * as s from "./styles.js";

export default function LectureItem(props) {

    return(
        <>
            <s.Wrapper>
                <s.LectureItem id={props.id}>
                    <s.Title>
                        <s.LectureTitle>{props.title}</s.LectureTitle>
                        {/* 강의실 바로가기 페이지 연결 */}
                        <s.LecturePageBtn>강의실 가기</s.LecturePageBtn>
                    </s.Title>
                    <s.Time>
                        <s.LectureTime>강의 시간 : {props.time}</s.LectureTime>
                    </s.Time>

                    <s.BtnContainer>
                        <s.BtnContainer_c>학습자료실</s.BtnContainer_c>
                        <s.BtnContainer_c>공지사항</s.BtnContainer_c>
                        <s.BtnContainer_c>과제제출</s.BtnContainer_c>
                    </s.BtnContainer>

                </s.LectureItem>
            </s.Wrapper>
        </>
    )
}