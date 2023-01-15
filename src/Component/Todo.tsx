import * as React from 'react';
import {TodoInterface} from "../TODO";

export function Todo({title, task, status}: TodoInterface) {
    return (
        <>
            <div className="p-6 border border-gray-400 justify-center">
                <h1 className="mb-2 text-2xl font-bold text-gray-900">{title}</h1>
                <p className="mb-3 text-gray-700">{task}</p>
                <span className="border p-1 hover:bg-gray-200">{status}</span>
            </div>
        </>
    );
};