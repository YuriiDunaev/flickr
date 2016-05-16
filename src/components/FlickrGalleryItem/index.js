import React, { Component } from 'react'
import styles from './flickr_gallery_items.less'

export default class FlickrGalleryItem extends Component {
	onClick(e) {
		e.preventDefault();

		let url = `https://api.flickr.com/services/rest/?
					method=flickr.photos.getSizes&
					api_key=${this.props.userKey}&
					photo_id=${this.props.photo.id}&
					format=${this.props.format}&
					nojsoncallback=1`
			;

		$.get(url, function (result) {
			if ( result.sizes.size.length ) {
				let photo = result.sizes.size[result.sizes.size.length - 1].source;

				this.refs.popup_im.src = photo;
			} else {
				this.refs.popup_im.src = this.props.src;
			}
		}.bind(this));

		this.refs.popup.className = styles.popup_show;
	}

	onCloseClick(e) {
		e.preventDefault();
		this.refs.popup.className = styles.popup_hide;
	}

	setInfo() {
		let info = [];
		if (this.props.filter === 'm') {
			info.push(
				<div className={styles.info}>
					<div className={styles.title}>{this.props.title}</div>
					<a href={this.props.href} className={styles.link}>{this.props.href}</a>
				</div>
			);
		}
		return info;
	}

	render() {

		return (
			<div className={styles.item + ' size--' + this.props.filter}>
				<div className={styles.image}>
					<a className={styles.image_link} href={this.props.photo.id} onClick={::this.onClick}>
						<img src={this.props.src} alt={this.props.title} />
					</a>
					<div ref="popup" className={styles.popup_hide}>
						<div className={styles.popup_in}>
							<a href="#close" onClick={::this.onCloseClick} className={styles.popup_close}>&times;</a>
							<img ref="popup_im" src='' alt=""/>
						</div>
					</div>
				</div>
				{this.setInfo()}
			</div>
		);
	}
}