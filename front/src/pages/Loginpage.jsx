import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as s from "../style/Login.style.js";
import login_icon from "../assets/image/login_icon.svg";
import login_pwd from "../assets/image/login_pwd.svg";
import eclass_logo from "../assets/image/eclass_logo.png";
import axios from "axios";

function Login(props) {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate(`/Login`);
  };

  const onClickSignup = () => {
    navigate(`/Signup`);
  };

  const [inputs, setInputs] = useState({
    student_id: "",
    password: "",
  });

  const { student_id, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const post_login = async (event) => {
    event.preventDefault();
    const data = {
      student_id: inputs.student_id,
      password: inputs.password,
    };
    try {
      await axios.post("http://127.0.0.1:8000/login/", data).then((res) => {
        // 토큰 저장
        const token = res.data.token; // 또는 백엔드에서 전달하는 토큰 키에 따라 달라질 수 있습니다.
        sessionStorage.setItem("token", token);

        const user_id = res.data.user_id;
        sessionStorage.setItem("user_id", user_id);
        console.log(user_id);

        // 모든 후속 axios 요청에 Authorization 헤더 추가
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;

        // 인증 상태 저장
        sessionStorage.setItem("auth", true);
        navigate(`/`);
      });
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

          <s.login_container>
            <s.login_name_choice>
              <s.login_name onClick={onClickLogin}>로그인</s.login_name>
              <s.signup_name onClick={onClickSignup}>회원가입</s.signup_name>
            </s.login_name_choice>
            <form onSubmit={post_login}>
              <s.login_box>
                <s.login_input>
                  <s.login_id>
                    <s.login_id_img src={login_icon} alt="" />
                    <s.login_input_box
                      type="text"
                      placeholder="학번"
                      name="student_id"
                      value={student_id}
                      onChange={onChange}
                      autoComplete="current-id"
                    />
                  </s.login_id>

                  <s.login_pwd>
                    <s.login_pwd_img src={login_pwd} alt="" />
                    <s.login_input_box
                      type="password"
                      placeholder="비밀번호"
                      name="password"
                      value={password}
                      onChange={onChange}
                      autoComplete="current-password"
                    />
                  </s.login_pwd>
                </s.login_input>

                <s.login_btn type="submit">로그인</s.login_btn>
              </s.login_box>
            </form>
          </s.login_container>
        </s.Container>
      </s.Wrapper>
    </>
  );
}

export default Login;
