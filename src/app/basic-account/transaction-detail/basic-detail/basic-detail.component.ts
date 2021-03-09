import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toHome(): void {
    this.router.navigate(['/'], { });
  }

}
