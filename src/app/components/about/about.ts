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
  // Stats pulled directly from your ECRS screenshot
  corporateStats: CompanyStat[] = [
    { value: '180+', label: 'Cities Across India' },
    { value: '200+', label: 'Corporate Clients' },
    { value: '40,000+', label: 'Sq. Ft Parking Area' },
    { value: '24 / 7', label: 'Operational' },
    { value: '13+', label: 'Years in Travel Industry' }
  ];

 features = [
  {
    icon: 'airport_shuttle',
    glow: 'cyan-glow',
    title: 'Airport Transfers',
    desc: 'Reliable airport pickup & drop services with on-time guarantee and professional meet & greet support.'
  },
  {
    icon: 'directions_car',
    glow: 'rose-glow',
    title: 'Corporate Car Rental',
    desc: 'Premium executive vehicles for business travel with trained chauffeurs and seamless booking experience.'
  },
  {
    icon: 'event',
    glow: 'gold-glow',
    title: 'Event Transportation',
    desc: 'Efficient transport solutions for corporate events, conferences, and large-scale workforce movement.'
  },
  {
    icon: 'map',
    glow: 'green-glow',
    title: 'Outstation & Local Trips',
    desc: 'Flexible hourly, daily, and outstation rental services designed for comfort and convenience.'
  },
  {
    icon: 'support_agent',
    glow: 'orange-glow',
    title: '24/7 Customer Support',
    desc: 'Round-the-clock assistance for bookings, tracking, and emergency support anytime, anywhere.'
  }
];
}
