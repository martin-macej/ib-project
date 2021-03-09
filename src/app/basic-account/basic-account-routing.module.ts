import { WithdrawalDetailComponent } from './transaction-detail/withdrawal-detail/withdrawal-detail.component';
import { BasicDetailComponent } from './transaction-detail/basic-detail/basic-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'transaction-detail/:id',
  component: TransactionDetailComponent
}, {
  path: 'transaction-detail/:id/basic',
  component: BasicDetailComponent
}, {
  path: 'transaction-detail/:id/withdrawal',
  component: WithdrawalDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAccountRoutingModule { }
