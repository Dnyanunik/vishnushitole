import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  // Removed MatDialogModule and MatButtonModule since we don't need them here anymore
  imports: [CommonModule, MatIconModule, RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  isMenuOpen = false;
  isScrolled = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Triggers the thick water glass effect when you scroll down
    this.isScrolled = window.scrollY > 20;
  }
}
