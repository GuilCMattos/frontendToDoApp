import React, {Component} from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeDescription, search } from '../store/actions/form'

class todoForm extends Component { 
    constructor(props) { 
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
       
    }

    componentWillUnmount() { 
        this.props.search()
    }

    keyHandler(e) { 

        if(e.key === 'Enter') { 
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') { 
            this.props.handleClear()
        }
    }

    render() { 
        return (
        <div role='form' className="todoForm">
        <Grid cols='12 9 10'>
            <input className="form-control" type="text" id="description" placeholder="Adicione uma tarefa"
            value={this.props.description}
            onKeyUp={keyHandler}
            onChange={this.props.changeDescription}
            />
            

        </Grid>
           
        <Grid cols='12 3 2'>

        <IconButton style='primary' icon='plus' onClick={this.props.handleAdd} />
        <IconButton style="info" icon="search" onClick={this.props.handleSearch}  />

        <IconButton style="default" icon="close" onClick={this.props.handleClear} />
        
        </Grid>

    </div>
) }
}

const TodoForm = props => {


    return ( 

        <div role='form' className="todoForm">
        <Grid cols='12 9 10'>
            <input className="form-control" type="text" id="description" placeholder="Adicione uma tarefa"
            value={props.description}
            onKeyUp={this.keyHandler}
            onChange={props.changeDescription}
            />
            

        </Grid>
           
        <Grid cols='12 3 2'>

        <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
        <IconButton style="info" icon="search" onClick={props.handleSearch}  />

        <IconButton style="default" icon="close" onClick={props.handleClear} />
        
        </Grid>

    </div>
    )
}

const mapStateToProps = state => ({
    description: state.todo.description

})

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)