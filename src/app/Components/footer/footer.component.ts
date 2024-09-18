import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    })
  }

  navigateToClubSobreNosotros(){
    this.router.navigate(['/el-club/sobre-nosotros'])
  }

  navigateToHazteSocio(){
    this.router.navigate(['/el-club/hazte-socio'])
  }

}
