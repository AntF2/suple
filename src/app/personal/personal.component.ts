import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personal: any[] = [];
  personalForm: FormGroup;
  editMode = false;
  currentPersonalId: string | null = null;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.personalForm = this.fb.group({
      id: [''],
      name: [''],
      surname: [''],
      address: ['']
    });
  }

  ngOnInit() {
    this.loadPersonal();
  }

  loadPersonal() {
    this.apiService.getPersonal().subscribe(data => {
      this.personal = data;
    });
  }

  editPersonal(id: string) {
    this.apiService.getPersonalById(id).subscribe(personal => {
      this.personalForm.patchValue(personal);
      this.editMode = true;
      this.currentPersonalId = id;
    });
  }

  savePersonal() {
    const personalData = this.personalForm.value;
    if (this.editMode && this.currentPersonalId) {
      this.apiService.updatePersonal({ ...personalData, id: this.currentPersonalId }).subscribe(() => {
        this.loadPersonal();
        this.resetForm();
      });
    } else {
      this.apiService.createPersonal(personalData).subscribe(() => {
        this.loadPersonal();
        this.resetForm();
      });
    }
  }

  deletePersonal(id: string) {
    this.apiService.deletePersonal(id).subscribe(() => {
      this.loadPersonal();
    });
  }

  resetForm() {
    this.personalForm.reset();
    this.editMode = false;
    this.currentPersonalId = null;
  }
}
