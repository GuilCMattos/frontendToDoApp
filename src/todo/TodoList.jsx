import React from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import IconButton from "../template/IconButton";
import { markAsDone, markAsPeding, remove } from "../store/actions/form";

const toDoList = props => {

    const renderRows = () => { 
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>

                <td>
                    <IconButton
                    style="success"
                    icon="check" hide={todo.done}
                    onClick={() => props.markAsDone(todo)} 
                    />
                    <IconButton style="warning" hide={!todo.done} icon="undo" onClick={()=> props.markAsPeding(todo)} />
                    <IconButton hide={!todo.done} style='danger' icon='trash-o' onClick={() => props.remove(todo)} />
                </td>
                
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list

})

const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPeding, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(toDoList)