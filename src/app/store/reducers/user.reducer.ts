import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { loadUser, loadUserSuccess,loadUserError } from '../actions';


export interface UserState {
    id:string;
    user:User;
    loading:boolean;
    loaded:boolean;
    error:any;
}

const initialState: UserState = {
    id:null,
    user:null,
    loading:false,
    loaded:false,
    error:null
}

const _userReducer = createReducer(initialState,
    on(loadUser,(state,{id})=>({...state,id,loading:true})),
    on(loadUserSuccess,(state,{user})=>({...state,user:{...user},loading:false,loaded:true})),
    on(loadUserError,(state,{payload:{url,name,message}})=>({...state,loading:false,loaded:false,error:{url,name,message}}))
)

export const userReducer=(state,action)=>{
    return _userReducer(state,action);
}

