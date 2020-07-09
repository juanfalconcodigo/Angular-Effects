import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users:User[]=[]
  constructor(public _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe((resp)=>{
      this.users=resp;
    });
  }

}
