import Navbar from './components/Navbar.js';
import Base from './components/Base.js';
import Record from './components/Record.js';

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	const getData = () => {
		let data = localStorage.getItem('Count');
		if (data == null) {
			data = [];
		}
		else {
			data = JSON.parse(data);
		}
		return data;
	}
	return(
		<>
			<Router>
				<Navbar/>
				<Routes>
					<Route exact path='/' element={<Base getData={getData} />} />
					<Route exact path='/record' element={<Record getData={getData} />} />
				</Routes>
			</Router>
		</>
);
}

export default App;