import React from "react";
import './style/todolist.css';
import Head from "./head";
import TodoEditor from "./todoEditor";

const Todolist = () => {

    return (
        <div className="container">
            <Head />
            <TodoEditor />
            <div className="TodoList">
                <h4>Todo List ⚡️</h4>
                <input className="searchbar" placeholder="검색어를 입력하세요" />
            </div>
        </div>
    );
};

export default Todolist;