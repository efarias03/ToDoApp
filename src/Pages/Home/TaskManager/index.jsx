import "./styles.css"
import { Task } from "../../../Components/Task"
import { Link, useParams } from "react-router-dom"
import { getDatabase, ref, set, update, push, onValue, onChildAdded, get, child, remove } from "firebase/database";
import { firebaseConfig } from "../../../Firebase/db_connection_form";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

export const TaskManager = () => {
    const { id } = useParams();
    const [taskList, setTaskList] = useState([]);

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const dbRef = ref(getDatabase());

    var createTime = Date.now();
    const taskListRef = ref(database, "users/" + id + "/tasks_list/");
    const newTaskListRef = push(taskListRef);

    useEffect(() => {
        get(child(dbRef, `users/${id}/tasks_list/`)).then((snapshot) => {

            if (snapshot.exists()) {
                const objectArray = Object.entries(snapshot.val());
                setTaskList(objectArray);
            } else {
                return (setTaskList([]))
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [taskList])

    const deleteList = () => {
        setTaskList([]);
        remove(ref(database, "users/" + id + "/tasks_list/"));
    }


    function createTask() {
        var taskTitle = document.getElementById("newTask").value;
        var taskEditName = document.getElementById("newTask");

        set(newTaskListRef, {
            task_status: false,
            task_title: taskTitle
        })

        taskEditName.value = "";
    }

    function handleNewTaskButton() {
        var addTaskButton = document.getElementById("add-task-button");

        if (addTaskButton.textContent == "Edit Task") {
            var editTaskId = document.getElementById("add-task-id").textContent;
            var taskEditName = document.getElementById("newTask");
            var addTaskButton = document.getElementById("add-task-button");

            update(ref(database, "users/" + id + "/tasks_list/" + editTaskId), {
                task_title: taskEditName.value,
            });

            addTaskButton.textContent = "Add Task";
            editTaskId = editTaskId;
            taskEditName.value = "";
        }
        else {
            createTask();
        }
    }

    return (
        <div className="task-manager-container">
                    <div className="tasks-container">
            <div className="new-task-div">
                <button id="add-task-id">Nada aqui</button>
                <label id="new-task-label" htmlFor="newTask">Task:</label>
                <input type="text" name="newTask" id="newTask" />
                <button id="add-task-button" onClick={handleNewTaskButton} type="submit">Add Task</button>
            </div>
            <div className="tasks-list">
                <ul id="tasks-ul">
                    {taskList.map((task, key) => (
                        <li key={key}>
                            <Task taskKey={task[0]} dbTaskStatus={task[1].task_status} title={task[1].task_title} />
                        </li>
                    )) }
                </ul>
            </div>

            <div className="bottom-buttons">
                <a onClick={deleteList}>{taskList.length ? "Clear All" : " "}</a>
            </div>
        </div>
        </div>

    )
}