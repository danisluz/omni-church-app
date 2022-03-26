import { Component, OnInit } from '@angular/core';
import { Sector } from '../sector.model';
import { SectorService } from '../../sector.service';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
})
export class SectorListComponent implements OnInit {
  sectors: Sector[] = [];
  displayedColumns = ['id', 'name', 'number'];

  constructor(private sectorService: SectorService) {}

  ngOnInit(): void {
    this.churchesInitialize();
  }

  churchesInitialize(): void {
    this.sectorService.list().subscribe((sectors) => {
      this.sectors = sectors;
    });
  }

}
