import React from "react";
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as s from '../style/Login.style.js'
import login_icon from '../assets/image/login_icon.svg';
import login_pwd from '../assets/image/login_pwd.svg';
import eclass_logo from '../assets/image/eclass_logo.png';



function Login(props) {

    // const navigate = useNavigate();

    // const onClickLogin = () => {
    //   navigate(`/Login`);
    // };
  
    // const onClickSignup = () => {
    //   navigate(`/Signup`);
    // };
  
    const [inputs, setInputs] = useState({
      id: '',
      password: '',
    });
  
    const { id, password } = inputs;
  
    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    };

const post_login = () => {}


    return(
        <>
            <s.Wrapper>
                <s.Container>
                    <s.TitleBox>
                        <img
                        src={eclass_logo}
                        alt=""
                        />
                    </s.TitleBox>

                    <s.login_container>
                        <s.login_name_choice>
                            <s.login_name>
                                로그인
                            </s.login_name>
                            <s.signup_name>
                                회원가입
                            </s.signup_name>
                        </s.login_name_choice>

                        <s.login_box>
                            <s.login_input>
                                <form>

                                    <s.login_id>
                                        <s.login_id_img
                                        src={login_icon}
                                        alt=""
                                        />
                                        <s.login_input_box
                                        type="text"
                                        placeholder="학번"
                                        name="id"
                                        value={id}
                                        onChange={onChange}
                                        autoComplete="current-id"
                                        />            
                                    </s.login_id>

                                    <s.login_pwd>
                                        <s.login_pwd_img
                                        src={login_pwd}
                                        alt=""
                                        />
                                        <s.login_input_box
                                        type="password"
                                        placeholder="비밀번호"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        autoComplete="current-password"
                                        />            
                                    </s.login_pwd>

                                </form>

                                   

                            </s.login_input>

                            <s.login_btn onClick={post_login}>
                                로그인
                            </s.login_btn>
                

                        </s.login_box>
                    </s.login_container>
                </s.Container>
            </s.Wrapper>
        </>
    );

}

export default Login;