import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Foot extends Component{

    static propTypes = {
        finishedCount: PropTypes.number.isRequired,
        allCount: PropTypes.number.isRequired,
        isCheckedAll: PropTypes.bool.isRequired,
        checkedAll: PropTypes.func.isRequired
    };

    render() {
        const { finishedCount, allCount, checkedAll, isCheckedAll } = this.props;
        return (
            <div className="todo-list-foot">
                <input type="checkbox"
                       onClick={() => checkedAll(!isCheckedAll)}
                       checked={isCheckedAll}
                       onChange={() => {}}
                />
                <span>已完成{finishedCount}条</span>/
                <span>共{allCount}条</span>
            </div>
        );
    }
}

export default Foot;
