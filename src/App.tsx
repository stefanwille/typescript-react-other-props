import React, { FC } from 'react';
import './App.css';

interface Person {
	firstName: string;
	lastName: string;
	[otherProps: string]: any;
}

const App: FC = () => {
	const originalObject = {
		firstName: 'Stefan',
		lastName: 'Wille',
		email: 'oisdjf@oisjdf.de',
		phone: '0893929288',
	};

	const { firstName, lastName, ...otherProps }: Person = originalObject;

	return (
		<div className="App">
			<header className="App-header">
				<h2>Original Object:</h2>
				<pre>{JSON.stringify(originalObject, null, 2)}</pre>
				<h2>Destructured via Person interface:</h2>
				firstName:
				<pre>{JSON.stringify(firstName, null, 2)}</pre>
				lastName:
				<pre>{JSON.stringify(lastName, null, 2)}</pre>
				otherProps:
				<pre>{JSON.stringify(otherProps, null, 2)}</pre>
			</header>
		</div>
	);
};

export default App;
