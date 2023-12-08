import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/Lecture.style.js";
import LectureChoice from "../components/LectureChoice";
import eclass_logo from "../assets/image/eclass_logo.png";
import axios from "axios";

function Lecturepage(props) {
  //권한 설정
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  });

  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

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
          const userId = response.data.id;
          setUserId(userId);

          get_classpick();
        })
        .catch((error) => {
          console.log("Error fetching user data:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (userId) {
      get_classpick();
    }
  }, [userId]);

  console.log("userID확인", userId);

  const get_classpick = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/register/classlist/");
      console.log("강의목록", response.data);
      if (Array.isArray(response.data)) {
        setLectures(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const post_classpick = async () => {
    try {
      console.log(Array.from(checkItems));
      const requestBody = {
        user: userId,
        userclass: Array.from(checkItems),
      };

      // 첫 번째 API 호출
      const response1 = await axiosInstance.post(
        "http://127.0.0.1:8000/register/userclasslist/",
        requestBody
      );
      console.log("1:", response1.data);

      const secondRequestBody = {
        userprofile: userId,
        userclasses: Array.from(checkItems),
      };

      // 두 번째 API 호출
      const response2 = await axiosInstance.post(
        "http://127.0.0.1:8000/timetable/classlist/",
        secondRequestBody
      );
      console.log("2", response2.data);

      navigate(`/`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <s.Wrapper>
        <s.Container>
          <s.TitleBox>
            <img src={eclass_logo} alt="" />
          </s.TitleBox>
          <s.Box>
            <s.LectureTitle>수강 과목 입력</s.LectureTitle>
            <s.CheckBoxList>
              <s.lectureComponent>
                {Array.isArray(lectures) &&
                  lectures.map((item, index) => (
                    <LectureChoice
                      key={index}
                      id={item.id}
                      title={item.name}
                      checkItemHandler={checkItemHandler}
                    />
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
