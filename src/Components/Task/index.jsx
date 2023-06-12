import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { getDatabase, ref, set, update, remove } from "firebase/database";
import { firebaseConfig } from "../../Firebase/db_connection_form";
import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";

export const Task = ({ taskKey, dbTaskStatus, title }) => {
    const { id } = useParams();
    const [taskStatus, setTaskStatus] = useState(dbTaskStatus);

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const dbRef = ref(getDatabase());


    const handleStatusChange = () => {
        setTaskStatus(!taskStatus);

        update(ref(database, "users/" + id + "/tasks_list/" + taskKey), {
            task_status: !taskStatus,
        });
    }

    const deleteTask = () => {
        remove(ref(database, "users/" + id + "/tasks_list/" + taskKey));
    }

    const editTask = () => {
        var editTaskId = document.getElementById("add-task-id");
        var taskEditName = document.getElementById("newTask");
        var addTaskButton = document.getElementById("add-task-button");

        addTaskButton.textContent = "Edit Task";
        editTaskId.textContent = taskKey;
        taskEditName.value = title;
    }



    return (
        <div id={`${taskKey}`} className="task">
            <div className="left-task-content">
                <div className="check-div">
                    <label className="check-label">
                        <input checked={taskStatus} onChange={handleStatusChange} id={`taskStatus${dbTaskStatus}`} type="checkbox" />
                        <div className="checkmark"></div>
                    </label>
                </div>
                <div className="task-name">
                    <span>{title}</span>
                </div>
            </div>
            <div className="task-icons">
                <div className="task-edit">
                    <a onClick={editTask}>
                        <svg className="edit-svg" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M786.667-645.001 644.668-786.334 691.334-833q19-19 47.167-18.667 28.166.334 47.166 19.334L833-785q19 18.999 19.333 46.499.334 27.5-18.666 46.5l-47 47ZM153.333-120Q139-120 129.5-129.5q-9.5-9.5-9.5-23.833v-95q0-6.666 2.333-12.499 2.334-5.834 7.667-11.167l467.335-467.335 141.999 141.999L271.999-130q-5.333 5.333-11.167 7.667Q254.999-120 248.333-120h-95Z" />
                        </svg>
                    </a>
                </div>
                <div className="task-delete">
                    <a onClick={deleteTask}>
                        <svg className="delete-svg" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M267.333-120q-27 0-46.833-19.833t-19.833-46.833v-553.335h-7.334q-14.166 0-23.75-9.617Q160-759.234 160-773.451q0-14.216 9.583-23.716 9.584-9.5 23.75-9.5H352q0-14.333 9.583-23.833 9.583-9.5 23.75-9.5h189.334q14.167 0 23.75 9.583 9.583 9.584 9.583 23.75h158.667q14.166 0 23.75 9.617Q800-787.433 800-773.217q0 14.217-9.583 23.716-9.584 9.5-23.75 9.5h-7.334v553.335q0 27-19.833 46.833T692.667-120H267.333Zm97.334-184q0 14.167 9.617 23.75 9.617 9.584 23.833 9.584 14.216 0 23.716-9.584 9.5-9.583 9.5-23.75v-319.334q0-14.167-9.617-23.75t-23.833-9.583q-14.216 0-23.716 9.583-9.5 9.583-9.5 23.75V-304Zm164 0q0 14.167 9.617 23.75 9.617 9.584 23.833 9.584 14.216 0 23.716-9.584 9.5-9.583 9.5-23.75v-319.334q0-14.167-9.617-23.75t-23.833-9.583q-14.216 0-23.716 9.583-9.5 9.583-9.5 23.75V-304Z" /></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}