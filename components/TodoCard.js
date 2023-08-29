import React from 'react';

const TodoCard = ({ task, onMarkAsDone }) => {
    const handleMarkAsDone = () => {
        onMarkAsDone(task);
    };

    return (
        <div className="w-[280px] mx-5 mt-5">
            <div className="bg-gradient-to-tr from-emerald-600 to-emerald-800 rounded-lg overflow-hidden shadow-md">
                <div className="p-4">
                    <h1 className="text-lg font-semibold text-gray-800 text-white">{task}</h1>
                </div>
                <div className="px-4 pb-4">
                    <button
                        onClick={handleMarkAsDone}
                        className="block w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-b-lg transition duration-300"
                    >
                        Mark as Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;

