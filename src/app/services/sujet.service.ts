import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http: HttpClient) { }

  getAll()  {

    return this.http.get('http://localhost:4000/sujets/getAll');
  }

  getSujet(id){
    return this.http.get('http://localhost:4000/sujets/getSujet/'+ id)

  }
  
  create(sujet){
  console.log(sujet)
    return this.http.post('http://localhost:4000/sujets/create/',sujet);
  
  }
  update(sujet) {
   console.log(sujet._id)
     return this.http.post('http://localhost:4000/sujets/update/'+ sujet._id, sujet);
  }
  updateSujet(sujet) {
    console.log(sujet.titre)
    console.log(sujet)
      return this.http.post('http://localhost:4000/sujets/update/'+ sujet.titre, sujet);
   }

  deleteSujet(sujet) {
    console.log(sujet)
      return this.http.post('http://localhost:4000/sujets/delete/'+ sujet._id, sujet);
  }

  


}
