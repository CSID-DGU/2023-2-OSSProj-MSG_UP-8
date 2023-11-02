import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as s from '../style/Signup.style.js'
import login_icon from '../assets/image/login_icon.svg';
import login_pwd from '../assets/image/login_pwd.svg';
import eclass_logo from '../assets/image/eclass_logo.png';
import signup_name  from "../assets/image/signup_name.svg";



function Signup(props) {

    const navigate = useNavigate();

      const onClickSignup = () => {
        navigate(`/lecture`);
    };
  
    const [inputs, setInputs] = useState({
      id: '',
      password: '',
      name:'',
    });
  
    const { id, password, name } = inputs;
  
    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    };

const post_signup = () => {}


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
                            <s.login_title>
                                로그인
                            </s.login_title>
                            <s.signup_title>
                                회원가입
                            </s.signup_title>
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

                                    <s.signup_name>
                                        <s.signup_name_img
                                        src={signup_name}
                                        alt=""
                                        />
                                        <s.login_input_box
                                        type="text"
                                        placeholder="이름"
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                        autoComplete="current-name"
                                        />            
                                    </s.signup_name>

                                </form>

                                   

                            </s.login_input>

                            <s.login_btn onClick={() => {
                                post_signup();
                                onClickSignup();
                            }}>
                                회원가입
                            </s.login_btn>
                

                        </s.login_box>
                    </s.login_container>
                </s.Container>
            </s.Wrapper>
        </>
    );

}

export default Signup;