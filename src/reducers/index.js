import {combineReducers} from 'redux';
import animalsReducer from './animalsReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import donationsReducer from './donationsReducer';

const rootReducer = combineReducers ({
  animals: animalsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  donations: donationsReducer
})

export default rootReducer;