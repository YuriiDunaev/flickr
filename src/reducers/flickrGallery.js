import {
	SET_FILTERED
} from '../constants/FlickrGalleryConst'

const initialState = {
	filter: 'm'
};

export default function Form(state = initialState, action) {
	switch (action.type) {
		case SET_FILTERED:
			return {...state, filter: action.filter};
		default:
			return state;
	}
}