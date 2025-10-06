import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup;
  form_mode: any = 'create'
  client_id:any
  clientTypes = [{
    "client_type_id": "73d00fa0-ee18-49d2-baa8-5d556fc04654",
    "name": "one",
    "is_active": true,
    "is_deleted": false
  }];
  jobManagersList = [
    {
      "user_profile_id": 102,
      "name": "custom",
      "is_active": true,
      "is_deleted": false,
      "billable_rate": "150.0000",
      "base_rate": "100.0000"
    },
    {
      "user_profile_id": 103,
      "name": "staff",
      "is_active": true,
      "is_deleted": false,
      "billable_rate": "150.0000",
      "base_rate": "120.0000"
    }
  ];
  showToast = false;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.form_mode = this.route.snapshot.paramMap.get('id') ? 'update' : 'create'
    this.client_id = this.route.snapshot.paramMap.get('id')
  }

  get f() {
    return this.clientForm.controls;
  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      is_same_as_postal_address: [true],
      address: ['', Validators.required],
      client_type_id: ['', Validators.required],
      job_manager_id: []
    });
    if (this.form_mode === 'update') {
      this.loadClient();
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU5ODE3NzkwLCJpYXQiOjE3NTk3MzEzOTAsImp0aSI6IjAyZDE3ZWZhMzM2OTQwYWY5OGM5NjBjYjEwMzU4OTI4IiwidXNlcl9pZCI6IjQ0IiwidXVpZCI6IjBlMDI1ZTRjLTE1YWQtNGZiNi05MDEwLTA2M2UxYjE5MmE5NCIsInVzZXJfcHJvZmlsZV9wayI6MTAyLCJvcmdhbml6YXRpb25faWQiOjY5LCJyb2xlX3R5cGVfaWQiOjF9.IgzoOH_fyVj-9nzxR7LP2EGtTVOMWtgmN8RWvZddmOU';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      let client: any = this.clientForm.value
      client.account_manager_id = null
      client.account_manager_id = null
      client.balance_month_id = null
      client.business_structure_id = null
      client.country_id = null
      client.p_country_id = null
      client.p_state_id = null
      client.state_id = null

      client.billing_address = {
        address: '',
        city: '',
        state_id: '',
        country_id: '',
        postal_code: ''
      }

      client.postal_address = {
        p_address: '',
        p_city: '',
        p_state_id: '',
        p_country_id: '',
        p_postal_code: ''
      }

      this.http.post<any>(
        'https://dev.workssheets.co/worksheet_api/interactions/client/', client,
        { headers }
      ).subscribe({
        next: (data) => {
          this.showToast = true
          console.log('Clients added:');
          setTimeout(() =>
            this.showToast = false
            , 300)
        },
        error: (err) => {
          console.error('Error loading clients:', err);
        }
      });
    } else {
      this.clientForm.markAllAsTouched(); // Show validation errors
    }
  }

  loadClient() {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU5ODE3NzkwLCJpYXQiOjE3NTk3MzEzOTAsImp0aSI6IjAyZDE3ZWZhMzM2OTQwYWY5OGM5NjBjYjEwMzU4OTI4IiwidXNlcl9pZCI6IjQ0IiwidXVpZCI6IjBlMDI1ZTRjLTE1YWQtNGZiNi05MDEwLTA2M2UxYjE5MmE5NCIsInVzZXJfcHJvZmlsZV9wayI6MTAyLCJvcmdhbml6YXRpb25faWQiOjY5LCJyb2xlX3R5cGVfaWQiOjF9.IgzoOH_fyVj-9nzxR7LP2EGtTVOMWtgmN8RWvZddmOU';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any>(
      'https://dev.workssheets.co/worksheet_api/interactions/client/' + `${this.client_id}` + '/',
      { headers }
    ).subscribe({
      next: (data) => {
        this.clientForm.patchValue({
          first_name: data.data.first_name,
          last_name: data.data.last_name,
          email:data.data.email,
          phone:data.data.phone,
          client_type_id:data.data.client_type_id,
          is_same_as_postal_address:data.data.is_same_as_postal_address,
          //address:data.data.billing_address.billing_address
        })
      },
      error: (err) => {
        console.error('Error loading clients:', err);
      }
    });
  }
}