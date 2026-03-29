import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- ADDED THIS FOR FORMS
import { ThemeService } from '../../theme';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon], // <-- ADDED FormsModule AND MatIcon HERE
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  themeService = inject(ThemeService);

  // --- CONTACT DETAILS ---
  phoneNumber1 = '+917499500168';
  phoneNumber2 = '+917499500168';
  email = 'Jijamatacontractor@gmail.com';

  // --- MODAL STATE & FORM DATA ---
  isModalOpen: boolean = false;
  selectedVehicle: string = 'Select Vehicle';

  // <-- ADDED THESE VARIABLES TO CAPTURE USER INPUT -->
  guestName: string = '';
  guestPhone: string = '';
  fromCity: string = '';
  toCity: string = '';
  pickupDate: string = '';
  pickupTime: string = '';

  // --- FLEET DATA ---
  cars = [
    {
      name: 'Maruti Suzuki Ertiga',
      type: 'Royal SUV (6+1 Seater)',
      image: 'image/eritiga.jpg',
      rate: 14,
      desc: 'For Outstation / Pune Local / Corporate / Airport Pick & Drop',
      minPkg: '300 km'
    },
    {
      name: 'Swift Dzire',
      type: 'Premium Sedan (4 Seater)',
      image: 'image/swiftold.jpg',
      rate: 12,
      desc: 'For Outstation / Pune Local / Corporate / Airport Pick & Drop',
      minPkg: '300 km'
    },
    {
      name: 'Swift Dzire New Look',
      type: 'Comfort Class (4 Seater)',
      image: 'image/swiftnew.jpg',
      rate: 12,
      desc: 'For Outstation / Pune Local / Corporate / Airport Pick & Drop',
      minPkg: '300 km'
    }
  ];

  // --- ROUND TRIP PACKAGES ---
  popularRoutes = [
    { dest: 'Pune ⇄ Bhimashankar', km: '300', price4: 3599, price6: 4500 },
    { dest: 'Pune ⇄ Lonavala', km: '300', price4: 3599, price6: 4500 },
    { dest: 'Pune ⇄ Mahabaleshwar', km: '300', price4: 3599, price6: 4500 },
    { dest: 'Pune ⇄ Matheran', km: '300', price4: 3999, price6: 4599 },
    { dest: 'Pune ⇄ Alibag', km: '300', price4: 5999, price6: 6599 },
    { dest: 'Pune ⇄ Diveagar', km: '300', price4: 5999, price6: 6599 },
    { dest: 'Pune ⇄ Tarkarli', km: '300', price4: 10999, price6: 12599 },
    { dest: 'Pune ⇄ Goa', km: '1000', price4: 14999, price6: 16999 },
  ];

  // --- ACTIONS ---
  makeCall() {
    window.location.href = `tel:${this.phoneNumber1}`;
  }

  sendEmail() {
    window.location.href = `mailto:${this.email}`;
  }
openModal(itemName: string = 'Select Vehicle') {
    // 1. FIRST: Handle the Body Overflow
    // This stops the background from moving and ensures the modal
    // is not trapped by "overflow-x: hidden" glitches
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    }

    // 2. DATA LOGIC
    this.selectedVehicle = itemName;

    if (itemName.includes('⇄')) {
      const routeString = itemName.replace(' Package', '');
      const cities = routeString.split(' ⇄ ');

      if (cities.length === 2) {
        this.fromCity = cities[0].trim();
        this.toCity = cities[1].trim();
      }
    } else {
      this.fromCity = '';
      this.toCity = '';
    }

    // 3. UI STATE
    this.isModalOpen = true;

    // 4. ALIGNMENT
    window.scrollTo({ top: 0, behavior: 'instant' });
}

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto'; // Restore scrolling

    // Clear the form when closed so it's empty next time
    this.guestName = '';
    this.guestPhone = '';
    this.fromCity = '';
    this.toCity = '';
    this.pickupDate = '';
    this.pickupTime = '';
  }

  // Add this so the Navbar button works too!
openBookingDialog() {
  this.openModal('General Enquiry');
}

  submitBooking() {
    // Format number for WhatsApp
    const formattedNumber = this.phoneNumber1.replace('+', '');

    // <-- UPDATED THIS TO INCLUDE ALL FORM DETAILS -->
    const text = `*New Booking Enquiry* 🚗
*Vehicle/Package:* ${this.selectedVehicle}
*Name:* ${this.guestName}
*Phone:* ${this.guestPhone}
*From City:* ${this.fromCity}
*To City:* ${this.toCity}
*Pickup Date:* ${this.pickupDate}
*Pickup Time:* ${this.pickupTime}`;

    // Open WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${formattedNumber}&text=${encodeURIComponent(text)}`, '_blank');

    // Close Modal
    this.closeModal();
  }
}
