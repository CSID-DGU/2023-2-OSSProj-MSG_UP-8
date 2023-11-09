import React, {useState} from "react";
import Navbar from "../components/Navbar";

import * as s from '../style/LectureDetail.style.js';
import ChosenLecture from "../components/ChosenLecture";

function LectureDetailPage(props) {

    const [currentTab, clickTab] = useState(0);

    const menuArr = [
        {name: "학습 목차", body: "1"},
        {name: "학습 자료실", body: "2"},
        {name: "공지사항", body: "3"},
        {name: "과제", body: "4"},
    ];

    const selectMenu = (index) => {
        clickTab(index);
    };

    return(
        <>  
        <Navbar />
            <s.Wrapper>
               
                <s.HeadContent>
                    <s.TitleBox>
                        <s.LectureTitle>오픈소스 소프트웨어 프로젝트_01</s.LectureTitle>
                    </s.TitleBox>
                </s.HeadContent>

                <s.ConArea>
                    <s.ChosenArea>
                        <ChosenLecture
                            title="오픈소스 소프트웨어 프로젝트"
                            content="선택한 강의들 들어가야함" />
                    </s.ChosenArea>
                </s.ConArea>

                <s.BodyContent>
                    <s.TabMenu>
                        {menuArr.map((el,index) => (
                            <li className={index === currentTab ? "submenu focused" : "submenu" }
                            onClick={() => selectMenu(index)}>{el.name}</li>
                        ))}
                    </s.TabMenu>
                    <s.TabContent>
                        {menuArr[currentTab].body}
                    </s.TabContent>
                    
                </s.BodyContent>
            </s.Wrapper>
            
        </>
    );
}

export default LectureDetailPage;