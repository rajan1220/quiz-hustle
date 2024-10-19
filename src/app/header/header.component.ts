import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
ImagePath: string;
constructor() {
  this.ImagePath = '../../assets/images/logo.png';
 }
  ngOnInit(): void {
   
  }
}
