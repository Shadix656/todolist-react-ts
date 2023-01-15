import * as React from 'react';
import {TODO} from "../assets/listeTodo";
import {Todo} from "./Todo";

type ListProps = {};

export function List({}: ListProps) {
    return (
        <>
            <div className="space-y-4 mx-auto p-2 max-w-1280 text-center">
                {TODO.map(todo => (
                    <Todo title={todo?.title} task={todo?.task} status={todo?.status}/>
                ))}
            </div>
        </>
    );
};