import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitude-quiz',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss'],
})
export class IonicComponent implements OnInit {
  questions = [
   
    {
      text: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
      correctAnswer: 'William Shakespeare'
    },
    {
      text: 'What is the boiling point of water?',
      options: ['90°C', '100°C', '110°C', '120°C'],
      correctAnswer: '100°C'
    },
    {
      text: 'What is the capital of Japan?',
      options: ['Seoul', 'Tokyo', 'Beijing', 'Bangkok'],
      correctAnswer: 'Tokyo'
    },
    {
      text: 'What is the square root of 64?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8'
    },
    {
      text: 'Which gas is known as laughing gas?',
      options: ['Nitrous oxide', 'Carbon dioxide', 'Oxygen', 'Hydrogen'],
      correctAnswer: 'Nitrous oxide'
    },
    {
      text: 'How many continents are there?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '7'
    },
    {
      text: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
      correctAnswer: 'Blue Whale'
    },
    {
      text: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Pb'],
      correctAnswer: 'Au'
    },
    {
      text: 'Which element has the atomic number 1?',
      options: ['Helium', 'Hydrogen', 'Lithium', 'Oxygen'],
      correctAnswer: 'Hydrogen'
    },
    {
      text: 'What is the primary language spoken in Brazil?',
      options: ['Spanish', 'Portuguese', 'English', 'French'],
      correctAnswer: 'Portuguese'
    },
    {
      text: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      text: 'Which organ is responsible for pumping blood throughout the body?',
      options: ['Liver', 'Lungs', 'Heart', 'Kidneys'],
      correctAnswer: 'Heart'
    },
    {
      text: 'What is the speed of light?',
      options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
      correctAnswer: '300,000 km/s'
    },
    {
      text: 'Which planet is known for its rings?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Saturn'
    },
    {
      text: 'In which year did the Titanic sink?',
      options: ['1912', '1915', '1920', '1925'],
      correctAnswer: '1912'
    },
    {
      text: 'What is the longest river in the world?',
      options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
      correctAnswer: 'Nile'
    },
    {
      text: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      correctAnswer: 'Canberra'
    },
    {
      text: 'Which is the smallest continent?',
      options: ['Africa', 'Antarctica', 'Australia', 'Europe'],
      correctAnswer: 'Australia'
    },
    {
      text: 'What is the currency of Japan?',
      options: ['Yen', 'Won', 'Dollar', 'Euro'],
      correctAnswer: 'Yen'
    },
    {
      text: 'Which animal is known as the King of the Jungle?',
      options: ['Elephant', 'Lion', 'Tiger', 'Giraffe'],
      correctAnswer: 'Lion'
    },
    {
      text: 'What is the freezing point of water?',
      options: ['0°C', '-10°C', '32°F', '100°F'],
      correctAnswer: '0°C'
    },
    {
      text: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
      correctAnswer: 'Diamond'
    },
    {
      text: 'What is the main ingredient in guacamole?',
      options: ['Tomato', 'Pepper', 'Avocado', 'Onion'],
      correctAnswer: 'Avocado'
    },
    {
      text: 'Who invented the telephone?',
      options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Albert Einstein'],
      correctAnswer: 'Alexander Graham Bell'
    },
    {
      text: 'What is the chemical formula for water?',
      options: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctAnswer: 'H2O'
    },
    {
      text: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'South Korea', 'Thailand'],
      correctAnswer: 'Japan'
    },
    {
      text: 'What is the main language spoken in Canada?',
      options: ['French', 'English', 'Spanish', 'German'],
      correctAnswer: 'English'
    },
    {
      text: 'What is the largest desert in the world?',
      options: ['Sahara', 'Gobi', 'Kalahari', 'Arabian'],
      correctAnswer: 'Sahara'
    },
    {
      text: 'Which gas do plants absorb from the atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide'
    },
    {
      text: 'What is the primary ingredient in bread?',
      options: ['Flour', 'Sugar', 'Salt', 'Water'],
      correctAnswer: 'Flour'
    }
  ];

  currentQuestionIndex: number = 0;
  userAnswers: string[] = [];
  score: number = 0;
  quizSubmitted: boolean = false;
  minutes: number = 30; // Set timer values
  seconds: number = 0;

  ngOnInit() {
    // Start timer or any other initialization logic
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.submitQuiz(); // Automatically submit the quiz when time is up
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  selectAnswer(index: number, answer: string) {
    this.userAnswers[index] = answer;
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
    this.score = this.userAnswers.reduce((score, answer, index) => {
      return score + (answer === this.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  }

  retakeQuiz() {
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.score = 0;
    this.quizSubmitted = false;
    this.minutes = 30; // Reset timer
    this.seconds = 0;
    this.startTimer(); // Restart timer
  }
}
