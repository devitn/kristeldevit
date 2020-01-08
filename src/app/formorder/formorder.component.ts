import { Component, OnInit, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { Maintenance, initMaintenance } from '../models/form-maintenance';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-formorder',
  templateUrl: './formorder.component.html',
  styleUrls: ['./formorder.component.scss']
})
export class FormorderComponent {

  items = [];
  ref = firebase.database().ref('forms/');

  maintenance: Maintenance = { ...initMaintenance };
  image: string;
  gov: string;
  typeF: any;

  constructor(private elem: ElementRef, private route: ActivatedRoute) {
    this.gov = this.route.snapshot.paramMap.get("gov");
    firebase.database().ref('forms/').on('value', resp => {
      this.items = snapshotToArray(resp);
    });
  }

  addMaintenance() {
    this.maintenance.responsable = 'Admin';
    this.maintenance.service = 'Maintenance';
    this.maintenance.equipemenet = 'AIR CONDITIONER';
    this.maintenance.gov = this.gov;
    firebase.database().ref('forms/').push().set(this.maintenance);
    this.maintenance = { ...initMaintenance };
  }

  reset() {
    this.maintenance = { ...initMaintenance };
  }
}
