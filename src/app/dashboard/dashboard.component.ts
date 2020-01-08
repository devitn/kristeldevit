import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as firebase from 'firebase';
import { snapshotToArray } from 'environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items = [];
  forms = [];
  stock = [];
  v = [];
  a = [];
  c = [];
  ch = [];
  constructor() {

    firebase.database().ref('user/').on('value', resp => {
      this.items = snapshotToArray(resp);
    });

    firebase.database().ref('forms/').on('value', resp => {
      this.forms = snapshotToArray(resp);
    });

    firebase.database().ref('stock/').on('value', resp => {
      this.stock = snapshotToArray(resp); 
    });

    firebase.database().ref('forms/').orderByChild("gov").equalTo('VERAGUAS').on('value', resp => {
      this.v = snapshotToArray(resp);
    });

    firebase.database().ref('forms/').orderByChild("gov").equalTo('COCLE').on('value', resp => {
      this.c = snapshotToArray(resp);
    });

    firebase.database().ref('forms/').orderByChild("gov").equalTo('AZUERO').on('value', resp => {
      this.a = snapshotToArray(resp);
    });

    firebase.database().ref('forms/').orderByChild("gov").equalTo('CHIRIQUI').on('value', resp => {
      this.ch = snapshotToArray(resp);
    });
    
  }

  ngOnInit() {
  }

}
