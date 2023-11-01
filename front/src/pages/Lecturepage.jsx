import React, {useState} from "react";
import * as s from '../style/Lecture.style.js'
import LectureChoice from "../components/LectureChoice";
import eclass_logo from '../assets/image/eclass_logo.png';

function Lecturepage(props) {

    // 더미
    const data = [
        { id: 1, title: "컴퓨터 시스템" },
        { id: 2, title: "오픈소프트웨어 프로젝트" },
        { id: 3, title: "융합프로그래밍1" },
    ]

    // const checkList = [...Array(5).fill("체크").map((v, i => v + i))]

    const [checkItems, setCheckItems] = useState(new Set());

    const checkItemHandler = (id, isChecked) => {
        if (isChecked) {
          checkItems.add(id) 
          setCheckItems(checkItems)
          console.log(checkItems)
        } else if (!isChecked) {
          checkItems.delete(id)
          setCheckItems(checkItems)
        }
      }

    return (
        <>
          <s.Wrapper>
            <s.Container>
              <s.TitleBox>
                <img
                src={eclass_logo}
                alt=""
                />
              </s.TitleBox>
              <s.Box>
                <s.LectureTitle>수강 과목 입력</s.LectureTitle>
                <s.CheckBoxList>
                  <s.lectureComponent>
                    {data.map((item, index) => (
                        <LectureChoice key={index} id={item.id} title={item.title} checkItemHandler={checkItemHandler} />
                    ))}
                  </s.lectureComponent>
                  <s.lectureBtn>
                    <s.confirmBtn>확인</s.confirmBtn>
                  </s.lectureBtn>
                </s.CheckBoxList>
              </s.Box>
            </s.Container>
          </s.Wrapper>
        </>
    );
}

export default Lecturepage;