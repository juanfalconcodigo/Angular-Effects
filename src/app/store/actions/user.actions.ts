import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUser=createAction('[USER] Load User',props<{id:string}>());
export const loadUserSuccess=createAction('[USER] Load User Success',props<{user:User}>());
export const loadUserError=createAction('[USER] Load User Error',props<{payload:any}>());