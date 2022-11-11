// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss'],
})
export class InformesComponent implements OnInit {
  constructor(private _router: Router) {}

  goToDashboard() {
    this._router.navigateByUrl('/dashboard');
  }

  ngOnInit(): void {}
}
