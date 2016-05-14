import React, { Component } from 'react'
import styles from './flickr_gallery_items.less'

export default class FlickrGalleryItem extends Component {

	render() {
		return (
			<div className={styles.item + ' size--' + this.props.filter}>
				<div className={styles.image}>
					<img src={this.props.src} alt={this.props.title} />
				</div>
				<div className={styles.info}>
					<div className={styles.title}>{this.props.title}</div>
					<a href={this.props.href} className={styles.link}>{this.props.href}</a>
				</div>
			</div>
		);
	}
}