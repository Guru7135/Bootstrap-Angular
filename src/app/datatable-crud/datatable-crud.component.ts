import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';

interface Person { id: number; name: string; email: string; phone: string; }

@Component({
  selector: 'app-datatable-crud',
  templateUrl: './datatable-crud.component.html',
  styleUrl: './datatable-crud.component.scss'
})
export class DatatableCrudComponent implements OnInit {
  rows: any[] = [];
  temp: any[] = [];
  selected: any[] = [];
  form: FormGroup;
  SelectionType = SelectionType;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({ name: ['', Validators.required], email: ['', [Validators.required, Validators.email]], phone: [''] });
  }

  ngOnInit(): void {
    // seed data
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU5ODE3NzkwLCJpYXQiOjE3NTk3MzEzOTAsImp0aSI6IjAyZDE3ZWZhMzM2OTQwYWY5OGM5NjBjYjEwMzU4OTI4IiwidXNlcl9pZCI6IjQ0IiwidXVpZCI6IjBlMDI1ZTRjLTE1YWQtNGZiNi05MDEwLTA2M2UxYjE5MmE5NCIsInVzZXJfcHJvZmlsZV9wayI6MTAyLCJvcmdhbml6YXRpb25faWQiOjY5LCJyb2xlX3R5cGVfaWQiOjF9.IgzoOH_fyVj-9nzxR7LP2EGtTVOMWtgmN8RWvZddmOU';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.http.get<any>(
      'https://dev.workssheets.co/worksheet_api/interactions/client/?is_active=1&page=1&limit=20&business_structure_id=&client_type_id=&account_manager_id=&job_manager_id=',
      { headers }
    ).subscribe({
      next: (data) => {
        this.rows = data.data;
        this.temp = data.data;
        console.log('Clients loaded:', data);
      },
      error: (err) => {
        console.error('Error loading clients:', err);
      }
    });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    const filtered = this.temp.filter(row => {
      return (
        (row.first_name && row.first_name.toLowerCase().includes(val)) ||
        (row.last_name && row.last_name.toLowerCase().includes(val)) ||
        (row.phone && row.phone.toLowerCase().includes(val)) ||
        (row.email && row.email.toLowerCase().includes(val))
      );
    });

    this.rows = filtered;
  }

  onSelect({ selected }: any) {
    this.selected = [...selected];
    console.log('Selected rows:', this.selected);
  }
}
