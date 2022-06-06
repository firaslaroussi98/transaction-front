import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuleListComponent } from './rule-list/rule-list.component' ;
import { CreateRuleComponent } from './create-rule/create-rule.component' ;
import { FormsModule} from '@angular/forms';
import { UpdateRuleComponent } from './update-rule/update-rule.component';
import {RuleDetailsComponent } from './rule-details/rule-details.component';
import { FireRuleComponent } from './fire-rule/fire-rule.component';
import { LimitaionRuleComponent } from './limitaion-rule/limitaion-rule.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RuleListComponent,
    CreateRuleComponent,
    UpdateRuleComponent,
    RuleDetailsComponent,
    FireRuleComponent,
    LimitaionRuleComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
