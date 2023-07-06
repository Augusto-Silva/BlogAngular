import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent{
  public page_title:    string;
  public user: User;
  public status: string;

  constructor(
    private _userService: UserService
  ){
    this.page_title = 'Registrate';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '')
    this.status = "";
        /*public id:          number,
        public name:        string,
        public surname:     string,
        public role:        string,
        public email:       string,
        public password:    string,
        public description: string,
        public image:       string*/
  }

  

  onSubmit(form:any){
    this._userService.register(this.user).subscribe(
      response => {

        if(response.status == "success"){
          this.status = response.status;
          form.reset();
        }else{
          this.status = 'error';
        }

      },

      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
  
}
