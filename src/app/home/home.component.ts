import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  quizzes = [
    { title: 'Aptitude', description: 'Test your math skills.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1y0ytzAdrFQ0zmghvpa43hkgGWcFhh1iDMw&s' },
    { title: 'English Grammar', description: 'Test your grammar knowledge.', imageUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182220/English-Grammar.png' },
    { title: 'Data Structure', description: 'Learn about data structures.', imageUrl: 'https://media.licdn.com/dms/image/D5612AQFI9wRTdTCs4w/article-cover_image-shrink_720_1280/0/1716619037003?e=2147483647&v=beta&t=WJWKwRYiYsede5hpnhWf67qzLPTqOAOc7NC7COyUE_o'},
    { title: 'Software Engineering', description: 'Explore the world.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOuathahcCkMsPvN_sGHsEvcLWEQlhnBE4w&s' },
    { title: 'Front end Framework', description: 'How much do you know?', imageUrl: 'https://d2o2utebsixu4k.cloudfront.net/media/images/blogs/share_image/222b5354-d4c3-4e24-bafe-d2c6fdc368ee.jpg' },
    { title: 'Ionic', description: 'How much do you know?', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh-RtyDmW7ywVlyLLoAhy4ottmu0e_dYJlA&s' }
  ];
}
