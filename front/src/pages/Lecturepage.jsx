import React, {useState} from "react";
import * as s from '../style/Lecture.style.js'
import LectureChoice from "../components/LectureChoice";
import eclass_logo from '../assets/image/eclass_logo.png';
import axios from "axios";

function Lecturepage(props) {

    
    // const get_classpick = async () => {
    //   try {
    //     await axios
    //       .get(
    //         'http://127.0.0.1:8000/register/classpick',
    //       )
    //       .then(res => {
    //         // console.log(res);
    //         setProfile(res.data);
    //         setProfile2(res.data.profile);
    //         setUser_club_list(res.data.user_club_list);
    //         setUser_todo_list(res.data.user_todo_list);
    //         sessionStorage.setItem('userid', res.data.profile.id);
    //       });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // useEffect(() => {
    //   get_profile();
    // }, []);
    // 더미
    const data = [
        { id: 1, title: "컴퓨터 시스템" },
        { id: 2, title: "오픈소스 소프트웨어 프로젝트" },
        { id: 3, title: "융합프로그래밍1" },
        { id: 4, title: "데이터베이스" },
        { id: 5, title: "모바일 프로그래밍" },
        { id: 6, title: "융합프로그래밍2" },
        { id: 7, title: "오픈소스 소프트웨어 실습" },
        { id: 8, title: "파이썬프로그래밍" },
        { id: 9, title: "자료구조 알고리즘" },
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