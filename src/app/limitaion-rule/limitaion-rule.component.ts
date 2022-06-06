import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-limitaion-rule',
  templateUrl: './limitaion-rule.component.html',
  styleUrls: ['./limitaion-rule.component.css']
})
export class LimitaionRuleComponent implements OnInit {

  montantEmmetteur: string ='';
  soldeBancaire: string ='';
  resultDone : boolean  = false;
  result = {
    montantEmmetteur:0,
    soldeBancaire:0,
    message: ''
  };

  constructor(private ruleService: RuleService) { }

  ngOnInit(): void {
  }
  firerule(){
    if(this.montantEmmetteur != '' &&  this.soldeBancaire != ''){
      this.ruleService.executelimitaionrule(this.montantEmmetteur, this.soldeBancaire).subscribe((rslts : any)=>{
        if(rslts != null){
          this.resultDone = true;
          this.result = rslts;
        }
        

      });
    }
    
}
}



