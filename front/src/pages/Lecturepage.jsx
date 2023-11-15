import React, {useState, useEffect} from "react";
import * as s from '../style/Lecture.style.js'
import LectureChoice from "../components/LectureChoice";
import eclass_logo from '../assets/image/eclass_logo.png';
import axios from "axios";

function Lecturepage(props) {

    const [lectures, setLectures] = useState([]);

    const get_classpick = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/eclass/classlist/');
        console.log(response.data); 
        if (Array.isArray(response.data)) { 
          setLectures(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      get_classpick();
    }, []);
  
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
                    {Array.isArray(lectures) && lectures.map((item, index) => (
                        <LectureChoice key={index} id={item.id} title={item.name} checkItemHandler={checkItemHandler} />
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