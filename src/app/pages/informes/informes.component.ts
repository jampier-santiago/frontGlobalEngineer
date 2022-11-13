// --- Dependencies ---
import { Component, OnInit } from '@angular/core';

// --- Services ---
import { GeneralService } from 'src/app/services/general.service';
import { InformesService } from './informes.service';

// --- Interfaces ---
import { Select } from 'src/app/services/general.interfaces';
import { Report } from './informes.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss'],
})
export class InformesComponent implements OnInit {
  public filterByPerson: boolean = true;
  public startDate: Date = new Date();
  public finishDate: Date = new Date();
  public optionId: Select = { code: '', name: '' };
  public stateSwitch: boolean = true;
  public dataTable: Report[] = [];

  public options: Select[] = [];

  handleChangeSwitch(first: boolean = false) {
    if (!first) {
      this.stateSwitch = true;
      this.filterByPerson = !this.filterByPerson;
    }

    if (this.filterByPerson) {
      this._generalService
        .getPeople()
        .subscribe((data) => (this.options = data));
    } else {
      this._generalService
        .getProducts()
        .subscribe((data) => (this.options = data));
    }
  }

  findReport() {
    if (this.startDate && this.finishDate && this.optionId) {
      if (this.filterByPerson) {
        this._informesSevice
          .getReportByPerson(
            `${this.startDate.getFullYear()}-${
              this.startDate.getMonth() + 1
            }-${this.startDate.getDate()}`,
            `${this.finishDate.getFullYear()}-${
              this.finishDate.getMonth() + 1
            }-${this.finishDate.getDate()}`,
            this.optionId.code
          )
          .subscribe((data) => (this.dataTable = data));
      } else {
        this._informesSevice
          .getReportByProduct(
            `${this.startDate.getFullYear()}-${
              this.startDate.getMonth() + 1
            }-${this.startDate.getDate()}`,
            `${this.finishDate.getFullYear()}-${
              this.finishDate.getMonth() + 1
            }-${this.finishDate.getDate()}`,
            this.optionId.code
          )
          .subscribe((data) => (this.dataTable = data));
      }
    }
  }

  constructor(
    private _generalService: GeneralService,
    private _informesSevice: InformesService
  ) {
    this.filterByPerson = true;
  }

  ngOnInit(): void {
    this.handleChangeSwitch(true);
  }
}
