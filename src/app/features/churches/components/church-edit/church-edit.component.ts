import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChurchesService } from '../../church.service';
import { Church } from '../church.model';

@Component({
  selector: 'app-church-edit',
  templateUrl: './church-edit.component.html'
})
export class ChurchEditComponent implements OnInit {
  form: FormGroup;
  church$: Observable<Church>;
  id: string;
  @Input() editMode: boolean

  constructor(private churcheService: ChurchesService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.editMode) {
      const id = this.route.snapshot.paramMap.get('id');
        if (id) {
        this.id = id;
      }
      //this.churchInitialize();
    }
    

    this.church$.subscribe(church => {
      this.form = this.formBuilder.group({
        name: [church.name, Validators.required],
      })
    })
  }

  churchInitialize(): void {
    this.church$ = this.churcheService.detail(this.id)
  }
}
