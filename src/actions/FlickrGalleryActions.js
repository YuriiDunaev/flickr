import {
	ADD_ITEMS,
	SET_FILTERED
} from '../constants/FlickrGalleryConst'

export function addItems(items) {
	return (dispatch) => {
		dispatch({
			type: ADD_ITEMS,
			items: items
		});
	}
}

export function setFiltered(str) {
	return (dispatch) => {
		dispatch({
			type: SET_FILTERED,
			filter: str
		});
	}
}