import { Component, OnInit, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { Stock, initStock } from '../layouts/models/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  items = [];
  ref = firebase.database().ref('stock/');
  stock: Stock  = {...initStock};
  dtOptions: DataTables.Settings = {};

  constructor(private elem: ElementRef, ) { 
    this.ref.on('value', resp => {
      this.items = snapshotToArray(resp);
    });
  }

  addStock(){
    const file = this.elem.nativeElement.querySelector('#selectFile').files[0];
    const name = (+new Date()) + '-' + file.name;
    const metadata = { contentType: file.type };
    firebase.storage().ref().child(name).put(file, metadata)
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      this.stock['picture'] = url;
      firebase.database().ref('stock/').push().set(this.stock);
      this.stock = { ...initStock };
    })
  }

  deleteSth(key: string){
    if (confirm('Are you sure to delete this record ?')) {
      var x = firebase.database().ref('/stock/'+key).remove();
      if (x) {
        console.log("Remove succeeded." + key);
      } else {
        console.log("Remove failed")
      }
    }
  }
  
  ngOnInit() {
    this.dtOptions = {
      paging: false,
    };
  }
}
