import { Component, OnInit } from '@angular/core';
import { ChurchesService } from '../../church.service';
import { Churches } from '../churches.model';

@Component({
  selector: 'app-church-read',
  templateUrl: './church-read.component.html'
})
export class ChurchReadComponent implements OnInit {
  churches: Churches[] = [];
  displayedColumns = ['id', 'name', 'cnpj', 'phone', 'city'];

  constructor( private churcheService: ChurchesService) { }

  ngOnInit(): void {
    this.churchesInitialize();
  }

  churchesInitialize(): void {
    this.churcheService.read().subscribe(churches => {
      this.churches = churches
      //console.log(churches)
    })
  }

}
