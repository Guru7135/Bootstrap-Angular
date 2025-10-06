import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  activeTab: 'clients' | 'contacts' = 'clients';

  constructor(
    private router: Router
  ){
    this.activeTab = 'clients'
  }

  ngOnInit() {
    const url = this.router.url;
    if (url.includes('/interactions/contacts')) {
      this.activeTab = 'contacts';
    } else {
      this.activeTab = 'clients';
    }
  }

  setActiveTab(tab: 'clients' | 'contacts') {
    this.activeTab = tab;
  }
}
