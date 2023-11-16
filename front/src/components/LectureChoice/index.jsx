import React, { useState } from "react";
import * as s from "./styles";

export default function LectureChoice({ id, title, checkItemHandler }) {
    
    const [checked, setChecked] = useState(false);

    const checkHandled = ({target}) => {
        setChecked(!checked);
        checkItemHandler(id, target.checked);
    }

    return (
        <>
            <s.LectureContainer>
                    <s.CheckBox
                        type="checkbox"
                        id={id}
                        checked={checked}
                        name="lecture"
                        onChange={(e) => checkHandled(e)}
                        
                    />
                    <s.LectureTextLabel htmlFor={id}>
                        <s.LectureTitle>
                            {title}
                        </s.LectureTitle>
                    </s.LectureTextLabel>
            </s.LectureContainer>
        </>
    );
}

