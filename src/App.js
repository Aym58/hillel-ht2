import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Popular from './popular';
import Battle from './battle';
import Nav from './nav';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='popular' element={<Popular />} />
					<Route path='battle' element={<Battle />} />
					<Route path='*' element={<p>Element not found</p>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
