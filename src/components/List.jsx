import React, { Component } from 'react'
import PropTypes from 'prop-types';

class List extends Component{
    static propTypes = {
        todoList: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        updateTodoStatus: PropTypes.func.isRequired
    };

    render() {
        const { todoList, deleteTodo, updateTodoStatus } = this.props;
        return (
            <div className="todo-list-main">
                <ul>
                    {
                        todoList.map(item => (
                            <li key={item.id} onClick={() => updateTodoStatus(item.id, !item.checked)}>
                                <input type="checkbox"
                                       checked={item.checked}
                                       onChange={() => {}}
                                />
                                <span>{item.title}</span>
                                <button onClick={() => deleteTodo(item.id)}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default List;
