import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var Ajax = require('react-ajax');
import * as FlickrGalleryActions from '../actions/FlickrGalleryActions';

class FlickrGallery extends Component {
	static propTypes = {
		filter      : PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			key             : '7e201742595b8f6d9372a63a4e2edaa0',
			format          : 'json',
			itemsLength     : 20,
			tags            : 'virtual reality'
		};
	};

	componentDidMount() {
		$.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&tags=${this.state.tags}&tagmode=any&per_page=${this.state.itemsLength}&format=${this.state.format}&nojsoncallback=1`, function (result) {
			let photo;
			let photo_url;
			let page_url;

			for (let i=0; i < result.photos.photo.length; i++) {
				photo = result.photos.photo[i];

				photo_url = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}_${this.props.filter}.jpg`;
				page_url = `http://www.flickr.com/photos/${photo.owner}/${photo.id}`;

				console.log(photo, photo.title, photo_url, page_url);
			}
		}.bind(this));
	};

	responseAjax(data) {
		console.log(data);
	}

	render() {

		console.log(this.props);

		return (
			<div className='gallery'>
				1111

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		filter      : state.FlickrGallery.filter
	}
}

function mapDispatchToProps(dispatch) {
	return {
		FormActions: bindActionCreators(FlickrGalleryActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FlickrGallery);