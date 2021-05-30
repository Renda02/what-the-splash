import { IMAGES  } from '../constants/index';

const imagesReducrs = ( state = [] , action ) => {
    if ( action === IMAGES.LOAD_SUCESS){
        return [ ...state, ...action.images];
    }

    return state;
}

export default imagesReducrs;