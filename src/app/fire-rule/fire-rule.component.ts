import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-fire-rule',
  templateUrl: './fire-rule.component.html',
  styleUrls: ['./fire-rule.component.css']
})
export class FireRuleComponent implements OnInit {
  montant: string ='';
  resultDone : boolean  = false;
  result = {
    montant:0,
    commition: ''
  };
  constructor(private ruleService: RuleService) { }
  

  ngOnInit(): void {
  }
  firerule(){
    if(this.montant != '' ){
      this.ruleService.excuteworkflow(this.montant).subscribe((rslts : any)=>{
        if(rslts != null){
          this.resultDone = true;
          this.result = rslts;
        }
        

      });
    }
    
}
}
