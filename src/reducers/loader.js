import { IMAGES  } from '../constants/index';

const loader = (state = false, action) => {
    switch ( action.type){
        case IMAGES.LOAD:
            return true;
            case IMAGES.LOAD_SUCESS:
                return false;
                case IMAGES.LOAD_FAIL:
                    return false;

                    default:
                        return state;
    }
}

export default loader;