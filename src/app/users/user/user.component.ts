import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { loadUser } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {
  
  user:User=null;
  userSubscription:Subscription=null;
  constructor(private store:Store<AppState>,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(({id})=>{
      this.store.dispatch(loadUser({id}));
    });

    this.userSubscription=this.store.select('user').subscribe(({user})=>{
      this.user=user;
      console.log(this.user);
    });
   
    
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
