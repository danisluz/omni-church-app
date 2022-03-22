import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChurchesService } from '../../church.service';
import { Church } from '../church.model';

@Component({
  selector: 'app-church-read',
  templateUrl: './church-detail.component.html',
})
export class ChurchDetailComponent implements OnInit {
  church$: Observable<Church>;
  id: string;

  constructor(private churcheService: ChurchesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
    this.churchInitialize();
  }

  churchInitialize(): void {
    this.church$ = this.churcheService.detail(this.id)
  }

}
