import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  users = [];
  ref = firebase.database().ref('user/');
  dtOptions: DataTables.Settings = {};

  constructor() { 
    this.ref.on('value', resp => {
      this.users = snapshotToArray(resp);
    });
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  }
}
