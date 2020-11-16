import React, { useState } from 'react';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Clean Fishtank', completed: false },
		{ id: 2, task: 'Wash Car', completed: true },
		{ id: 3, task: 'Buy shampoo', completed: false },
	];
	const [todos, setTodos] = useState(initialTodos);
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify='center' style={{ marginTop: '1rem' }}>
				<TodoList todos={todos} />
				<Grid item xs={11} md={8} lg={4}></Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;

/*
- TodoApp
 - TodoForm
 - TodoList
  - TodoItem
*/

// id, task, completed
