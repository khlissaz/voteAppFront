import { Component, OnInit } from '@angular/core';
import { SujetService } from '../services/sujet.service';
import { Sujet } from '../modeles/sujet';
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
  constructor(private sujetService: SujetService) {
    this.currentSujet = JSON.parse(localStorage.getItem("currentSujet"));
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));


    // localStorage.setItem('cpt', this.cpt);
   
  }
  ngOnInit() {
    this.sujetService.getAll()
 
    }

  VoterOui() {
this.currentSujet.participants++

  this.currentSujet.choix[0]=this.currentSujet.choix[0]+1;
 
  
  this.sujetService.updateSujet(this.currentSujet).subscribe(result => {
      console.log(result)
      error => {
                console.log(error)
    }
    })
    this.updateChart();

  }


  VoterNon() {
    this.currentSujet.participants++

    this.currentSujet.choix[1]=this.currentSujet.choix[1]+1;
    
    this.sujetService.update(this.currentSujet).subscribe(result => {
      console.log(result)
    })
     this.updateChart()
  }



  updateChart(){
    this.chartEmpty = true;
    this.chartLabels = ["OUI","NON"];
    this.chartData = this.currentSujet.choix;
    
  }

  

}
