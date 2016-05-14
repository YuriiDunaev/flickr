import {
	SET_FILTERED
} from '../constants/FlickrGalleryConst'

export function setFiltered(str) {
	return (dispatch) => {
		dispatch({
			type: SET_FILTERED,
			filter: str
		});
	}
}