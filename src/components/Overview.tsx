import React, { Component } from "react";
import uniqid from "uniqid";

const Overview = (props) => {


    return (
        <ul>
            {props.tasks.map((task) => {
                return <li key={task.id}>{task.text}<button onClick={() => {props.onDelete(task.id)}}>Delete</button></li>
            })}
        </ul>
    );
};

export default Overview;