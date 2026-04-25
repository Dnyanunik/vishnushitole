import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface CompanyStat {
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  // Stats updated to reflect an independent travel and rental agency
  corporateStats: CompanyStat[] = [
    { value: '50+', label: 'Premium Vehicles' },
    { value: '5000+', label: 'Happy Customers' },
    { value: '10+', label: 'Years Experience' },
    { value: '24 / 7', label: 'Service Available' },
    { value: '100%', label: 'Safe & Secure' }
  ];

  features = [
    {
      icon: 'airport_shuttle',
      glow: 'cyan-glow',
      title: 'Airport Transfers',
      desc: 'Reliable airport pickup & drop services with an on-time guarantee and professional drivers.'
    },
    {
      icon: 'directions_car',
      glow: 'rose-glow',
      title: 'Car Rental Services',
      desc: 'Well-maintained vehicles available for local city rides, business meetings, and personal travel needs.'
    },
    {
      icon: 'map',
      glow: 'gold-glow',
      title: 'Outstation Trips',
      desc: 'Comfortable and safe outstation cabs for family vacations, weekend getaways, and regional tours.'
    },
    {
      icon: 'groups',
      glow: 'green-glow',
      title: 'Group Travel',
      desc: 'Spacious SUVs and larger vehicles for group tours, family functions, and special events.'
    },
    {
      icon: 'support_agent',
      glow: 'orange-glow',
      title: '24/7 Customer Support',
      desc: 'Round-the-clock assistance for bookings, trip tracking, and support anytime, anywhere.'
    }
  ];
}
