import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public isClubNavbarVisible: boolean;
  public currentUrl: string;

  constructor(private router: Router) {
    this.isClubNavbarVisible = false;
    this.currentUrl = '';
  }

  navigateToHome() {
    this.router.navigate([''])
  }

  navigateToElClubSobreNosotros() {
    this.router.navigate(['/el-club/sobre-nosotros'])
  }

  navigateToElClubHazteSocio() {
    this.router.navigate(['/el-club/hazte-socio'])
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isClubNavbarVisible = this.router.url.startsWith('/el-club');
      this.currentUrl = this.router.url;
    });
  }

  isActive(path: string): boolean {
    return this.currentUrl.startsWith(path);
  }
}
