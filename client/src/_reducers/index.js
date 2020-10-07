import { combineReducers } from 'redux';
// import user from './user_reducer';

// 기능마다 Reducer가 존재하는데 이 Reducer들을 rootReducer에 통합시켜서 사용하기 위한 과정이다.
const rootReducer = combineReducers({
    // user,
});

export default rootReducer;