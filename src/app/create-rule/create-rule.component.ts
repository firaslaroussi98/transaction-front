import { Component, OnInit } from '@angular/core';
import { Rule } from '../rule';
import { RuleService } from '../rule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrls: ['./create-rule.component.css']
})
export class CreateRuleComponent implements OnInit {

  rule: Rule = new Rule();
  constructor(private ruleService: RuleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveRule(){
    this.ruleService.createRule(this.rule).subscribe( data =>{
      console.log(data);
      this.goToRuleList();
    },
    error => console.log(error));
  }

  goToRuleList(){
    this.router.navigate(['/rules']);
  }
  
  onSubmit(){
    console.log(this.rule);
    this.saveRule();
  }
}
