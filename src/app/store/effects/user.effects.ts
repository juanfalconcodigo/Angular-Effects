import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { loadUser, loadUserError,loadUserSuccess } from '../actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffect{
    constructor(private _userService:UserService,private actions$:Actions){
    }

    loadUser$=createEffect(
        ()=>this.actions$.pipe(
            ofType(loadUser),
            mergeMap(
                ({id})=>this._userService.getUser(id).pipe(
                    map(resp=>loadUserSuccess({user:resp})),
                    catchError((err)=>of(loadUserError({payload:err})))
                )
            )
        )
    );

}

