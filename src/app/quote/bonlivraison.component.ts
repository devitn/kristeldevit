import {  Component } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Quotation, initQuotation } from '../layouts/models/quotation';
import * as $ from 'jquery';
import 'bootstrap-notify';

@Component({
  selector: 'app-bonlivraison',
  templateUrl: './bonlivraison.component.html',
  styleUrls: ['./bonlivraison.component.scss']
})
export class BonlivraisonComponent {

  quotation: Quotation  = {...initQuotation};
  items = [];
  vats = [];
  it = [];
  user = [];
  num : number;
  id = this.route.snapshot.paramMap.get('id');
  public now: Date = new Date();

  constructor(private route: ActivatedRoute, public router: Router) {
    if (this.id == null) {
      firebase.database().ref('quote/').on('value', resp => {
        this.items = snapshotToArray(resp);
      });
    } else {
      firebase.database().ref('quote/'+this.id).on('value', resp => {
        this.items = snapshotToArray(resp);
      });
    }

    firebase.database().ref('vat/').orderByKey().equalTo(this.id).on('value', resp => {
      this.vats = snapshotToArray(resp);
    });
    
    firebase.database().ref('forms/').orderByKey().equalTo(this.id).on('value', resp => {
      this.user = snapshotToArray(resp);
    });

    setInterval(() => { this.now = new Date(); }, 1);
  }

  onPrint() {
    window.print();
  }

  addQuotation(){
    firebase.database().ref('quote/').child(this.id).push().set(this.quotation);
    this.quotation = {...initQuotation};
    $.notify({ title: '<strong>Success!!</strong>', message: 'Registration has been successfully completed.' }, { type: 'success' });
  }

  updateList(event: any){
    firebase.database().ref('vat/').child(this.id+'/vat/').set(event.target.textContent);
  }

  saveQuotation(){
    firebase.database().ref('forms/'+this.id+'/etat').set('Quotation send');
    $.notify({ title: '<strong>Success!!</strong>', message: 'The quote has been sent successfully.' }, { type: 'success' });
    this.router.navigate(['order']);
  }

  delete(key: any) {
    firebase.database().ref('quote/'+this.id+'/'+key).remove();
  }

  getSum() : number {
    let sum = 0;
    for(let i = 0; i < this.items.length; i++) {
      sum += this.items[i].price*this.items[i].qte;
    }
    return sum;
  }

  getSumVat() : number {
    return this.getSum()+((this.getSum()*this.vats[0].vat)/100);
  }

}
