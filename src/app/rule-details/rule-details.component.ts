import { Component, OnInit } from '@angular/core';
import { Rule } from '../rule';
import { ActivatedRoute } from '@angular/router';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.css']
})
export class RuleDetailsComponent implements OnInit {

  id: number
  rule: Rule
  constructor(private route: ActivatedRoute, private ruleService: RuleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.rule = new Rule();
    this.ruleService.getRuleById(this.id).subscribe( data => {
      this.rule = data;
    });
  }

}
