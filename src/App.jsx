import { useState } from 'react';
import './App.css';

import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<CakeContainer />
				{/* <HooksCakeContainer /> */}
				<IceCreamContainer />
			</div>
		</Provider>
	);
}

export default App;
