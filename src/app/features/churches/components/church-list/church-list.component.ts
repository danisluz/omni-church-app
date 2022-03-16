import { Component, OnInit } from '@angular/core';
import { ChurchesService } from '../../church.service';
import { Church } from '../church.model';

@Component({
  selector: 'app-church-read',
  templateUrl: './church-list.component.html',
})
export class ChurchListComponent implements OnInit {
  churches: Church[] = [];
  displayedColumns = ['id', 'name', 'cnpj', 'phone', 'city'];

  constructor(private churcheService: ChurchesService) {}

  ngOnInit(): void {
    this.churchesInitialize();
  }

  churchesInitialize(): void {
    this.churcheService.list().subscribe((churches) => {
      this.churches = churches;
      //console.log(churches)
    });
  }
}
