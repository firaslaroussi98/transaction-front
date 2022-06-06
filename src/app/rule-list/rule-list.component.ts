import { Component, OnInit } from '@angular/core';
import { Rule } from '../rule'
import { RuleService } from '../rule.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {

  rules: Rule[];

  constructor(private ruleService: RuleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRules();
  }

  private getRules(){
    this.ruleService.getRulesList().subscribe(data => {
      this.rules = data;
    });
  }

  ruleDetails(id: number){
    this.router.navigate(['rule-details', id]);
  }

  updateRule(id: number){
    this.router.navigate(['update-rule', id]);
  }

  deleteRule(id: number){
    this.ruleService.deleteRule(id).subscribe( data => {
      console.log(data);
      this.getRules();
    })
  }
}
