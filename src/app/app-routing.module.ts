import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleListComponent } from './rule-list/rule-list.component';
import { CreateRuleComponent } from './create-rule/create-rule.component';
import { UpdateRuleComponent } from './update-rule/update-rule.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { FireRuleComponent } from './fire-rule/fire-rule.component';
import { LimitaionRuleComponent } from './limitaion-rule/limitaion-rule.component';
 
const routes: Routes = [
  {path: 'rules', component: RuleListComponent},
  {path: 'create-rule', component: CreateRuleComponent},
  {path: 'fire-rule', component: FireRuleComponent},
  {path:'limitaion-rule', component:LimitaionRuleComponent},
  
  {path: '', redirectTo: 'rules', pathMatch: 'full'},
  {path: 'update-rule/:id', component: UpdateRuleComponent},
  {path: 'rule-details/:id', component: RuleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
