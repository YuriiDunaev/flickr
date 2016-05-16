import React, { Component } from 'react'
import styles from './filter.less'

export default class Filter extends Component {

	componentWillUpdate(nextProps) {
		return nextProps.filter !== this.props.filter;
	}

	setFormat(e) {
		e.preventDefault();
		let el = e.currentTarget;

		this.props.FlickrGalleryActions.setFiltered(el.getAttribute('href'));
	}

	addItems(obj) {
		let items = [];
		let index = 0;

		for (var item in obj) {
			items.push(
				<a
					onClick={::this.setFormat}
					className={item === this.props.filter ? styles.link_active :styles.link_normal}
					key={index}
					href={item}
				>
					{obj[item]}
				</a>);
			index++;
		}

		return items;
	}

	render() {
		console.log('render Filter');

		let filters = {
			"s" : "small square 75x75",
			"q": "large square 150x150",
			"t": "thumbnail, 100 on longest side",
			"m": "small, 240 on longest side",
			"n": "small, 320 on longest side",
			"" : "medium, 500 on longest side",
			"z": "medium 640, 640 on longest side",
			"c": "medium 800, 800 on longest side",
			"b": "large, 1024 on longest side",
			"h": "large 1600, 1600 on longest side",
			"k": "large 2048, 2048 on longest side",
			"o": "original image, either a jpg, gif or png, depending on source format"
		};

		return (
			<div className={styles.filter}>
				{this.addItems(filters)}
			</div>
		);
	}
}