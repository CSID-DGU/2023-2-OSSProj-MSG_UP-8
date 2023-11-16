import React, {useState, useEffect} from "react";
import * as s from '../style/Lecture.style.js'
import LectureChoice from "../components/LectureChoice";
import eclass_logo from '../assets/image/eclass_logo.png';
import axios from "axios";

function Lecturepage(props) {

    const [lectures, setLectures] = useState([]);

    const [checkItems, setCheckItems] = useState(new Set());

    const checkItemHandler = (id, isChecked) => {
      const newCheckItems = new Set(checkItems);
      if (isChecked) {
        newCheckItems.add(id);
      } else {
        newCheckItems.delete(id);
      }
      setCheckItems(newCheckItems);
    };


    const get_classpick = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/register/classlist/');
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

    const post_classpick = async () => {
      try {
        const userId = sessionStorage.getItem('user_id'); 
        console.log(userId);
    
        const requestBody = {
          user: userId,
          userclass: Array.from(checkItems)
        };
    
        const response = await axios.post('http://127.0.0.1:8000/register/userclasslist/', requestBody);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }; 

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
                    <s.confirmBtn onClick={post_classpick}>확인</s.confirmBtn>
                  </s.lectureBtn>
                </s.CheckBoxList>
              </s.Box>
            </s.Container>
          </s.Wrapper>
        </>
    );
}

export default Lecturepage;