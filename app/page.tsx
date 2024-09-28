"use client"
import styles from './page.module.css';
import { useState } from "react";

function InputComponent(){


    const[tasksarr, setTasksarr] = useState<string[]>([]);
    const[newTask, setNewTask] = useState<string>("");

    const addTask=()=>{
        if (newTask) {                  
        setTasksarr([...tasksarr, newTask])
        setNewTask('')
        }
    }

    const removeTask=(index:number)=>{
      const updateTask=tasksarr.filter((_,i)=> i !==index);
      setTasksarr(updateTask)
    }


    return(
        <div className={styles.container}>
          
          <div className={styles.InpBtn}>
            <input type="text"
            id={styles.inp}
             value={newTask} 
             placeholder="Task..."
              onChange={(e)=>setNewTask(e.target.value)}/>

        <button onClick={addTask} id={styles.button}>Add Task</button>
        </div>
        <ul className={styles.taskList}>
          
         {tasksarr.map((CurrentTask,CurrentTaskindex)=>(
          
            <li key={CurrentTaskindex} className={styles.taskItem} >
              
                {CurrentTask}
                <button onClick={()=>removeTask(CurrentTaskindex)} id={styles.button}>Remove</button>

            </li>
         ))}

        </ul>

        </div>
    )
}
export default InputComponent