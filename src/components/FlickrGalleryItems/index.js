import React, { Component } from 'react'
import FlickrGalleryItem from './../FlickrGalleryItem/index'
import Filter from './../Filter/index';
import styles from './flickr_gallery_items.less'

export default class FlickrGalleryItems extends Component {
	setFormat(e) {
		e.preventDefault();

		console.log(this.props, e.currentTarget.getAttribute('href'));
	}

	addItems(obj) {
		let photo;
		let filter;
		let photo_src;
		let page_url;
		let items = [];

		for (let i=0; i < obj.length; i++) {
			photo = obj[i];
			filter = this.props.filter.length === 0 ? '' : `_${this.props.filter}`;
			photo_src = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}${filter}.jpg`;
			page_url = `http://www.flickr.com/photos/${photo.owner}/${photo.id}`;

			items.push(
				<FlickrGalleryItem
					{...this.props}
					key={i}
					href={page_url}
					title={photo.title}
					src={photo_src}
					photo={photo}
				/>
			);
		}

		return items;
	}

	render() {
		console.log('render FlickrGalleryItems');
		let items = this.addItems(this.props.items);
		
		return (
			<div className={styles.items}>
				<Filter {...this.props} />
				{items}
			</div>
		);
	}
}