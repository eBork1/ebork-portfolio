import React from 'react';
import HomeBtn from '../HomeBtn';

function Form(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text" placeholder="I have to..." value={props.value} onChange={props.onChange}></input> <br />
                <div className="col-sm-12 col-md-12 col-lg-8 mx-auto">

                    <button className="btn-block mt-3" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

function TodoItem(props) {
    return (
        <div>
            <div className="text-dark text-left">{props.todo}</div>
            <div className="text-right">
                <button className="btn btn-danger" onClick={props.onClick}>remove</button>
            </div>
        </div>

    )
}

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            oldestFirst: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit() {
        if (!localStorage.getItem('todos')) {
            var todos = [];
            todos.push(this.state.value);
            localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            var todosArray = JSON.parse(localStorage.getItem('todos'));
            todosArray.push(this.state.value);
            localStorage.setItem('todos', JSON.stringify(todosArray));
        }
    }

    deleteItem(itemToDelete, source) {
        var indexOfItem = source.indexOf(itemToDelete);
        source.splice(indexOfItem, 1);
        var newArray = source;
        localStorage.setItem("todos", JSON.stringify(newArray));
        window.location.reload(false);
    }

    reset() {
        localStorage.removeItem("todos");
        window.location.reload(false);
    }

    toggleOrder() {
        if (this.state.oldestFirst === true) {
            localStorage.setItem("oldestFirst", "false");
            this.setState({ oldestFirst: false });

        } else {
            this.setState({ oldestFirst: true });
            localStorage.setItem("oldestFirst", "true");
        }
    }

    componentDidMount() {
        if (localStorage.getItem("oldestFirst") === "true") {
            this.setState({ oldestFirst: true });
        } if (localStorage.getItem("oldestFirst") === "false") {
            this.setState({ oldestFirst: false })
        } else {
            this.setState({ oldestFirst: true })
        }
    }

    render() {
        var oldestFirst = this.state.oldestFirst;
        if (localStorage.getItem("todos")) {
            if (oldestFirst === true) {
                var arr = JSON.parse(localStorage.getItem("todos"));
            } else {
                var arrayToReverse = JSON.parse(localStorage.getItem("todos"));
                var arr = arrayToReverse.reverse();
            }
        }else{ 
        }
        return (
            <div className="container">
                <HomeBtn />
                <div className="row mt-3">
                    <div className="col-12">
                        <Form
                            onSubmit={this.handleSubmit}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <button className="btn btn-info mb-2" onClick={() => this.toggleOrder()}>{this.state.oldestFirst === true ? "view ascending order" : "view descending order"}</button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-12 col-md-12 col-lg-8 mx-auto">
                        <table className="table bg-light text-dark border">
                            <tbody>
                                {localStorage.getItem("todos") ?
                                    arr.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td key={i}>
                                                    <TodoItem
                                                        todo={item}
                                                        onClick={() => this.deleteItem(item, arr)
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row mt-2 mb-3">
                    <div className="col-sm-12 col-md-12 col-lg-8 mx-auto">
                        <button className="btn btn-danger" onClick={() => this.reset()}>Reset List</button>
                    </div>
                </div>
            </div>

        )
    }
}
