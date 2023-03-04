import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Data Binding
  slogan:string = 'Your one stop shop for everything.';

  // Property Binding
  source:string = "/assets/shopping_bags.jpg";

}
