import React, { useState } from "react";
import * as s from "./styles";
import checkItemHandler from "../../pages/Lecturepage";

export default function LectureChoice(props) {
    
    // const [checked, setChecked] = useState(false);

    // const checkHandled = ({target}) => {
    //     setChecked(!checked);
    //     checkItemHandler(target.id, target.checked);
    // }

    return (
        <>
            <s.LectureContainer key={props.id}>
                    <s.CheckBox
                        type="checkbox"
                        id={props.id}
                        name="lecture"
                        
                    />
                    <s.LectureTextLabel htmlFor={props.id}>
                        <s.LectureTitle>
                            {props.title}
                        </s.LectureTitle>
                    </s.LectureTextLabel>
            </s.LectureContainer>
        </>
    );
}

