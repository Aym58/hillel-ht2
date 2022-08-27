import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Popular from './components/popular';
import Battle from './components/battle';
import Nav from './components/nav';

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
