import { BasicDetailComponent } from './basic-account/transaction-detail/basic-detail/basic-detail.component';
import { WithdrawalDetailComponent } from './basic-account/transaction-detail/withdrawal-detail/withdrawal-detail.component';
import { TransactionListComponent } from './basic-account/transaction-list/transaction-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailComponent } from './basic-account/transaction-detail/transaction-detail.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'transaction-list',
  component: TransactionListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
