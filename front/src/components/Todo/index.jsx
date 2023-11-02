import React from "react";
import { useState, useEffect } from 'react';
import todo_plus from "../../assets/image/todo_plus.png";
import todo_trash from "../../assets/image/todo_trash.svg";
import * as s from "./styles.js";

export default function Todo(props) {

    // const [todos, setTodo] = useState([]);

    const today = new Date();

    const dateString = today.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

    // const [delete_bool, setDeleteBool] = useState(false);

    // const [data, setData] = useState({
    //     id:'',
    //     title: '',
    //     todo_date: '',
    // });

    // const get_todo = useEffect(() => {
    //     get_todo();
    // }, [delete_bool]);

    // const [post, setPost] = useState(false);
    // const post_todo = useEffect(() => {
    //     get_todo();
    // }, [post]);

    const [checked, setChecked] = useState(false);


    return(
        <>
            <s.TodoContainer>
                <s.TodoTitle>
                    In Dongguk To do list
                    <s.Today>
                        <s.TodayDate>
                        {dateString}
                        </s.TodayDate>

                        <s.TodayDay>
                        {dayName}
                        </s.TodayDay>

                    </s.Today>
                </s.TodoTitle>

                <s.TodoInputBox>
                    <s.TodoInput placeholder="오늘의 할 일을 적어보세요!" />
                    <img src={todo_plus} alt="" />
                </s.TodoInputBox>

                <s.TodoList>
                    {/* 예시 */}
                    <s.TodoListItem>
                        <s.box>
                            <s.CheckBox
                                type="checkbox"
                                onClick={!checked}
                            />
                            <s.text>
                            프로젝트 회의 : 아이디어 토의
                            </s.text>
                        </s.box>
                        <img src={todo_trash} alt="" />
                    </s.TodoListItem>

                    <s.TodoListItem>
                        <s.box>
                            <s.CheckBox
                                type="checkbox"
                                onClick={checked}
                            />
                            <s.text>
                            교양보고서 작성
                            </s.text>
                        </s.box>
                        <img src={todo_trash} alt="" />
                    </s.TodoListItem>

                    <s.TodoListItem>
                        <s.box>
                            <s.CheckBox
                                type="checkbox"
                                onClick={checked}
                            />
                            <s.text>
                            동아리 6시 정기모임
                            </s.text>
                        </s.box>
                        <img src={todo_trash} alt="" />
                    </s.TodoListItem>

                </s.TodoList>
            </s.TodoContainer>

        </>
    );
}