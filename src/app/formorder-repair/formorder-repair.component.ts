import { Component, OnInit, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { Repair, initRepair } from '../models/form-repair';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-formorder-repair',
  templateUrl: './formorder-repair.component.html',
  styleUrls: ['./formorder-repair.component.scss']
})
export class FormorderRepairComponent {
  items = [];
  ref = firebase.database().ref('forms/');

  repair: Repair = { ...initRepair };
  userEmail: string;
  image: string;
  gov: string;
  typeF: any;

  constructor(private elem: ElementRef, private route: ActivatedRoute) {
    this.gov = this.route.snapshot.paramMap.get("gov");
    console.log(this.gov);
    firebase.database().ref('forms/').on('value', resp => {
      this.items = snapshotToArray(resp);
    });
  }

  addRepairFile() {
    const file = this.elem.nativeElement.querySelector('#selectFile').files[0];
    const name = (+new Date()) + '-' + file.name;
    const metadata = { contentType: file.type };
    this.repair.responsable = 'Admin';
    this.repair.service = 'Repair';
    this.repair.gov = this.gov;
    firebase.storage().ref().child(name).put(file, metadata)
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      this.repair['file'] = url;
      console.log(this.repair['file']);
      firebase.database().ref('forms/').push().set(this.repair);
      this.repair = { ...initRepair };
    })
  }

  addRepair() {
    this.repair.responsable = 'Admin';
    this.repair.service = 'Repair';
    this.repair.gov = this.gov;
    firebase.database().ref('forms/').push().set(this.repair);
    this.repair = { ...initRepair };
  }

  reset() {
    this.repair = { ...initRepair };
  }
}
