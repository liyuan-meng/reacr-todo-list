import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Foot from './components/Foot';
import List from './components/List';

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                { id: 1, title: '学些 Java', checked: false },
                { id: 2, title: '学些 Python', checked: false },
                { id: 3, title: '学些 Node', checked: false },
                { id: 4, title: '学些 Css', checked: false },
            ]
        };
    }

    /**
     * 删除计划
     * @param id
     */
    deleteTodo(id) {
        const { todoList } = this.state;
        const index = todoList.findIndex(todo => todo.id === id);
        todoList.splice(index, 1);

        // 更新 state
        this.setState({ todoList });
    }

    /**
     * 更新计划完成状态
     * @param id
     * @param checkedStatus
     */
    updateTodoStatus(id, checkedStatus) {
        const { todoList } = this.state;
        const index = todoList.findIndex(todo => todo.id === id);
        if (index > -1) {
            todoList[index].checked = checkedStatus;
        }

        // 更新 state
        this.setState({ todoList });
    }

    /**
     * 获取完成数
     * @returns {number}
     */
    getFinishedCount() {
        return this.state.todoList.filter(item => item.checked).length;
    }

    /**
     * 判断是否全选
     */
    isCheckedAll() {
        return this.state.todoList.every(item => item.checked);
    }

    /**
     * 选择/反选全部
     * @param isCheckedAll
     */
    checkedAll(isCheckedAll) {
        const { todoList } = this.state;
        this.setState({
            todoList: todoList.map(item => Object.assign(item, { checked: isCheckedAll }))
        })
    }

    /**
     * 添加计划
     * @param item
     */
    onAddTodo(item) {
        const { todoList } = this.state;
        todoList.push(item);

        this.setState({ todoList });
    }

    render() {
        const { state: { todoList }, deleteTodo, updateTodoStatus, getFinishedCount, isCheckedAll, checkedAll, onAddTodo } = this;
        return (
          <div className="todo-list">
              <Head lastTodoId={todoList.length ? todoList[todoList.length - 1].id : 0}
                    onAddTodo={onAddTodo.bind(this)}
              />
              <List todoList={todoList}
                    deleteTodo={deleteTodo.bind(this)}
                    updateTodoStatus={updateTodoStatus.bind(this)}
              />
              <Foot finishedCount={getFinishedCount.bind(this)()}
                    allCount={todoList.length || 0}
                    isCheckedAll={isCheckedAll.bind(this)()}
                    checkedAll={checkedAll.bind(this)}
              />
          </div>
        );
    }
}

export default TodoList;
