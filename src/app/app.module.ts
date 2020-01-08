import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BonlivraisonComponent } from './quote/bonlivraison.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ChooseserviceComponent } from './chooseservice/chooseservice.component';
import { CreateComponent } from './create/create.component';
import { ChoosegovComponent } from './choosegov/choosegov.component';
import { FormorderInstallComponent } from './formorder-install/formorder-install.component';
import { FormorderRepairComponent } from './formorder-repair/formorder-repair.component';
import { StockComponent } from './stock/stock.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { QuotationDetailComponent } from './quotation-detail/quotation-detail.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    QuotationDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
