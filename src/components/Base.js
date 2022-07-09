import React, { useState } from 'react';

function Base(props) {
	const [count, setCount] = useState(0);
	
	const toSave = () => {
		let data = props.getData();
		data.push(count);
		data = JSON.stringify(data);
		localStorage.setItem('Count', data);
		setCount(0);
	}
	return (
		<div className="container text-white display-5 mt-5 p-3">
			<span className="display-3">Total Counts : {count}</span><br />
				<div className="btn-group row mt-5 offset-3" role="group" aria-label="Basic mixed styles example">
					<button type="button" className="btn btn-success col-2" onClick={()=>setCount(count + 1)}>Increment</button>
					<button type="button" className="btn btn-warning col-2" onClick={()=>toSave()}>Save me!</button>
					<button type="button" className="btn btn-danger col-2" onClick={()=>setCount(count - 1)}>Decrement</button>
			</div>
		</div>
	);
}

export default Base;