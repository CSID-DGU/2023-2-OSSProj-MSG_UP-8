import React, { useState, useEffect } from "react";
import axios from "axios";
import todoPlusIcon from "../../assets/image/todo_plus.png";
import todoTrashIcon from "../../assets/image/todo_trash.svg";
import * as s from "./styles.js";

export default function Todo({ date, user_id }) {


  //권한 설정
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  });
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [deleteBool, setDeleteBool] = useState(false);
    const [post, setPost] = useState(false);

    useEffect(() => {
        const get_Todos = async () => {
            try {
                const response = await axiosInstance.get('http://127.0.0.1:8000/todo/todoitems/list/');
                setTodos(response.data);
                console.log(response.data);
            } catch (err) {
                console.error('Error fetching todos:', err);
            }
        };

        get_Todos();
    }, [deleteBool, post]);

  
    const today = new Date();
    const dateString = today.toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
    const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });


    const post_Todo = async () => {
        try {
            await axiosInstance.post('http://127.0.0.1:8000/todo/todoitems/', {
                todo_title: input,
                due_date: date,
            });
            setPost(!post);
            setInput('');
        } catch (err) {
            console.error('Error adding todo:', err);
        }
    };

    // 체크시 todo
    const put_Todo = async (todo) => {
      
        try {
            await axiosInstance.put(`http://127.0.0.1:8000/todo/todoitems/detail/${todo.id}/`, {
                todo_title: todo.todo_title,
                completed: !todo.completed,
                due_date: date,
            });
            setTodos((prevTodos) => prevTodos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
            console.log(todos);
        } catch (err) {
            console.error('Error updating todo:', err);
        }
    };

    // 삭제 todo
    const delete_Todo = async (todoId) => {
        try {
            await axiosInstance.delete(`http://127.0.0.1:8000/todo/todoitems/detail/${todoId}/`);
            setTodos((prevTodos) => prevTodos.filter(t => t.id !== todoId));
            setDeleteBool(!deleteBool);
        } catch (err) {
            console.error('Error deleting todo:', err);
        }
    };

    return (
        <>
            <s.TodoContainer>
                <s.TodoTitle>
                    In Dongguk To do list
                    <s.Today>
                        <s.TodayDate>{dateString}</s.TodayDate>
                        <s.TodayDay>{dayName}</s.TodayDay>
                    </s.Today>
                </s.TodoTitle>

                <s.TodoInputBox>
                    <s.TodoInput
                        placeholder="오늘의 할 일을 적어보세요!"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <img
                        src={todoPlusIcon}
                        onClick={post_Todo}
                        alt="Add Todo"
                    />
                </s.TodoInputBox>
                <s.TodoList>
                  {todos
                    //   .filter(todo => todo.due_date === date && todo.owner === sessionStorage.getItem('user_id'))
                      .map((todo,index) => (
                          <s.TodoListItem key={index} id={todo.id}>
                              <s.Box>
                                <s.CheckBox
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => put_Todo(todo)}
                                />
                                <s.Text>{todo.todo_title}</s.Text>
                              </s.Box>
                              <img
                                  src={todoTrashIcon}
                                  alt="Delete Todo"
                                  onClick={() => delete_Todo(todo.id)}
                              />
                          </s.TodoListItem>
                      ))}
                    </s.TodoList>
            </s.TodoContainer>
        </>
    );
}
