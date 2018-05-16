import {combineReducers} from 'redux';
import { UserData } from './UserReducer';

const reducers = combineReducers({
    user: UserData
});

export default reducers