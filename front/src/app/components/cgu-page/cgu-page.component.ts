import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cgu-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatCardModule,
  ],
  templateUrl: './cgu-page.component.html',
  styleUrl: './cgu-page.component.css'
})
export class CguPageComponent {

}
