import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FlickrGalleryActions from '../actions/FlickrGalleryActions';
import FlickrGalleryItems from '../components/FlickrGalleryItems/index';
import styles from './flickr_gallery.less'

class FlickrGallery extends Component {
	static propTypes = {
		filter          : PropTypes.string.isRequired,
		items           : PropTypes.array.isRequired,
		userKey         : PropTypes.string.isRequired,
		format          : PropTypes.string.isRequired,
		itemsLength     : PropTypes.number.isRequired,
		tags            : PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);
		
		this.state = {
			url : `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.userKey}&tags=${this.props.tags}&tagmode=any&per_page=${this.props.itemsLength}&format=${this.props.format}&nojsoncallback=1`
		};
	};

	componentDidMount() {
		$.get(this.state.url, function (result) {
			this.props.FlickrGalleryActions.addItems(result.photos.photo);
		}.bind(this));
	};

	render() {
		console.log('render FlickrGallery');
		return (
			<div className={styles.flickr_gallery}>
				{this.props.items.length ? <FlickrGalleryItems {...this.props} /> : <div className={styles.loading}>Загрузка...</div>}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		filter          : state.FlickrGallery.filter,
		items           : state.FlickrGallery.items,
		userKey         : state.FlickrGallery.userKey,
		format          : state.FlickrGallery.format,
		itemsLength     : state.FlickrGallery.itemsLength,
		tags            : state.FlickrGallery.tags
	}
}

function mapDispatchToProps(dispatch) {
	return {
		FlickrGalleryActions: bindActionCreators(FlickrGalleryActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FlickrGallery);