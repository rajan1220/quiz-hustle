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
      photoUrl: 'https://files.oaiusercontent.com/file-FOer5aqQUi9ZENESNZgsB3Hv?se=2024-10-17T06%3A21%3A47Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D32789afd-8601-43ef-bdf1-b054e2770f2b.webp&sig=9htIQJPUMUBRGt%2B9qK6NaxPXvdK%2BNqgPcxraRRqlWEI%3D'
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
