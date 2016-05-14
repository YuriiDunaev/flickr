import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import FlickrGallery from './FlickrGallery';

export default class App extends Component {
	render() {

		return (
			<div className='app'>
				<FlickrGallery />
			</div>
		)
	}
}