import React from "react";
import './style/todolist2.css';
import Head from "./head";
import TodoEditor from "./todoEditor";
import TodoList2 from "./todolist2";
import { useState, useRef } from "react";
import TestComp from "./testComp";

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

    const onUpdate = (targetId) => {
        setTodo(
            todo.map((it) => 
                it.id === targetId ? {...it, isDone: !it.isDone } : it
            )
        );
    };

    const onDelete = (targetId) => {
        setTodo(todo.filter((it) => it.id !== targetId));
    };

    return (
        <div className="container">
            <TestComp />
            <Head />
            <TodoEditor onCreate={onCreate} />
            <TodoList2 todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
};

export default Todolist;