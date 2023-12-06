import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import * as s from "../style/LectureDetail.style.js";
import ChosenLecture from "../components/ChosenLecture";

function LectureDetailPage(props) {
  const params = useParams();
  const class_id = params.pk;
  const [lectureDetails, setLectureDetails] = useState(null);
  const [currentTab, clickTab] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Token ${token}` },
    };
    axios
      .get(`http://127.0.0.1:8000/class/${class_id}/`, config)
      .then((response) => {
        setLectureDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lecture details", error);
      });
  }, []);

  const menuArr = [
    { name: "학습 목차", body: "1" },
    { name: "학습 자료실", body: "2" },
    { name: "공지사항", body: "3" },
    { name: "과제", body: "4" },
  ];

  const selectMenu = (index) => {
    clickTab(index);
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 0: // 학습 목차
        return (
          <s.LectureContent>
            <s.LectureCon>
              <s.WeekBox>
                <div>2주차</div>
                <div>2023-09-08 ~ 2023-09-14</div>
              </s.WeekBox>

              <s.GreenBox>
                <div>2주차 1강</div>
                <div>강의기간 : 2023-09-11 13:00 ~ 15:00</div>
              </s.GreenBox>

              <s.GreenBox>
                <div>2주차 2강</div>
                <div>강의기간 : 2023-09-13 13:00 ~ 15:00</div>
              </s.GreenBox>

              <s.Process>
                <s.Processtext>1강</s.Processtext>
                <s.ProcessBox>
                  <s.Processbar>O 출석</s.Processbar>
                </s.ProcessBox>
              </s.Process>

              <s.Process>
                <s.Processtext>2강</s.Processtext>
                <s.ProcessBox>
                  <s.Processbar>O 출석</s.Processbar>
                </s.ProcessBox>
              </s.Process>
            </s.LectureCon>

            <s.LectureCon>
              <s.WeekBox>
                <div>3주차</div>
                <div>2023-09-15 ~ 2023-09-21</div>
              </s.WeekBox>

              <s.GreenBox>
                <div>3주차 1강</div>
                <div>강의기간 : 2023-09-18 13:00 ~ 15:00</div>
              </s.GreenBox>

              <s.GreenBox>
                <div>3주차 2강</div>
                <div>강의기간 : 2023-09-20 13:00 ~ 15:00</div>
              </s.GreenBox>

              <s.Process>
                <s.Processtext>3강</s.Processtext>
                <s.ProcessBox>
                  <s.Processbar>O 출석</s.Processbar>
                </s.ProcessBox>
              </s.Process>

              <s.Process>
                <s.Processtext>4강</s.Processtext>
                <s.ProcessBox>
                  <s.Processbar>O 출석</s.Processbar>
                </s.ProcessBox>
              </s.Process>
            </s.LectureCon>

            <s.LectureCon>
              <s.WeekBox>
                <div>4주차</div>
                <div>2023-09-22 ~ 2023-09-28</div>
              </s.WeekBox>

              <s.GreenBox>
                <div>4주차 1강</div>
                <div>강의기간 : 2023-09-25 13:00 ~ 15:00</div>
              </s.GreenBox>

              <s.GreenBox>
                <div>2주차 2강</div>
                <div>강의기간 : 2023-09-27 13:00 ~ 15:00</div>
              </s.GreenBox>

              <s.Process>
                <s.Processtext>5강</s.Processtext>
                <s.ProcessBox>
                  <s.Processbar>O 출석</s.Processbar>
                </s.ProcessBox>
              </s.Process>

              <s.Process>
                <s.Processtext>6강</s.Processtext>
                <s.ProcessBox>
                  <s.Processbar>O 출석</s.Processbar>
                </s.ProcessBox>
              </s.Process>
            </s.LectureCon>
          </s.LectureContent>
        );
      case 1: // 학습 자료실
        return <div>학습 자료실</div>;
      case 2: // 공지사항
        return <div>공지사항</div>;
      case 3: // 과제
        return <div>과제</div>;

      default:
        return <div>default</div>;
    }
  };

  return (
    <>
      <Navbar />
      <s.Wrapper>
        <s.HeadContent>
          <s.TitleBox>
            <s.LectureTitle>{lectureDetails?.name}</s.LectureTitle>
          </s.TitleBox>
        </s.HeadContent>

        <s.ConArea>
          <s.ChosenArea>
            <ChosenLecture title={lectureDetails?.name} content="content" />
          </s.ChosenArea>
        </s.ConArea>

        <s.BodyContent>
          <s.TabMenu>
            {menuArr.map((el, index) => (
              <li
                className={index === currentTab ? "submenu focused" : "submenu"}
                onClick={() => selectMenu(index)}
              >
                {el.name}
              </li>
            ))}
          </s.TabMenu>
          <s.TabContent>{renderTabContent()}</s.TabContent>
        </s.BodyContent>
      </s.Wrapper>
    </>
  );
}

export default LectureDetailPage;
