import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toBasic(): void {
    this.router.navigate(['/transaction-detail/5/basic'], { });
  }

  toWithdrawal(): void {
    this.router.navigate(['/transaction-detail/5/withdrawal'], { });
  }
}
