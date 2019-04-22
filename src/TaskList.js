import React from 'react';
import Task from './Task';

class TaskList extends React.Component{

	render() {
		return (
			<div>
				<ul>
					<li>
						<Task text="task 1 description"/>
					</li>
					<li>
						<Task text="a second task description"/>
					</li>
				</ul>
			</div>
		);
	}

}

export default TaskList;