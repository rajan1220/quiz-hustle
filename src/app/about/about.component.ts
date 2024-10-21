import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  teamMembers = [
    {
      name: 'Rajan Kumar',
      role: 'CEO & Founder',
      photoUrl: 'https://tse3.mm.bing.net/th?id=OIG1.irce.gPbNloDR7Xx5tmb&pid=ImgGn'
    },
    {
      name: 'Prashant Swami',
      role: 'Co-Founder & CTO',
      photoUrl: 'https://tse4.mm.bing.net/th?id=OIG1.94xt.8m55ol07KibdRNM&pid=ImgGn'
    },
    {
      name: 'Saksham Pradhan',
      role: 'Lead Developer',
      photoUrl: 'https://tse3.mm.bing.net/th?id=OIG4.A3cJM05HstiklGmY1fN5&pid=ImgGn'
    },
    {
      name: 'Aditi Sharma',
      role: 'UI/UX Designer',
      photoUrl: 'https://tse2.mm.bing.net/th?id=OIG1.q4_oO9ttw_ephQ0AS7Xq&pid=ImgGn'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
