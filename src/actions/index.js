import { IMAGES} from "../constants/index.js" ;

const loadImages =( )=>({
    type: IMAGES.LOAD,
});
const setImages =( )=>({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError =( )=>({
    type: IMAGES.LOAD_FAIL,
    error,
})

export { loadImages, setError, setImages};