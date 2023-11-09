import styled from "@emotion/styled";
import theme from "../../style/theme.js";


export const Wrapper = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    position: fixed;
    justify-content: space-between;
    background-color: #37383C;
`;


export const Icon = styled.div`
`;

export const LeftNav = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
`;

export const LBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${theme.COLORS.GRAY};
`;

export const Description = styled.div`
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY};
    font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;

export const RightNav = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    padding-right: 2%;
`;

export const RBox = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-left: 1px solid ${theme.COLORS.GRAY};
`;

export const NoteBox = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.LIGHT_BLUE};
    border-radius: 5px;
    font-size: ${theme.FONT_SIZE.MAIN_SIZE};
    color: ${theme.COLORS.CONTAINER_WHITE};
    border: 2px solid ${theme.COLORS.CONTAINER_WHITE};
`;

export const RNameBox = styled.div`
    border-left: 1px solid ${theme.COLORS.GRAY};
    width: 65%;
    height: 100%;
    border-left: 1px solid ${theme.COLORS.GRAY};
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    font-size: ${theme.FONT_SIZE.MAIN_SIZE};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY};
`;

export const NavBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 90%;
`;

export const UpdateShedule  = styled.button`
    height: 30px;
    padding: 5px;
    margin-right: 7px;
    color: ${theme.COLORS.CONTAINER_WHITE};
    background-color: ${theme.COLORS.BLUE};
    border: none;
    border-radius: 5px;
`;

export const LogoutBtn  = styled.button`
    padding: 5px;
    height: 30px;
    color: ${theme.COLORS.CONTAINER_WHITE};
    background-color: ${theme.COLORS.BLUE};
    border: none;
    border-radius: 5px;
`;