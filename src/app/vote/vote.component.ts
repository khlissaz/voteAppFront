import { Component, OnInit } from '@angular/core';
import { SujetService } from '../services/sujet.service';
import { Sujet } from '../modeles/sujet';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  currentSujet: Sujet;
  currentUser: any;
  cpt: Number;
  sujet:Sujet;
  isVoted:boolean=false;
 
  public chartType:string = 'pie';

  public chartEmpty: boolean = true;
  public chartData:any = [];

  public chartLabels:Array<any> = ['Red', 'Green'];
  public chartColors:Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
    hoverBorderWidth: 0, 
    backgroundColor: ["#F7464A", "#46BFBD"], 
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
}];

public chartOptions:any = { 
    responsive: true
};

public chartClicked(e: any): void { 
     
} 

public chartHovered(e: any): void { 
     
}
  constructor(private sujetService: SujetService, private userService: UserService) {
    this.currentSujet = JSON.parse(localStorage.getItem("currentSujet"));
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));


    // localStorage.setItem('cpt', this.cpt);
   
  }
  ngOnInit() {
    this.sujetService.getAll()
 
    }

  VoterOui() {
    if(!this.voted(this.currentSujet._id)){
      if(this.currentUser.sujets.length<5)
      {
this.currentSujet.participants++

  this.currentSujet.choix[0]=this.currentSujet.choix[0]+1;
 
  
  this.userService.affectUser(this.currentUser._id,this.currentSujet._id).subscribe(result => {
      console.log(result)
      error => {
                console.log(error)
    }
    })
    this.updateChart();
  } else alert("Vous ne pouvez voter que 5 sujets!!!")
} else alert("Vous avez dejà voté ce sujet!!!")
  }


  VoterNon() {
    if(!this.voted(this.currentSujet._id)){
      if(this.currentUser.sujets.length<5)
      {
    this.currentSujet.participants++

    this.currentSujet.choix[1]=this.currentSujet.choix[1]+1;
    this.sujetService.updateSujet(this.currentSujet);
    this.userService.affectUser(this.currentUser._id,this.currentSujet._id).subscribe(result => {
      console.log(result)
    })
     this.updateChart()
    
     
    } else alert("Vous ne pouvez voter que 5 sujets!!!")
  } else alert("Vous avez dejà voté ce sujet!!!")
}

  updateChart(){
    this.chartEmpty = true;
    this.chartLabels = ["OUI","NON"];
    this.chartData = this.currentSujet.choix;
    
  }
  voted(id){
    for(var i; i< this.currentUser.sujets.length; i++){
      if (this.currentUser.sujets[i]._id=id){
        this.isVoted==true;
      }
    }
    return this.isVoted;
  }

  
}
