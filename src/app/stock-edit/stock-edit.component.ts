import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { Stock, initStock } from '../layouts/models/stock';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss']
})
export class StockEditComponent {

  stock: Stock  = {...initStock}; 

  dtOptions: DataTables.Settings = {};
  id = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute) {}

  updateStock(){
    var x = firebase.database().ref('/stock/'+this.id).update(this.stock);
    if (x) {
      console.log("update succeeded." + this.id);
    } else {
      console.log("update failed")
    }
  }
}
