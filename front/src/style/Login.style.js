import styled from "@emotion/styled";
import theme from "./theme.js";
import DGU_BG from '../assets/image/DGU_BG.png';


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-color: ${theme.COLORS.BACKGROUND_WHITE};
    background-image: url(${DGU_BG});
    background-repeat: no-repeat;
    background-position: 100% 30vh;
    background-size: 100% 70vh;
`;

export const Container = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    flex-direction: column;
 
`;

export const TitleBox = styled.div`
    margin-top: 60px;

`;

export const login_container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    background-color: ${theme.COLORS.CONTAINER_WHITE};
    width: 600px;
    height: 350px;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY};
`;

export const login_name_choice = styled.div`
    font-size: ${theme.FONT_SIZE.MAIN_SIZE};
    width: 100%;
    height: 75px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: #7C7B79;
    background-color: ${theme.COLORS.GRAY};
    cursor: pointer;
`;

export const login_name = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-color: #7C7B79;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 100%;
    border-right: 1px solid ${theme.COLORS.GRAY};
    background-color: ${theme.COLORS.CONTAINER_WHITE};

`;

export const signup_name = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`;

export const login_box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;   

`;
export const login_input = styled.div`
    width: 80%;
    -webkit-box-shadow: 1px 7px 5px -1px #cdcdcd;
    box-shadow: 1px 7px 5px -1px #cdcdcd;
    border-radius: 10px;
    border: 1px solid ${theme.COLORS.GRAY};
    margin-top: 5%; 
`;

export const login_id= styled.div`
    border: none;
    display: flex;
    align-items: center;
`;
export const login_id_img = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 3%;
    margin-right: 3%;
`;
export const login_input_box = styled.input`
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 400;
    padding: 3%;
`;

export const login_pwd= styled.div`
    border-top: 1px solid ${theme.COLORS.GRAY};
`;
export const login_pwd_img = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 3%;
    margin-right: 3%;
`;


// export const login_btn_box = styled.div`
// `;

export const login_btn = styled.button`
    background-color: ${theme.COLORS.MAIN_ORANGE};
    color: ${theme.COLORS.CONTAINER_WHITE};
    font-size: 16px;
    border: none;
    border-radius: 6px;
    width: 80%;
    font-weight: 700;
    margin-top : 8%;
    margin-bottom: 5%;
    padding: 2.5%;
    cursor: pointer;

`;

