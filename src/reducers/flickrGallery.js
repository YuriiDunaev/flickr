import {
	ADD_ITEMS,
	SET_FILTERED
} from '../constants/FlickrGalleryConst'

const initialState = {
	filter          : 'm',
	items           : [],
	userKey         : '7e201742595b8f6d9372a63a4e2edaa0',
	format          : 'json',
	itemsLength     : 20,
	tags            : 'nature'
};

export default function FlickrGallery(state = initialState, action) {
	switch (action.type) {
		case SET_FILTERED:
			return {...state, filter: action.filter};
		case ADD_ITEMS:
			return {...state, items: action.items};
		default:
			return state;
	}
}