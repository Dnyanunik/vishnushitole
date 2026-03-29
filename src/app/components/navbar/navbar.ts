import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme';
import { EnquiryDialog } from '../enquiry-dialog/enquiry-dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  themeService = inject(ThemeService);
  isMenuOpen = false;
  isScrolled = false;

  constructor(private dialog: MatDialog) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  openBookingDialog() {
    const dialogRef = this.dialog.open(EnquiryDialog, {
      width: '500px',
      maxWidth: '95vw',
      data: { service: 'Executive Ride' },
      panelClass: 'corporate-dialog-theme'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sendToWhatsApp(result);
      }
    });
  }

  sendToWhatsApp(data: any) {
    const message =
      `*NEW JIJAMATA EXECUTIVE RIDE BOOKING*%0A` +
      `--------------------------%0A` +
      `👤 *Name:* ${data.name}%0A` +
      `📞 *Phone:* ${data.phone}%0A` +
      `🚗 *Car:* ${data.car}%0A` +
      `📍 *From:* ${data.source}%0A` +
      `🏁 *To:* ${data.destination}%0A` +
      `💰 *Fare:* ${data.price}%0A` +
      `📏 *Limit:* ${data.extraKm}%0A` +
      `--------------------------%0A` +
      `💬 *Note:* ${data.message || 'Standard Request'}`;

    window.open(`https://wa.me/7499500168?text=${message}`, '_blank');
  }
}
