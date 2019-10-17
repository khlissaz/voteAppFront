import { Component, OnInit } from '@angular/core';
import { SujetService } from '../services/sujet.service';
import { Sujet } from '../modeles/sujet';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { userInfo } from 'os';

@Component({
  selector: 'app-list-sujets',
  templateUrl: './list-sujets.component.html',
  styleUrls: ['./list-sujets.component.scss']
})
export class ListSujetsComponent implements OnInit {
  sujets: Sujet[];
  createForm: FormGroup;
  modForm: FormGroup;
  searchKey: String;
  currentUser:any;
  sujet: Sujet;
  isuser: boolean = false;
  constructor(private sujetService: SujetService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.sujet = new Sujet();
    this.createForm = new FormGroup({
      titre: new FormControl(""),
      description: new FormControl(""),
      user: new FormControl(""),
      choix: new FormControl("")
    });

    this.modForm = new FormGroup({
      titre: new FormControl(""),
      description: new FormControl(""),

    });


  }

  ngOnInit() {
    this.loadAll();

  }
  loadAll() {
    this.sujetService.getAll().subscribe((result: Sujet[]) => {
      this.sujets = result
     

    });
  }

  openModalC() {
    
    this.createForm.setValue({
      user: this.currentUser._id
    })

  }

  create() {
    if (confirm('Are you sure to create this subject?')) {

      this.sujet.user = this.currentUser._id
      this.sujet.titre = this.createForm.value.titre
      this.sujet.description = this.createForm.value.description
      this.sujet.participants = 0;
      this.sujet.choix = [0, 0];
      this.sujetService.create(this.sujet).subscribe((data) => {
        this.loadAll();
      });
    }
  }

  delete(sujet) {
    if (confirm('Are you sure to update this user?')) {
      this.sujetService.deleteSujet(sujet);
    }
    this.loadAll()
  }

  startVote(sujet) {
    localStorage.setItem('currentSujet', JSON.stringify(sujet));


    this.router.navigate(['/vote'])
  }
  IsUser(sujet) {
    console.log(this.currentUser._id)
    console.log(sujet.user._id)
    if (this.currentUser._id == sujet.user._id) { this.isuser = true }
    return this.isuser;
  }


}
