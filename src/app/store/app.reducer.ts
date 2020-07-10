import {ActionReducerMap} from '@ngrx/store';
import { UsersState, usersReducer } from './reducers';
import { UserState, userReducer } from './reducers/user.reducer';

export interface AppState{
    users:UsersState;
    user:UserState
}


export const AppReducers:ActionReducerMap<AppState>={
    users:usersReducer,
    user:userReducer
}
