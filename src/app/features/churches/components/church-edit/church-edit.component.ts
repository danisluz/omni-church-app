import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { ChurchesService } from '../../church.service';
import { Church } from '../church.model';

@Component({
  selector: 'app-church-edit',
  templateUrl: './church-edit.component.html',
})
export class ChurchEditComponent implements OnInit {
  form: FormGroup;
  church$: Observable<Church>;
  id: string;
  @Input() editMode: boolean;

  constructor(
    private churchService: ChurchesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.editMode) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.id = id;
        this.churchInitialize(id);
      }
      this.church$.subscribe((church) => {
        this.initForm(church);
      });
    } else {
      this.initForm();
    }
  }

  churchInitialize(id: string): void {
    this.church$ = this.churchService.detail(id);
  }

  initForm(church?: Church): void {
    this.form = this.formBuilder.group({
      name: [
        church ? church.name : '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      email: [
        church ? church.email : '',
        [
          Validators.required,
          Validators.email
        ],
      ],
      cnpj: [
        church ? church.cnpj : '',
        [
          Validators.required
        ]
      ],
      phone: [
        church ? church.phone : '',
        [
          Validators.required
        ]
      ],
      address: this.formBuilder.group({
        street: [church?.address ? church.address.street : ''],
        number: [church?.address ? church.address.number : ''],
        apartment: [church?.address ? church.address.apartment : ''],
        zip_code: [church?.address ? church.address.zip_code : ''],
        district: [church?.address ? church.address.district : ''],
        city: [church?.address ? church.address.city : ''],
        state: [church?.address ? church.address.state : ''],
      }),
    });
  }

  onSubmit(): void {
    let churchUpdate = { ...this.form.value } as Church;
    this.churchService
      .update(this.id, churchUpdate).subscribe(() =>
        this.goBack());
  }

  onCreate(): void {
    let churchCreate = { ...this.form.value } as Church;
    this.churchService
      .create(churchCreate).subscribe( () =>
      this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
