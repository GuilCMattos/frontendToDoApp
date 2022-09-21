import React, {Component} from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { add, changeDescription, search } from '../store/actions/form'

class TodoForm extends Component { 
    constructor(props) { 
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
       
    }

    componentWillUnmount() { 
        this.props.search()
    }

    keyHandler(e) { 
        const {add, search, description} = this.props 

        if(e.key === 'Enter') { 
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') { 
            this.props.handleClear()
        }
    }

    render() { 
        const {add, search, description} = this.props 

        return (
        <div role='form' className="todoForm">
        <Grid cols='12 9 10'>
            <input className="form-control" type="text" id="description" placeholder="Adicione uma tarefa"
            value={this.props.description}
            onKeyUp={this.keyHandler}
            onChange={this.props.changeDescription}
            />
            

        </Grid>
           
        <Grid cols='12 3 2'>

        <IconButton style='primary' icon='plus' onClick={()=> add(description)} />
        <IconButton style="info" icon="search" onClick={() => search()}  />

        <IconButton style="default" icon="close" onClick={this.props.handleClear} />
        
        </Grid>

    </div>
) }
}



const mapStateToProps = state => ({
    description: state.todo.description

})

const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search  }, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)