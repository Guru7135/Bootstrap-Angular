import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  selectedMenu: any = 'interactions'

  constructor(private router: Router){

  }

  menus = [
    { key: 'dashboard', label: 'Dashboard', icon: 'bi bi-grid-1x2-fill' },
    { key: 'interactions', label: 'Interactions', icon: 'bi bi-person-lines-fill' },
    { key: 'collaboration', label: 'Collaboration', icon: 'bi bi-envelope-open-fill' },
    { key: 'business', label: 'Business', icon: 'bi bi-suitcase-lg-fill' },
    { key: 'organizer', label: 'Organizer', icon: 'bi bi-calendar-week-fill' },
    { key: 'reports', label: 'Reports', icon: 'bi bi-file-earmark-fill' }
  ];

  ngOnInit(): void {
      this.onMenuClick('interactions')
  }

  onMenuClick(menuKey: string) {
    this.selectedMenu = menuKey;
    this.router.navigate(['/', menuKey]);
  }

}
