"use client";

import { useState } from "react";
import { TaskItem } from "./components/task-item";

export type Task = {
  name: string;
  isCompleted: boolean;
}

const Page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddNewTask = () => {
    if (inputValue === "") return;

    setTasks([...tasks, { name: inputValue, isCompleted: false }]);
    setInputValue("");
  };

  const handleCompleteTask = (taskIndex: number) => {
    const updatedTasks = tasks.map((task, index) => {
      return index === taskIndex ? { ...task, isCompleted: true } : task;
    });

    setTasks(updatedTasks);
  }

  const handleDeleteTask = (taskIndex: number) => {
    const updatedTasks = tasks.filter((task, index) => {
      return index !== taskIndex;
    });

    setTasks(updatedTasks);
  }
  
  return (
    <div className=" max-w-[900px] w-full h-screen m-auto">
      <p className="text-[35px] text-center text-white bg-black rounded-t-[6px]">
        Lista de Tarefas
      </p>
      <div className="max-w-[900px] w-full text-center bg-black">
        <input
          type="text"
          placeholder="Digite a tarefa a ser adicionada"
          className="border-solid border-[2px] rounded p-3 m-2"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="text-white" onClick={handleAddNewTask}>
          Adicionar
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem 
            key={task.name} 
            task={task} 
            onCompleteTask={() => handleCompleteTask(index)}
            onDeleteTask={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Page;
