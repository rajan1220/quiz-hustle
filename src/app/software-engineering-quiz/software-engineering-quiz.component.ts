import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-engineering-quiz',
  templateUrl: './software-engineering-quiz.component.html',
  styleUrls: ['./software-engineering-quiz.component.css']
})
export class SoftwareEngineeringQuizComponent implements OnInit {
  currentQuestionIndex = 0;
  quizSubmitted = false;
  score = 0;
  userAnswers: string[] = [];
  minutes = 30; // 30-minute quiz
  seconds = 0;

  questions = [
    {
      text: 'What is Software Engineering?',
      options: ['Designing software', 'Engineering the software', 'Systematic approach to software development', 'None of the above'],
      correct: 'Systematic approach to software development'
    },
    {
      text: 'Which model is also known as the linear sequential model?',
      options: ['Waterfall Model', 'Spiral Model', 'Incremental Model', 'V-Model'],
      correct: 'Waterfall Model'
    },
    {
      text: 'Which phase is the first step in the software development life cycle?',
      options: ['Design', 'Requirement analysis', 'Implementation', 'Maintenance'],
      correct: 'Requirement analysis'
    },
    {
      text: 'What is the output of the design phase in SDLC?',
      options: ['Code', 'Test cases', 'Design Document', 'User manual'],
      correct: 'Design Document'
    },
    {
      text: 'Which one is a measure of software quality?',
      options: ['Reliability', 'Cost', 'Maintainability', 'Both Reliability and Maintainability'],
      correct: 'Both Reliability and Maintainability'
    },
    {
      text: 'What is a collection of interrelated components that function together to achieve a specific goal called?',
      options: ['Algorithm', 'System', 'Module', 'Program'],
      correct: 'System'
    },
    {
      text: 'Which of the following is NOT a software process model?',
      options: ['Waterfall Model', 'Spiral Model', 'Prototyping Model', 'Assembly Model'],
      correct: 'Assembly Model'
    },
    {
      text: 'Which of the following is a testing technique?',
      options: ['Black-box testing', 'White-box testing', 'Regression testing', 'All of the above'],
      correct: 'All of the above'
    },
    {
      text: 'Which of these is an Agile methodology?',
      options: ['Scrum', 'V-Model', 'Incremental Model', 'None of the above'],
      correct: 'Scrum'
    },
    {
      text: 'In software project management, what does PERT stand for?',
      options: ['Program Evaluation Review Technique', 'Project Estimation Review Tool', 'Program Execution Resource Template', 'None of the above'],
      correct: 'Program Evaluation Review Technique'
    },
    {
      text: 'What is the primary goal of software design?',
      options: ['Efficiency', 'Correctness', 'Usability', 'Readability'],
      correct: 'Correctness'
    },
    {
      text: 'Which metric is used to measure code complexity?',
      options: ['Lines of Code', 'Cyclomatic Complexity', 'Code Size', 'Code Reusability'],
      correct: 'Cyclomatic Complexity'
    },
    {
      text: 'In which phase of SDLC are user requirements gathered?',
      options: ['Design', 'Implementation', 'Requirement Analysis', 'Maintenance'],
      correct: 'Requirement Analysis'
    },
    {
      text: 'Which of the following is not a phase in the SDLC?',
      options: ['Maintenance', 'Design', 'Coding', 'Feedback Gathering'],
      correct: 'Feedback Gathering'
    },
    {
      text: 'What does CMM stand for in software engineering?',
      options: ['Capability Maturity Model', 'Continuous Maintenance Model', 'Control Model Management', 'Cost Management Model'],
      correct: 'Capability Maturity Model'
    },
    {
      text: 'Which of the following is not an Agile principle?',
      options: ['Customer collaboration', 'Following a plan', 'Responding to change', 'Individuals and interactions'],
      correct: 'Following a plan'
    },
    {
      text: 'What is the main advantage of using the Spiral model?',
      options: ['It is simple to implement', 'It is risk-driven', 'It is cheap', 'It is fast'],
      correct: 'It is risk-driven'
    },
    {
      text: 'Which design approach emphasizes dividing a system into smaller parts or modules?',
      options: ['Modular Design', 'Prototyping', 'Structured Programming', 'Event-Driven Design'],
      correct: 'Modular Design'
    },
    {
      text: 'In which phase of SDLC is the software product actually coded?',
      options: ['Design', 'Implementation', 'Testing', 'Maintenance'],
      correct: 'Implementation'
    },
    {
      text: 'Which of the following is a type of functional testing?',
      options: ['Unit testing', 'System testing', 'Integration testing', 'All of the above'],
      correct: 'All of the above'
    },
    {
      text: 'Which one of these is a non-functional requirement?',
      options: ['Scalability', 'Usability', 'Performance', 'All of the above'],
      correct: 'All of the above'
    },
    {
      text: 'Which model is used in situations where all requirements are known in advance?',
      options: ['Waterfall Model', 'Agile Model', 'Spiral Model', 'RAD Model'],
      correct: 'Waterfall Model'
    },
    {
      text: 'In software project estimation, which technique involves using previous project data?',
      options: ['Top-down Estimation', 'Bottom-up Estimation', 'Analogous Estimation', 'Parametric Estimation'],
      correct: 'Analogous Estimation'
    },
    {
      text: 'Which of the following is an example of a CASE tool?',
      options: ['Code Editor', 'Debugger', 'Version Control', 'All of the above'],
      correct: 'All of the above'
    },
    {
      text: 'In project management, what is the critical path?',
      options: ['The longest sequence of dependent tasks', 'The shortest path to project completion', 'A path that is not on the critical chain', 'None of the above'],
      correct: 'The longest sequence of dependent tasks'
    },
    {
      text: 'Which testing level is performed to ensure that different components work together?',
      options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
      correct: 'Integration Testing'
    },
    {
      text: 'Which model is suitable when user requirements are not well understood at the beginning?',
      options: ['Waterfall Model', 'Spiral Model', 'RAD Model', 'Prototyping Model'],
      correct: 'Prototyping Model'
    },
    {
      text: 'Which one of the following is used to manage changes to the codebase?',
      options: ['Version Control System', 'CASE Tool', 'Database Management System', 'Bug Tracking System'],
      correct: 'Version Control System'
    },
    {
      text: 'Which is the process of finding and fixing bugs in the software?',
      options: ['Testing', 'Debugging', 'Deployment', 'Maintenance'],
      correct: 'Debugging'
    },
    {
      text: 'Which is a key benefit of continuous integration in software development?',
      options: ['Faster testing', 'Earlier detection of defects', 'Improved project planning', 'Increased code readability'],
      correct: 'Earlier detection of defects'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
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
      (answer, index) => answer === this.questions[index].correct
    ).length;
  }

  retakeQuiz() {
    this.currentQuestionIndex = 0;
    this.quizSubmitted = false;
    this.score = 0;
    this.userAnswers = [];
    this.minutes = 30;
    this.seconds = 0;
  }
}
