import { Injectable } from '@angular/core';
import { User } from '../modeles/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient,private myRoute : Router) { }
  register(user){
    console.log(user)
    return this.http.post('http://localhost:4000/users/create',user);
  
  }
  getAll() {
    return this.http.get('http://localhost:4000/users/getAllusers');
}

getById(id: number) {
    return this.http.get('/api/users/' + id);
}

update(user: User) {
  
  
   return this.http.post('http://localhost:4000/users/updateUser/' + user.id, user);
}

delete(user) {
 
    return this.http.post('http://localhost:4000/users/deleteUser/' + user.id,user);
}
  affectUser(idUser,id){
  return this.http.post('http://localhost:4000/users/affect/'+idUser+ '/' +id ,idUser)

}
}
