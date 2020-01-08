import {  Component } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice, initInvoice } from '../layouts/models/invoice';
import * as $ from 'jquery';
import 'bootstrap-notify';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  invoice: Invoice  = {...initInvoice};
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

  addInvoice(){
    firebase.database().ref('quote/').child(this.id).push().set(this.invoice);
    this.invoice = {...initInvoice};
    $.notify({ title: '<strong>Success!!</strong>', message: 'Registration has been successfully completed.' }, { type: 'success' });
  }

  saveInvoice(){
    firebase.database().ref('forms/'+this.id+'/etat').set('Invoice send');
    $.notify({ title: '<strong>Success!!</strong>', message: 'The invoice has been sent successfully.' }, { type: 'success' });
    this.router.navigate(['order']);
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
