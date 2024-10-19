import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-math-quiz',
  templateUrl: './math-quiz.component.html',
  styleUrls: ['./math-quiz.component.css']
})
export class MathQuizComponent implements OnInit {
  questions = [
    { text: 'Which of the following is a prime number?', options: ['517', '559', '571', '533'], correct: '571' },
    { text: 'Find the sum of first 90 even natural numbers.', options: ['8180', '8190', '8100', '8110'], correct: '8190' },
    { text: 'Find the sum two numbers, whose product is 200 and difference is minimum.', options: ['30', '27', '35', '33'], correct: '30' },
    { text: 'Find the ten’s digit in the expression 652 – 552?', options: ['2', '6', '5', '0'], correct: '0' },
    { text: 'A number when divided by 91 leaves a remainder 65. If the same number is divided by 13, find the remainder.', options: ['7', '0', '5', '12'], correct: '0' },
    { text: 'Find the highest power of a number 18 in 100!.', options: ['24', '18', '28', '12'], correct: '24' },
    { text: 'When 8255 is divided by 511, what is the remainder?', options: ['510', '10', '1', '500'], correct: '1' },
    { text: 'How many distinct prime factors are there in 9900?', options: ['7', '4', '27', '54'], correct: '4' },
    { text: 'Find the value of 5358*54.', options: ['283932', '298332', '289322', '289332'], correct: '289332' },
    { text: 'What is the square root of 2025?', options: ['35', '40', '45', '50'], correct: '45' },
    { text: 'Find the value of 657 * 98.', options: ['64416', '64356', '64446', '64536'], correct: '64386' },
    { text: 'A number when divided by 23 leaves a remainder 17. What is the remainder when the same number is divided by 11?', options: ['6', '7', '9', '5'], correct: '6' },
    { text: 'Find the sum of the first 100 odd natural numbers.', options: ['10000', '10100', '10200', '10001'], correct: '10000' },
    { text: 'Which of the following numbers is divisible by 3?', options: ['12345', '12347', '12343', '12346'], correct:  '12345'},
    { text: 'Find the cube root of 15625.', options: ['25', '35', '50', '65'], correct: '25' },
    { text: 'What is the HCF of 64 and 48?', options: ['16', '12', '8', '4'], correct: '16' },
    { text: 'What is 14 + 2?', options: ['15', '16', '17', '18'], correct: '16' },
    { text: 'What is 20 / 4?', options: ['5', '4', '6', '3'], correct: '5' },
    { text: 'What is 30 - 15?', options: ['15', '16', '14', '13'], correct: '15' },
    { text: 'What is 10 + 10?', options: ['20', '25', '30', '35'], correct: '20' },
    { text: 'What is 4 * 5?', options: ['20', '22', '18', '16'], correct: '20' },
    { text: 'What is 50 - 25?', options: ['25', '30', '20', '15'], correct: '25' },
    { text: 'What is 8 * 7?', options: ['56', '54', '52', '50'], correct: '56' },
    { text: 'What is 90 / 9?', options: ['9', '10', '11', '12'], correct: '10' },
    { text: 'What is 6 + 7?', options: ['13', '14', '15', '16'], correct: '13' },
    { text: 'What is 1 + 1?', options: ['1', '2', '3', '4'], correct: '2' },
    { text: 'What is 5 - 1?', options: ['3', '4', '5', '6'], correct: '4' },
    { text: 'What is 11 - 3?', options: ['7', '6', '8', '9'], correct: '8' },
    { text: 'What is 20 + 30?', options: ['50', '40', '60', '70'], correct: '50' },
    { text: 'What is 36 / 6?', options: ['6', '7', '8', '9'], correct: '6' },
    
  ];

  userAnswers: string[] = [];
  currentQuestionIndex = 0;
  quizSubmitted = false;
  score = 0;
  minutes = 30;  
  seconds = 0;
  timer: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startTimer();
  }

  selectAnswer(questionIndex: number, option: string) {
    this.userAnswers[questionIndex] = option;  
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitQuiz() {
    this.quizSubmitted = true;
    this.calculateScore();
    clearInterval(this.timer);   
  }

  calculateScore() {
    this.score = this.questions.filter((q, i) => q.correct === this.userAnswers[i]).length;
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.submitQuiz(); 
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  retakeQuiz() {
    this.quizSubmitted = false;
    this.userAnswers = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.minutes = 30;  
    this.seconds = 0;
    this.startTimer();
  }
}
