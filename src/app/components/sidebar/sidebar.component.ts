import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  //{ path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  { path: '/table-list', title: 'User list',  icon:'list', class: '' },
  { path: '/chossegov', title: 'Create order',  icon:'add_circle', class: '' },    
  { path: '/order', title: 'Order list',  icon:'list_box', class: '' },    
  { path: '/add-order', title: 'Order management',  icon:'content_paste', class: '' },
  //{ path: '/quote', title: 'Send a quote',  icon:'near_me', class: '' },
  //{ path: '/invoice', title: 'Send an invoice',  icon:'send', class: '' },
  { path: '/stock', title: 'Stock management',  icon:'format_align_right', class: 'active-pro' }, 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
