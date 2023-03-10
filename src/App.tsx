import React, {Component} from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview.tsx";



//State type definitions
type task = {text: string, id: uniqid}

type AppState = {
    task: task
    tasks: task[]
}

//Still need to set prop types once known
class App extends Component<any, AppState> {
    constructor(props) {
        super(props);
        
        this.state = {
            task: { 
                text: '',
                id: uniqid(),
            },
            tasks: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            task : {
                text: e.target.value,
                id: this.state.task.id,
            }
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: { text: '', id: uniqid()},
        })
    }

    handleDelete = (id) => {
        const index: number = this.state.tasks.findIndex(x => x.id == id);
        if (index > -1) {
            this.setState({
                tasks: this.state.tasks.slice(0, index).concat(this.state.tasks.slice(index+1))
            })
        }
    }

    render() {
        const { task, tasks } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="taskInput">Enter task</label>
                    <input
                        onChange={this.handleChange}
                        value={task.text}
                        type="text" 
                        id="taskInput" />
                    <button type="submit">
                        Add Task
                    </button>
                </form>
                <Overview tasks={tasks} onDelete={this.handleDelete} />
            </div>
        );
    }
}

export default App;