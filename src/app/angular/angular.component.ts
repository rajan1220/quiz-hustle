import { Component, OnInit } from '@angular/core';

interface Question {
[x: string]: any;
  question: string;
  options: string[];
  correctAnswer: string;
}
@Component({
  selector: 'app-quiz',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  currentQuestionIndex = 0;
  quizSubmitted = false;
  score = 0;
  userAnswers: string[] = [];
  minutes = 30;
  seconds = 0;
  interval: any;
  questions: Question[] = [
    {
      question: 'What is Angular primarily used for?',
      options: ['Back-end development', 'Mobile applications', 'Front-end development', 'Database management'],
      correctAnswer: 'Front-end development'
    },
    {
      question: 'Which of the following is a key feature of React?',
      options: ['Two-way data binding', 'Virtual DOM', 'Template syntax', 'Dependency injection'],
      correctAnswer: 'Virtual DOM'
    },
    {
      question: 'Which framework uses a reactive programming model?',
      options: ['Angular', 'React', 'Vue.js', 'All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is the purpose of props in React?',
      options: ['To manage state', 'To pass data to components', 'To handle events', 'To define CSS styles'],
      correctAnswer: 'To pass data to components'
    },
    {
      question: 'What is the primary language used in Vue.js?',
      options: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
      correctAnswer: 'JavaScript'
    },
    {
      question: 'What is the Angular CLI used for?',
      options: ['Routing', 'Code compilation', 'Project scaffolding', 'State management'],
      correctAnswer: 'Project scaffolding'
    },
    {
      question: 'Which of the following is not a lifecycle method in React?',
      options: ['componentDidMount', 'componentDidUpdate', 'componentWillUnmount', 'componentWillRender'],
      correctAnswer: 'componentWillRender'
    },
    {
      question: 'In Vue.js, what is the Vuex used for?',
      options: ['State management', 'Routing', 'Data fetching', 'CSS styling'],
      correctAnswer: 'State management'
    },
    {
      question: 'Which framework is known for its simplicity and flexibility?',
      options: ['Angular', 'React', 'Vue.js', 'jQuery'],
      correctAnswer: 'Vue.js'
    },
    {
      question: 'What do you use to create a single-page application in Angular?',
      options: ['ngRoute', 'React Router', 'Angular Router', 'Vue Router'],
      correctAnswer: 'Angular Router'
    },
    {
      question: 'What is JSX in React?',
      options: ['JavaScript XML', 'JavaScript Extension', 'JSON Syntax Extension', 'Java Syntax Extension'],
      correctAnswer: 'JavaScript XML'
    },
    {
      question: 'Which of the following is used to style components in Vue.js?',
      options: ['CSS Modules', 'Sass', 'Scoped CSS', 'All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      question: 'Which of the following features does Angular provide?',
      options: ['Two-way data binding', 'Component-based architecture', 'Dependency injection', 'All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is the main function of the Redux library?',
      options: ['Routing', 'State management', 'Data fetching', 'UI components'],
      correctAnswer: 'State management'
    },
    {
      question: 'What are hooks in React?',
      options: ['Functions that let you use state and other React features', 'Lifecycle methods', 'Component classes', 'CSS styles'],
      correctAnswer: 'Functions that let you use state and other React features'
    },
    {
      question: 'Which of the following is a feature of Angular?',
      options: ['Virtual DOM', 'Two-way data binding', 'Props', 'Single-file components'],
      correctAnswer: 'Two-way data binding'
    },
    {
      question: 'What command do you use to create a new React application?',
      options: ['ng new', 'vue create', 'create-react-app', 'npm init'],
      correctAnswer: 'create-react-app'
    },
    {
      question: 'Which framework is developed and maintained by Google?',
      options: ['Angular', 'React', 'Vue.js', 'jQuery'],
      correctAnswer: 'Angular'
    },
    {
      question: 'What does the term "SPA" stand for?',
      options: ['Single Page Application', 'Simple Page Application', 'Static Page Application', 'Server Page Application'],
      correctAnswer: 'Single Page Application'
    },
    {
      question: 'In which file would you typically define the main component in an Angular application?',
      options: ['app.module.ts', 'app.component.ts', 'main.ts', 'index.html'],
      correctAnswer: 'app.component.ts'
    },
    {
      question: 'What is the purpose of the Vue Router?',
      options: ['State management', 'Styling', 'Routing', 'Data fetching'],
      correctAnswer: 'Routing'
    },
    {
      question: 'Which directive is used for conditionally rendering elements in Angular?',
      options: ['*ngFor', '*ngIf', '*ngSwitch', '*ngStyle'],
      correctAnswer: '*ngIf'
    },
    {
      question: 'What do you use to manage component states in React?',
      options: ['Redux', 'Props', 'State', 'All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      question: 'Which of the following is a templating engine used in Vue.js?',
      options: ['Handlebars', 'EJS', 'Pug', 'Vue Templates'],
      correctAnswer: 'Vue Templates'
    },
    {
      question: 'What is Angular Material used for?',
      options: ['Styling components', 'Creating UI components', 'State management', 'Routing'],
      correctAnswer: 'Creating UI components'
    },
    {
      question: 'Which keyword is used to define a component in Angular?',
      options: ['@Component', '@Directive', '@Injectable', '@Module'],
      correctAnswer: '@Component'
    },
    {
      question: 'What does the "v-model" directive do in Vue.js?',
      options: ['Data binding', 'Event handling', 'Routing', 'State management'],
      correctAnswer: 'Data binding'
    },
    {
      question: 'Which tool is commonly used for managing packages in JavaScript projects?',
      options: ['npm', 'yarn', 'bower', 'All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is the purpose of the “use strict” directive in JavaScript?',
      options: ['To enable strict mode', 'To disable errors', 'To define variables', 'To optimize performance'],
      correctAnswer: 'To enable strict mode'
    },
    {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'],
      correctAnswer: 'Cascading Style Sheets'
    }
  ];
  

  constructor() {}

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.submitQuiz();
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  selectAnswer(questionIndex: number, answer: string) {
    this.userAnswers[questionIndex] = answer;
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  submitQuiz() {
    this.quizSubmitted = true;
    this.score = this.userAnswers.filter(
      (answer, index) => answer === this.questions[index].correctAnswer
    ).length;
    clearInterval(this.interval);
  }

  retakeQuiz() {
    this.currentQuestionIndex = 0;
    this.quizSubmitted = false;
    this.score = 0;
    this.userAnswers = [];
    this.minutes = 30;
    this.seconds = 0;
    this.startTimer();
  }
}
