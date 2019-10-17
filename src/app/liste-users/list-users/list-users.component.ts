import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modeles/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
users:User[];
createForm:FormGroup;
modForm;FormGroup;
searchKey:String;
  constructor(private userService:UserService) { 
this.createForm= new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
     
      email: new FormControl(''),
      password: new FormControl(''),
    
})

  }

  ngOnInit() {
    this.loadAll();
  }
 
  loadAll(){
    this.userService.getAll().subscribe((result:User[])=>{
      this.users=result

    });
  }

  openModalC(){
    this.createForm.setValue({
      
      firstName: new FormControl(''),
      lastName: new FormControl(''),
     
      email: new FormControl(''),
      password: new FormControl(''),
    
      
    })

  }

  openModalMod(user){
    this.modForm.setValue({
      
      firstName:user.firstName,
      lastName: user.lastName,
     
      email: user.email,
      password: user.password,
    
      
    })

  }


}
