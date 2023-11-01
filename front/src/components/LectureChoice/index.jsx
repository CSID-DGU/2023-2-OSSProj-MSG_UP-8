import React, { useState } from "react";
import * as s from "./styles";
import checkItemHandler from "../../pages/Lecturepage";

export default function LectureChoice(props) {
    const [checked, setChecked] = useState(false);

    const checkHandled = ({target}) => {
        setChecked(!checked);
        checkItemHandler(target.id, target.checked);
    }

    return (
        <>
            <s.LectureContainer>
                    <s.CheckBox
                        type="checkbox"
                        checked={checked}
                        id={props.id}
                        name="lecture"
                        onChange={(e) => checkHandled(e)} 
                    />
                    <s.LectureTextLabel>
                        <s.LectureTitle>
                            {props.title}
                        </s.LectureTitle>
                    </s.LectureTextLabel>
            </s.LectureContainer>
        </>
    );
}

