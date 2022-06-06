import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Rule } from './rule';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  private baseURL = "http://localhost:8085/";
   
  constructor(private httpClient: HttpClient) { }
  
  getRulesList(): Observable<Rule[]>{
    return this.httpClient.get<Rule[]>(`${this.baseURL}drools/rules`);
  }
 
  createRule(rule: Rule): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}drools/rules`, rule);
  }

  getRuleById(id: number): Observable<Rule>{
    return this.httpClient.get<Rule>(`${this.baseURL}drools/rules/${id}`);
  }

  updateRule(id: number, rule: Rule): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}drools/rules/${id}`, rule);
  }

  deleteRule(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}drools/rules/${id}`);
  }
  excuteworkflow(montant):Observable<Object>{
    return this.httpClient.get<Object>(`${this.baseURL}drools/getFDInterestRate/${montant}`);

  }
  executelimitaionrule(montantEmmetteur, soldeBancaire):Observable<Object>{
    return this.httpClient.get<Object>(`${this.baseURL}drools/getLimitation/${soldeBancaire}/${montantEmmetteur}`);
  }
}
