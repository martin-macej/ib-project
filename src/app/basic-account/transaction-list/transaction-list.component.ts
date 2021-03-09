import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toTransactionDetail(): void {
    const id = 5;
    this.router.navigate(['/transaction-detail/' + id], { });
  }
}
