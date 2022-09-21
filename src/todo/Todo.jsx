import React from 'react'


import PageHeader from '../template/PageHeader'
import TodoList from './TodoList'

import TodoForm from './TodoForm'

export default props => (
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm />
            <TodoList />
        </div>
)


