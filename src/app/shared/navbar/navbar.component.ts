import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  forma:FormGroup;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.forma=new FormGroup({
      search:new FormControl('')
    });
  }

  submit(){
    const {value:{search}}=this.forma;
    this.router.navigate(['user',search]);
  }

}
