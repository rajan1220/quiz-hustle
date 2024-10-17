import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
  questions = [
      {
          text: 'Which of the following is a correct sentence?',
          options: ['He go to school.', 'He goes to school.', 'He gone to school.', 'He going to school.'],
          correct: 'He goes to school.'
      },
      {
          text: 'Identify the adverb in this sentence: "She quickly ran to the store."',
          options: ['She', 'quickly', 'ran', 'store'],
          correct: 'quickly'
      },
      {
          text: 'Choose the correct past tense of the verb "to go".',
          options: ['Goed', 'Gone', 'Went', 'Going'],
          correct: 'Went'
      },
      {
          text: 'Which of these sentences is grammatically correct?',
          options: ['Neither of the answers are correct.', 'Neither of the answers is correct.', 'Neither of the answers not correct.', 'Neither of answers are correct.'],
          correct: 'Neither of the answers is correct.'
      },
      {
          text: 'What is the plural of "child"?',
          options: ['Childs', 'Childes', 'Children', 'Childern'],
          correct: 'Children'
      },
      {
          text: 'Choose the correct form: "He has ___ apples than I do."',
          options: ['less', 'fewer', 'fewest', 'least'],
          correct: 'fewer'
      },
      {
          text: 'Identify the conjunction in this sentence: "I wanted to go, but I was too tired."',
          options: ['I', 'to', 'go', 'but'],
          correct: 'but'
      },
      {
          text: 'Which of these sentences uses correct punctuation?',
          options: ['Its raining outside', 'It’s raining outside.', 'Its raining, outside.', 'It raining outside.'],
          correct: 'It’s raining outside.'
      },
      {
          text: 'What is the superlative form of "happy"?',
          options: ['Happiest', 'More happy', 'Most happy', 'Happyest'],
          correct: 'Happiest'
      },
      {
          text: 'Choose the correct preposition: "She is good ___ math."',
          options: ['on', 'in', 'at', 'for'],
          correct: 'at'
      },
      {
          text: 'Which of the following sentences is correct?',
          options: ['Everyone have a car.', 'Everyone has a car.', 'Everyone is having a car.', 'Everyone having a car.'],
          correct: 'Everyone has a car.'
      },
      {
          text: 'Identify the subject in the sentence: "The cat chased the mouse."',
          options: ['cat', 'chased', 'mouse', 'the'],
          correct: 'cat'
      },
      {
          text: 'Choose the correct form: "Neither the teacher nor the students ___ present."',
          options: ['was', 'were', 'is', 'are'],
          correct: 'were'
      },
      {
          text: 'What is the correct plural of "ox"?',
          options: ['Oxen', 'Oxes', 'Oxes', 'Oxen'],
          correct: 'Oxen'
      },
      {
          text: 'Which sentence uses the correct verb tense?',
          options: ['She seen the movie yesterday.', 'She saw the movie yesterday.', 'She sees the movie yesterday.', 'She see the movie yesterday.'],
          correct: 'She saw the movie yesterday.'
      },
      {
          text: 'What is the possessive form of "child"?',
          options: ['Child', "Child's", "Childs'", 'Childs'],
          correct: "Child's"
      },
      {
          text: 'Which word is an antonym for "difficult"?',
          options: ['Easy', 'Hard', 'Tough', 'Complicated'],
          correct: 'Easy'
      },
      {
          text: 'Choose the correct article: "___ apple a day keeps the doctor away."',
          options: ['A', 'An', 'The', 'Some'],
          correct: 'An'
      },
      {
          text: 'Which of the following sentences is correct?',
          options: ['She don’t like apples.', 'She doesn’t likes apples.', 'She doesn’t like apples.', 'She not like apples.'],
          correct: 'She doesn’t like apples.'
      },
      {
          text: 'Identify the verb in the sentence: "The dog barks loudly."',
          options: ['dog', 'barks', 'loudly', 'the'],
          correct: 'barks'
      },
      {
          text: 'What is the past tense of "to eat"?',
          options: ['Eaten', 'Ate', 'Eats', 'Eating'],
          correct: 'Ate'
      },
      {
          text: 'Choose the correct form: "If I ___ you, I would apologize."',
          options: ['was', 'were', 'am', 'is'],
          correct: 'were'
      },
      {
          text: 'Which sentence is correct?',
          options: ['She plays the piano beautifully.', 'She play the piano beautifully.', 'She playing the piano beautifully.', 'She played the piano beautifully.'],
          correct: 'She plays the piano beautifully.'
      },
      {
          text: 'What is the comparative form of "big"?',
          options: ['Biggest', 'Bigger', 'More big', 'Biggerest'],
          correct: 'Bigger'
      },
      {
          text: 'Identify the object in the sentence: "He kicked the ball."',
          options: ['He', 'kicked', 'the', 'ball'],
          correct: 'ball'
      },
      {
          text: 'Which of the following sentences is correct?',
          options: ['Who did you give the book to?', 'To whom did you give the book?', 'Whom did you give the book to?', 'Who you gave the book to?'],
          correct: 'To whom did you give the book?'
      },
      {
          text: 'What is the correct way to say this sentence? "Him and I went to the store."',
          options: ['I and him went to the store.', 'He and I went to the store.', 'Him and me went to the store.', 'Him and I gone to the store.'],
          correct: 'He and I went to the store.'
      },
      {
          text: 'Choose the correct form: "The committee ___ to reach a decision."',
          options: ['are trying', 'is trying', 'were trying', 'has trying'],
          correct: 'is trying'
      },
      {
          text: 'Identify the adverb in the sentence: "He runs very quickly."',
          options: ['He', 'runs', 'very', 'quickly'],
          correct: 'very'
      },
      {
          text: 'What is the correct form of the verb in this sentence: "She ___ to the party."',
          options: ['go', 'went', 'gone', 'going'],
          correct: 'went'
      },
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
