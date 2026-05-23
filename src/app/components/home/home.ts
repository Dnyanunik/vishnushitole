import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
  // ❌ ViewEncapsulation.None has been deleted!
})
export class HomeComponent implements OnInit {
  phoneNumber1 = '+919552263633';
  email = 'vishnushitole978@gmail.com';

  // --- MODAL TRACKING ENGINE ---
  isMainModalOpen: boolean = false; 
  activeCarIndex: number | null = null; 
  selectedVehicle: string = '';

  // --- FORM FIELDS ---
  guestName: string = '';
  guestPhone: string = '';
  fromCity: string = '';
  toCity: string = '';
  pickupDate: string = '';
  pickupTime: string = '';

  cars = [
    { name: 'Maruti Suzuki Ertiga', desc: 'For Outstation / Local / Corporate / Airport Pick & Drop', image: 'image/eritiga.jpg' },
    { name: 'Swift Dzire', desc: 'For Outstation / Local / Corporate / Airport Pick & Drop', image: 'image/swiftold.jpg' },
    { name: 'Swift Dzire New Look', desc: 'For Outstation / Local / Corporate / Airport Pick & Drop', image: 'image/swiftnew.jpg' }
  ];

  ngOnInit(): void {}

  makeCall() {
    window.location.href = `tel:${this.phoneNumber1}`;
  }

  openMainModal() {
    this.closeModals();
    this.selectedVehicle = '';
    this.isMainModalOpen = true;

    setTimeout(() => {
      const modalElement = document.querySelector('.global-modal-blur');
      if (modalElement) {
        modalElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  }

  openCarModal(carName: string, index: number) {
    this.closeModals();
    this.selectedVehicle = carName;
    this.activeCarIndex = index; 

    setTimeout(() => {
      const modalElement = document.querySelector('.global-modal-blur');
      if (modalElement) {
        modalElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  }

  closeModals() {
    this.isMainModalOpen = false;
    this.activeCarIndex = null;
    
    this.guestName = '';
    this.guestPhone = '';
    this.fromCity = '';
    this.toCity = '';
    this.pickupDate = '';
    this.pickupTime = '';
  }

  submitBooking() {
    const formattedNumber = this.phoneNumber1.replace('+', '');
    const text = `*New Travel Booking (Vishnu Tours)* 🚗\n\n*Vehicle:* ${this.selectedVehicle || 'General Fleet'}\n*Passenger:* ${this.guestName}\n*Phone:* ${this.guestPhone}\n*Journey Route:* ${this.fromCity} ➔ ${this.toCity}\n*Schedule:* ${this.pickupDate} at ${this.pickupTime}`;

    window.open(`https://api.whatsapp.com/send?phone=${formattedNumber}&text=${encodeURIComponent(text)}`, '_blank');
    this.closeModals();
  }
}