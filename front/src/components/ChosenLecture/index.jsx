import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../style/theme.js";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  padding: 4%;
  background-color: ${theme.COLORS.BACKGROUND_WHITE};
  border: 1px solid ${theme.COLORS.GRAY};
  box-shadow: -20px 16px 24px -23px rgba(66, 68, 90, 0.79);
`;

export const Title = styled.div`
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  color: ${theme.COLORS.BLACK};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const Btn = styled.button`
  background-color: ${theme.COLORS.BACKGROUND_WHITE};
  color: ${theme.COLORS.GRAY};
  border: none;
`;

export const Content = styled.div`
  position: absolute;
  width: 250px;
  top: 100%;
  background-color: ${theme.COLORS.BACKGROUND_WHITE};
  color: ${theme.COLORS.BLACK};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  padding: 3px;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  position: relative;
`;

function ChosenLecture({ title, content }) {
  const [isChecked, setCheck] = useState(false);
  console.log("내용", content);

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Btn
          onClick={() => {
            setCheck((e) => !e);
          }}
        >
          {isChecked ? "▲" : "▼"}
        </Btn>
      </Container>
      {isChecked && (
        <Content>
          {content.map((item, index) => (
            <React.Fragment key={index}>
              {item.userclass.map((uc, ucIndex) => (
                <div key={ucIndex} style={{ padding: 4 }}>
                  {uc.name}
                </div>
              ))}
            </React.Fragment>
          ))}
        </Content>
      )}
    </Wrapper>
  );
}
export default ChosenLecture;
