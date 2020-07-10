import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Actions,createEffect, ofType} from '@ngrx/effects'
import { loadUsers, loadUsersSuccess ,loadUsersError} from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffect {

    constructor(private _userService:UserService,private actions$:Actions){
    }

    loadUsers$=createEffect(
        ()=>this.actions$.pipe(
            ofType(loadUsers),
            mergeMap(
               ()=>this._userService.getUsers().pipe(
                map(users=>loadUsersSuccess({users})),
                catchError(err=>of(loadUsersError({payload:err})))
               )
            )    
        )
    );

}