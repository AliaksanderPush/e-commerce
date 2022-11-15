import React from 'react';
import { SignIn } from './pages';
import styles from './App.module.scss';

const App = () => {
	return (
		<div className={styles.app}>
			<SignIn />
		</div>
	);
};

export default App;
