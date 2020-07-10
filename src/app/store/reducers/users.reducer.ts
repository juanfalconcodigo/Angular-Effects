import { createReducer, on, State } from '@ngrx/store';
import { loadUsers, loadUsersSuccess,loadUsersError } from '../actions';
import { User } from '../../models/user.model';


export interface UsersState{
    users:User[];
    loaded:boolean;
    loading:boolean;
    error:any;
}
const initialState:UsersState={
    users:[],
    loaded:false,
    loading:false,
    error:null
}

const _usersReducer = createReducer(initialState,
    on(loadUsers,state=>{
        return {...state,loading:true}
    }),
    on(loadUsersSuccess,(state,{users})=>{
        return {...state,users:[...users],loaded:true,loading:false}
    }),
    on(loadUsersError,(state,{payload:{url,name,message}})=>({...state,error:{url,name,message},loading:false,loaded:false}))
);

export const usersReducer=(state,action)=>{
    return _usersReducer(state,action);
}