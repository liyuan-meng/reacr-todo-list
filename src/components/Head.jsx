import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Head extends Component{

    static propTypes = {
        lastTodoId: PropTypes.number.isRequired,
        onAddTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.myInput = React.createRef();
    }

    onInputChange(e) {
        if (e.keyCode !== 13) {
            return;
        }
        if (!this.myInput.current.value) {
            alert('不能为空！');
            return;
        }
        const { onAddTodo, lastTodoId } = this.props;
        const item = {id: lastTodoId + 1, title: this.myInput.current.value, checked: false};
        onAddTodo(item);

        this.myInput.current.value = null;
    }

    render() {
        const { myInput, onInputChange } = this;
        return (
           <div className="todo-list-head">
               <input placeholder="请输入计划，按回车键确认"
                      ref={myInput}
                      onKeyDown={e => onInputChange.bind(this)(e)}
               />
           </div>
        );
    }
}

export default Head;
