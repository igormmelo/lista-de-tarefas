"use client";

import { Task } from "../page";

type TaskItemProps = {
  task: Task;
  onCompleteTask: () => void;
  onDeleteTask: () => void;
};

export const TaskItem = ({ task, onCompleteTask, onDeleteTask }: TaskItemProps) => {
  return (
    <li
      className={`items-center flex justify-between px-[20px] border-solid border-[1px] border-[#353535] text-[18px] ${
        task.isCompleted ? "bg-green-500" : " bg-[#f6f6c8]"
      }`}
    >
      {task.name}
      
      <div className="flex items-center">
        <button onClick={onCompleteTask}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3285/3285799.png "
            className="w-[28px] h-[28px] object-contain mr-[5px]"
            alt="icone de concluir"
          />
        </button>

        <button onClick={onDeleteTask}>
          <img
            className="w-[25px] h-[23px] object-contain"
            src="https://cdn-icons-png.flaticon.com/128/7699/7699001.png"
            alt="icone de excluir"
          />
        </button>
      </div>
    </li>
  );
};
