import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SectorService } from '../../sector.service';
import { Sector } from '../sector.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sector-edit',
  templateUrl: './sector-edit.component.html',
})
export class SectorEditComponent implements OnInit {
  formSector: FormGroup;
  sector$: Observable<Sector>;
  id: string;
  @Input() editMode: boolean;

  constructor(
    private sectorService: SectorService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    if (this.editMode) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.id = id;
        this.sectorInitialized(id);
      }
      this.sector$.subscribe((sector) => {
        this.initForm(sector);
      });

    } else {
      this.initForm();
    }
  }

  sectorInitialized(id: string): void {
    this.sector$ = this.sectorService.detail(id);
  }

  initForm(sector?: Sector): void {
    this.formSector = this.formBuilder.group({
      name: [ sector ? sector.name : '', [Validators.required]],
      number: [ sector ? sector.number : '', [Validators.required]]
    });
  }

  onSubmit(): void {
    let sectorUpdate = { ...this.formSector.value } as Sector;
    this.sectorService
      .update(this.id, sectorUpdate)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
