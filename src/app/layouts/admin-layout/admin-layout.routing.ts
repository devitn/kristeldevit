import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { BonlivraisonComponent } from '../../quote/bonlivraison.component';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { OrderComponent } from '../../order/order.component';
import { LoginComponent } from '../../login/login.component';
import { AddorderComponent } from '../../addorder/addorder.component';
import { ChooseserviceComponent } from '../../chooseservice/chooseservice.component';
import { FormorderComponent } from '../../formorder/formorder.component';
import { CreateComponent } from '../../create/create.component';
import { ChoosegovComponent } from '../../choosegov/choosegov.component';
import { FormorderInstallComponent } from '../../formorder-install/formorder-install.component';
import { FormorderRepairComponent } from '../../formorder-repair/formorder-repair.component';
import { StockComponent } from '../../stock/stock.component';
import { StockEditComponent } from '../../stock-edit/stock-edit.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',               component: DashboardComponent },
    { path: 'user-profile',            component: UserProfileComponent },
    { path: 'table-list',              component: TableListComponent },
    { path: 'notifications',           component: NotificationsComponent },
    { path: 'quote',                   component: BonlivraisonComponent },
    { path: 'quote/:id',               component: BonlivraisonComponent },
    { path: 'invoice',                 component: InvoiceComponent },
    { path: 'invoice/:id',             component: InvoiceComponent },
    { path: 'order',                   component: OrderComponent },
    { path: 'order/:gov/:id',          component: OrderComponent },
    { path: 'order/:gov',              component: OrderComponent },
    { path: 'login',                   component: LoginComponent },
    { path: 'add-order',               component: AddorderComponent },
    { path: 'formorder/:gov',          component: FormorderComponent },
    { path: 'formorder-install/:gov',  component: FormorderInstallComponent },
    { path: 'formorder-repair/:gov',   component: FormorderRepairComponent },
    { path: 'chooseservice',           component: ChooseserviceComponent },
    { path: 'chooseservice/:gov',      component: ChooseserviceComponent },
    { path: 'create',                  component: CreateComponent },
    { path: 'chossegov',               component: ChoosegovComponent },
    { path: 'stock',                   component: StockComponent },
    { path: 'stock-edit/:id',          component: StockEditComponent },
];
