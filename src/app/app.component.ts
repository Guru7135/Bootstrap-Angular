import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngx-dt-crud';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Save the last route in localStorage
        localStorage.setItem('lastRoute', event.urlAfterRedirects);
      }
    });
  }

  ngOnInit() {
    const currentUrl = this.router.url;
    const lastRoute = localStorage.getItem('lastRoute');

    // If landing on root, redirect to last route
    if (currentUrl === '/' && lastRoute) {
      this.router.navigateByUrl(lastRoute);
    }
  }
}
