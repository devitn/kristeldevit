import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  items = [];
  dtOptions: DataTables.Settings = {};

  id: string;
  gov: string;
  etat: string;
  file: any;

  constructor(private route: ActivatedRoute) { 
    this.gov = this.route.snapshot.paramMap.get("gov");

    this.id = this.route.snapshot.paramMap.get("id");

    //console.log(this.id);
    //console.log(this.gov;
    if (this.id == '1') this.etat = 'Order create';
    if (this.id == '2') this.etat = 'Quotation refused';
    if (this.id == '3') this.etat = 'Quotation accepted';
    if (this.id == '4') this.etat = 'Invoice send';

    if (this.gov == null && this.id == null) {
      firebase.database().ref('forms/').on('value', resp => {
        this.items = snapshotToArray(resp);
        this.file = firebase.storage().ref(this.items[0].file).getDownloadURL();
        console.log(this.file);
      });
    }
    
    if (this.gov != null && this.id == null) {
      firebase.database().ref('forms/').orderByChild("gov").equalTo(this.gov).on('value', resp => {
        this.items = snapshotToArray(resp);
        this.file = firebase.storage().ref(this.items[0].file).getDownloadURL();
      });
    }
    
    if ((this.gov != null) && (this.id != null)) {
      firebase.database().ref('forms/').orderByChild("etat").equalTo(this.etat).on('child_added', resp => {
        var result = resp.val();
        if (this.gov == result.gov) {
          this.items.push(result);
        }
        //this.items = snapshotToArray(resp);
        this.file = firebase.storage().ref(this.items[0].file).getDownloadURL();
      });
    } 
    
  }

  ngOnInit() {
    this.dtOptions = {
      paging: false,
      processing: true,
      scrollX: true,
      scrollY: '700px',
      scrollCollapse: true,
    };
  }
}