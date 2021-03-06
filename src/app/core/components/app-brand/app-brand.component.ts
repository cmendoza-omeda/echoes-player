import { AppApi } from '../../api/app.api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  styleUrls: ['./app-brand.scss'],
  template: `
  <div class="brand-container bg-primary"
    (click)="toggleSidebar()">
    <section class="brand-text">
      <h3 class="text brand-text-item">REACTC</h3>
      <h3 class="brand-icon brand-text-item fa fa-headphones"></h3>
      <h3 class="text brand-text-item">ST</h3>
    </section>
    <button class="btn btn-transparent sidebar-toggle">
      <i class="fa fa-bars fa-2x"></i>
    </button>
  </div>
  `
})
export class AppBrandComponent implements OnInit {
  constructor(private appApi: AppApi) { }
  ngOnInit() { }

  toggleSidebar() {
    return this.appApi.toggleSidebar();
  }
}
