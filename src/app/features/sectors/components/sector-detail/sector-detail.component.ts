import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SectorService } from '../../sector.service';
import { Sector } from '../sector.model';

@Component({
  selector: 'app-sector-detail',
  templateUrl: './sector-detail.component.html',
})
export class SectorDetailComponent implements OnInit {
  sector$: Observable<Sector>;
  id: string;

  constructor(
    private sectorService: SectorService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
    this.sectorInitialized();
  }

  sectorInitialized(): void {
    this.sector$ = this.sectorService.detail(this.id)
  }

}
