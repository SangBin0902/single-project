import React, { useMemo, useCallback, useReducer, useRef } from "react";
import './style/todolist2.css';
import Head from "./head";
import TodoEditor from "./todoEditor";
import TodoList2 from "./todolist2";
import { useState } from "react";
import TestComp from "./testComp";

function reducer(state, action) {
    switch (action.type) {
        case "CREATE": {
            return [action.newItem, ...state];
        }
        case "UPDATE": {
            return state.map((it) =>
            it.id === action.targetId
                ? {
                    ...it,
                    isDone: !it.isDone,
                }
                : it
            );
        }
        case "DELETE": {
            return state.filter((it) => it.id != action.targetId);
        }
        default:
            return state;
    }
}

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

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const Todolist = () => {
    const [todo, dispatch] = useReducer(reducer, mockTodo);
    const idRef = useRef(3);

    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            newItem: {
                id: idRef.current,
                content,
                isDone: false,
                createdDate: new Date().getTime(),
            },
        });
        idRef.current += 1;
    };

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId,
        });
    },[]);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    },[]);

    const memoizedDispatches = useMemo(() => {
        return { onCreate, onUpdate, onDelete };
    }, []);

    return (
        <div className="container">
            <Head />
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                <TodoEditor />
                <TodoList2 />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
};

export default Todolist;