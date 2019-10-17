import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  getAll()  {

    return this.http.get('http://localhost:4000/votes/getAll');
  }
  getChoix(choix)  {

    return this.http.get('http://localhost:4000/votes/getChoix/'+choix);
  }


  getSujet(id){
    return this.http.get('http://localhost:4000/votes/getVote/'+ id)

  }
  
  create(vote){
   console.log(vote)
    return this.http.post('http://localhost:4000/votes/create',vote);
  
  }
  update(vote) {
   
     return this.http.post('http://localhost:4000/votes/update/'+ vote.id, vote);
  }

  deleteSujet(sujet) {
    
      return this.http.post('http://localhost:4000/Sujets/deleteSujet/'+ sujet._id,sujet);
  }



}
