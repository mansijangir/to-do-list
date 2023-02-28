import React from "react";
import { useState } from "react";

export default function Body() {

const [inputTask, setInputTask]= useState("");
const [addTask, setAddTask]= useState([])





const onFormsubmit=(e)=>                    //to prevent reloading
{
    e.preventDefault();
   
   if(inputTask==="")
   {
    document.querySelector(".error-msg").classList.add("show")
   }
   else
   {
    document.querySelector(".error-msg").classList.remove("show")
    setAddTask([...addTask, inputTask])
    setInputTask("");
  }
  

}
const handleOnChange = (event) => {
    setInputTask(event.target.value);
  };

const removeTask=(key) =>
 {
  const deleteTask = addTask.filter((d,index)=>index!== key)
  setAddTask(deleteTask)
  setInputTask("");
 }


  


  return (
    <>
    
    <div className="to-do-list-container">
        <label className="error-msg">Enter a task!</label>
      <form onSubmit={onFormsubmit}>
        <div className="input-container">
          <input
            className="input-task"
            placeholder="Add a task"
            value={inputTask}
            onChange={handleOnChange}
          />
          <button className="add-task">
            <i className="fas fa-solid fa-plus"></i>
          </button>
        </div>
      </form>  



   <div className="task-area-container">   
       
{addTask.map((task,index) => {
    return <ul className="task-area"> <li key={index} className="task-content">{task}
    </li>
    <div className="task-options">

<button className="icon"><i className="fa-solid fa-trash" onClick={()=>removeTask(index)}></i></button>
</div>
    </ul>
})}

</div>
      
    </div>
    </>
  );

  
}
