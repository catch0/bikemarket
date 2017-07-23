import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() createUserEvent = new EventEmitter;
  user ={};
  loginUser={};
  newUser = {};
  registrationErrors = [];
  loginErrors = [];
  constructor(private _userService: UserService, private _router:Router) { }

  // propogateUser(newUser){
  //   this.createUserEvent.emit(newUser)
  // }

  login(loginUser){
    console.log(loginUser);
    return this._userService.authenticate(loginUser)
    .then(user => {
      if(user.errors){
        for(let key in user.errors){
          let error = user.errors[key];
          this.loginErrors.push(error.message);
          console.log(this.loginErrors);
        }
      } else {
          this._userService.storeCurrentUser(user);
          this._router.navigateByUrl('/dashboard')
      }
     })
    .catch(err => { console.log(err) })
  }

  createUser(newUser){
    console.log('in app component');
    console.log(newUser);
    return this._userService.create(newUser)
    .then(user => {
      console.log(user)
      if(user.errors){
        for(let key in user.errors){
          let error = user.errors[key];
          this.registrationErrors.push(error.message);
        }
      } else {
        this._userService.storeCurrentUser(user);
        this._router.navigateByUrl('/dashboard');
      }
    })
    .catch(err => { console.log(err) })
  }


  ngOnInit() {
  }

}
