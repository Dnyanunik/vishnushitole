import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
