import React from "react";
import './style/todolist.css';
import Head from "./head";
import TodoEditor from "./todoEditor";
import TodoItem from "./todoItem";
import { useState, useRef } from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React Study",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "Roundary",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "Practice Singing",
        createdDate: new Date().getTime(),
    },
];

const Todolist = () => {
    const [todo, setTodo] = useState(mockTodo);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createdDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    };

    return (
        <div className="container">
            <Head />
            <TodoEditor onCreate={onCreate} />
            <div className="TodoList">
                <h4>Todo List ⚡️</h4>
                <input className="searchbar" placeholder="검색어를 입력하세요" />
                <div className="list_wrapper">
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>
        </div>
    );
};

export default Todolist;