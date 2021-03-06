import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChurchesService } from '../../church.service';
import { Church } from '../church.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-church-read',
  templateUrl: './church-detail.component.html',
})
export class ChurchDetailComponent implements OnInit {
  church$: Observable<Church>;
  id: string;

  constructor(
    private churchService: ChurchesService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
    this.churchInitialize();
  }

  churchInitialize(): void {
    this.church$ = this.churchService.detail(this.id)
    this.churchService.detail(this.id).subscribe(church => console.log(church))
  }

  onDelete(): void {
    this.churchService.delete(this.id).subscribe(message => {
      console.log(message);
      this.goBack();
    })
  }

  goBack(): void {
    this.location.back();
  }

}
