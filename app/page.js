"use client"
import TodoCard from '@/components/TodoCard'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [task, setTask] = useState('')
	const [assign, setAssign] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task.trim() !== '') {
			setAssign(prevAssign => [...prevAssign, task]); // Add the new task to the list
			setTask(''); // Clear the task input
		}
	}

	const handleMarkAsDone = (taskToRemove) => {
		setAssign(prevAssign => prevAssign.filter(t => t !== taskToRemove));
	};

	return (
		<div className="min-h-screen w-screen bg-gradient-to-r from-emerald-500 to-emerald-900">
			<form onSubmit={handleSubmit} className='w-screen h-24  flex justify-center items-center'>
				<input
					type="text"
					name="task"
					id="task"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					placeholder='Enter Your Task Here'
					className='w-[70%] h-10 md:h-14 rounded-l-2xl pl-4 outline-none'
				/>
				<button type="submit" className='rounded-r-2xl bg-gradient-to-r from-teal-400 to-yellow-200 text-slate-900 h-10 md:h-14 w-24 text-center font-semibold'>Add Task</button>
			</form>

			<div className="w-[79%] md:w-[85%] m-auto flex flex-wrap justify-start pb-5">
				{assign.map((assignedTask, index) => (
					<TodoCard key={index} task={assignedTask} onMarkAsDone={handleMarkAsDone} />
				))}
			</div>
		</div>
	)
}
