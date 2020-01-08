import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AgGridModule } from 'ag-grid-angular';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { BonlivraisonComponent } from '../../quote/bonlivraison.component';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { OrderComponent } from '../../order/order.component';
import { LoginComponent } from '../../login/login.component';
import { AddorderComponent } from '../../addorder/addorder.component';
import { FormorderComponent } from '../../formorder/formorder.component';
import { ChooseserviceComponent } from '../../chooseservice/chooseservice.component';
import { CreateComponent } from '../../create/create.component';
import { ChoosegovComponent } from '../../choosegov/choosegov.component';
import { FormorderInstallComponent } from '../../formorder-install/formorder-install.component';
import { FormorderRepairComponent } from '../../formorder-repair/formorder-repair.component';
import { StockComponent } from '../../stock/stock.component';
import { StockEditComponent } from '../../stock-edit/stock-edit.component';

import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    DataTablesModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    NotificationsComponent,
    BonlivraisonComponent,
    InvoiceComponent,
    OrderComponent,
    LoginComponent,
    AddorderComponent,
    FormorderComponent,
    ChooseserviceComponent,
    CreateComponent,
    ChoosegovComponent,
    FormorderInstallComponent,
    FormorderRepairComponent,
    StockComponent,
    StockEditComponent
  ],
  bootstrap: [StockComponent]
})

export class AdminLayoutModule {}
