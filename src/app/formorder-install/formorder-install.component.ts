import { Component, OnInit, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { Install, initInstall } from '../models/form-install';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-formorder-install',
  templateUrl: './formorder-install.component.html',
  styleUrls: ['./formorder-install.component.scss']
})
export class FormorderInstallComponent {

  items = [];
  ref = firebase.database().ref('forms/');

  install: Install = { ...initInstall };
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

  addInstallFile() {
    const file = this.elem.nativeElement.querySelector('#selectFile').files[0];
    const name = (+new Date()) + '-' + file.name;
    const metadata = { contentType: file.type };
    this.install.responsable = 'Admin';
    this.install.service = 'Install';
    this.install.gov = this.gov;
    firebase.storage().ref().child(name).put(file, metadata)
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      this.install['file'] = url;
      console.log(this.install['file']);
      firebase.database().ref('forms/').push().set(this.install);
      this.install = { ...initInstall };
    })
  }

  addInstall() {
    this.install.responsable = 'Admin';
    this.install.service = 'Install';
    this.install.gov = this.gov;
    firebase.database().ref('forms/').push().set(this.install);
    this.install = { ...initInstall };
  }

  reset() {
    this.install = { ...initInstall };
  }

}
