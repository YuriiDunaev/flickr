import {
	ADD_ITEMS,
	SET_FILTERED
} from '../constants/FlickrGalleryConst'

const initialState = {
	filter          : 't',
	items           : [],
	userKey         : 'c353b9b7a0695b77bad289fa3b21007d',
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