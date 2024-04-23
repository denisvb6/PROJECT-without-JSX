import logo from './logo.svg';
import './App.css';

import { createElement } from 'react';

export const App = () => {
	//Императивный стиль
	let today = new Date();
	let year = today.getFullYear();

	//декларативный стиль (без JSX)
	return createElement('div', {
		className: 'App',
		children: createElement('header', {
			className: 'App-header',
			children: [
				createElement('img', {
					src: logo,
					className: 'App-logo',
					alt: 'logo',
				}),
				createElement('p', {
					children: [
						'Edit ',
						createElement('code', {
							children: 'src/App.js',
						}),
						' and save to reload.',
					],
				}),
				createElement('a', {
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
					children: 'Learn React',
				}),
				createElement('div', {
					children: year,
				}),
			],
		}),
	});
};
