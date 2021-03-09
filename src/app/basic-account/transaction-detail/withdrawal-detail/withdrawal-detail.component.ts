import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal-detail',
  templateUrl: './withdrawal-detail.component.html',
  styleUrls: ['./withdrawal-detail.component.css']
})
export class WithdrawalDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toHome(): void {
    this.router.navigate(['/'], { });
  }
}
