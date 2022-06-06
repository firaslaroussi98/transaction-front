import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';
import { Rule } from '../rule';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-rule',
  templateUrl: './update-rule.component.html',
  styleUrls: ['./update-rule.component.css']
})
export class UpdateRuleComponent implements OnInit {

  id: number;
  rule: Rule = new Rule();
  constructor(private ruleService: RuleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ruleService.getRuleById(this.id).subscribe(data => {
      this.rule = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ruleService.updateRule(this.id, this.rule).subscribe( data =>{
      this.goToRuleList();
    }
    , error => console.log(error));
  }

  goToRuleList(){
    this.router.navigate(['/rules']);
  }
}
