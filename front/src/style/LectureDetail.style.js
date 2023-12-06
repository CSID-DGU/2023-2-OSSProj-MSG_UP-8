import styled from "@emotion/styled";
import theme from "./theme.js";
import Lecturedetail from "../assets/image/lecturedetail.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 85px;
  background-color: ${theme.COLORS.BACKGROUND_WHITE};
`;
export const HeadContent = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Lecturedetail});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const TitleBox = styled.div`
  background-color: rgb(217, 217, 217, 0.7);
  border-radius: 10px;
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LectureTitle = styled.div`
  color: #000000;
  letter-spacing: 2px;
  text-shadow:
    white 2px 2px 0px,
    /* right down */ white -2px 2px 0px,
    /* left down */ white -2px -2px 0px,
    /* right up */ white 2px -2px 0px,
    /* left up */ /** next 4 shadows improve rendering */ white 2px 0px 0px,
    /* right */ white -2px 0px 0px,
    /* left */ white 0px 2px 0px,
    /* down */ white 0px -2px 0px,
    /* up */ /** lets add some blurred shadow to make it look a little nicer */ black 3px 3px 7px;
  font-size: 40px;
  line-height: 60px;
  font-weight: ${theme.FONT_WEIGHT.BOLDER};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ConArea = styled.div`
  background-color: #ececec;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3%;
`;

export const BodyContent = styled.div`
  width: 80%;
  height: 55%;
  margin-top: 2%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const TabMenu = styled.div`
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-top: 10px;
  width: 100%;

  .submenu {
    background-color: rgb(246, 246, 246, 0.54);
    color: ${theme.COLORS.DEEP_GRAY};
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(40% / 4);
    height: 50px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border: 0.5px solid ${theme.COLORS.GRAY};
  }

  .focused {
    color: rgb(21, 20, 20);
    background-color: ${theme.COLORS.CONTAINER_WHITE};
  }

  & div.TabContent {
    text-align: center;
  }
`;

export const TabContent = styled.div`
  width: 100%;
  border: 0.5px solid ${theme.COLORS.DEEP_GRAY};
  color: ${theme.COLORS.BLACK};
  height: 100%;
`;

export const LectureContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;
export const LectureCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid ${theme.COLORS.DEEP_GRAY};
`;

export const WeekBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15%;
  color: ${theme.COLORS.BACKGROUND_WHITE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  background-color: #134679;
`;

export const GreenBox = styled.div`
  padding-top: 3%;
  padding-left: 2%;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 21.25%;
  color: ${theme.COLORS.BLACK};
  background-color: #d5ebbb;
  border-bottom: 1px dotted ${theme.COLORS.DEEP_GRAY};
`;
export const Process = styled.div`
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  height: 21.25%;
  color: ${theme.COLORS.BLACK};
  background-color: #e6dcdb;
  border-bottom: 1px dotted ${theme.COLORS.DEEP_GRAY};
`;

export const Processtext = styled.div`
  padding-top: 3%;
  padding-left: 2%;
  color: #bd442b;
`;

export const ProcessBox = styled.div`
  display: flex;
  margin-top: 2%;
  align-items: center;
  justify-content: center;
`;
export const Processbar = styled.div`
  color: ${theme.COLORS.BACKGROUND_WHITE};
  padding-top: 1.5px;
  padding-bottom: 1.5px;
  background: linear-gradient(#48aef0, #11347a);
  text-align: center;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  width: 90%;
`;
