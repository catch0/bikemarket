import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() createUserEvent = new EventEmitter;
  loginuser={};
  newUser = {};

  constructor() { }
  createUser(newUser){
    this.createUserEvent.emit(newUser)
  }

  ngOnInit() {
  }

}
