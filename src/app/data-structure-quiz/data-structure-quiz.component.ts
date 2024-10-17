import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-math-quiz',
  templateUrl: './data-structure-quiz.component.html',
  styleUrls: ['./data-structure-quiz.component.css']
})
export class DataStructureQuizComponent implements OnInit {
  questions: { text: string, options: string[], correct: string }[] = [
      {
        text: 'What is a data structure?',
        options: [
          'A way to store and organize data',
          'A type of algorithm',
          'A programming language',
          'A computer network'
        ],
        correct: 'A way to store and organize data'
      },
      {
        text: 'Which of the following is a linear data structure?',
        options: [
          'Array',
          'Tree',
          'Graph',
          'Heap'
        ],
        correct: 'Array'
      },
      {
        text: 'What is the main advantage of using a linked list over an array?',
        options: [
          'Dynamic size',
          'Easier traversal',
          'Memory efficiency',
          'Faster access time'
        ],
        correct: 'Dynamic size'
      },
      {
        text: 'Which data structure uses FIFO (First In First Out) order?',
        options: [
          'Stack',
          'Queue',
          'Array',
          'Linked List'
        ],
        correct: 'Queue'
      },
      {
        text: 'What is the time complexity of accessing an element in an array?',
        options: [
          'O(1)',
          'O(n)',
          'O(log n)',
          'O(n log n)'
        ],
        correct: 'O(1)'
      },
      {
        text: 'Which data structure is used for implementing recursion?',
        options: [
          'Array',
          'Stack',
          'Queue',
          'Linked List'
        ],
        correct: 'Stack'
      },
      {
        text: 'What does a binary tree node contain?',
        options: [
          'Data and two children',
          'Data and three children',
          'Data and a parent',
          'Only data'
        ],
        correct: 'Data and two children'
      },
      {
        text: 'What is a hash table?',
        options: [
          'A data structure that uses key-value pairs',
          'A linear data structure',
          'A type of tree',
          'A sorting algorithm'
        ],
        correct: 'A data structure that uses key-value pairs'
      },
      {
        text: 'What is the worst-case time complexity for searching in a binary search tree?',
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n log n)'
        ],
        correct: 'O(n)'
      },
      {
        text: 'Which of the following data structures is not linear?',
        options: [
          'Array',
          'Linked List',
          'Stack',
          'Graph'
        ],
        correct: 'Graph'
      },
      {
        text: 'What is the height of a binary tree with only one node?',
        options: [
          '0',
          '1',
          '2',
          'It cannot be determined'
        ],
        correct: '0'
      },
      {
        text: 'In a circular linked list, the last node points to which node?',
        options: [
          'The first node',
          'Null',
          'The last node itself',
          'It points nowhere'
        ],
        correct: 'The first node'
      },
      {
        text: 'Which operation is not performed in constant time on a linked list?',
        options: [
          'Insertion at head',
          'Insertion at tail',
          'Accessing an element by index',
          'Deletion at head'
        ],
        correct: 'Accessing an element by index'
      },
      {
        text: 'What is the main disadvantage of using a linked list?',
        options: [
          'Dynamic size',
          'Memory overhead for pointers',
          'Sequential access',
          'Easy insertion and deletion'
        ],
        correct: 'Memory overhead for pointers'
      },
      {
        text: 'Which of the following is a tree traversal method?',
        options: [
          'In-order',
          'Pre-order',
          'Post-order',
          'All of the above'
        ],
        correct: 'All of the above'
      },
      {
        text: 'Which data structure is best for implementing a priority queue?',
        options: [
          'Array',
          'Linked List',
          'Heap',
          'Stack'
        ],
        correct: 'Heap'
      },
      {
        text: 'In a graph, what is the degree of a vertex?',
        options: [
          'The number of edges connected to it',
          'The number of nodes connected to it',
          'The number of paths from it',
          'The number of vertices in the graph'
        ],
        correct: 'The number of edges connected to it'
      },
      {
        text: 'Which of the following operations can be performed in a stack?',
        options: [
          'Push',
          'Pop',
          'Peek',
          'All of the above'
        ],
        correct: 'All of the above'
      },
      {
        text: 'What is the main characteristic of a depth-first search (DFS)?',
        options: [
          'Uses a stack',
          'Uses a queue',
          'Explores neighbors first',
          'Is non-recursive'
        ],
        correct: 'Uses a stack'
      },
      {
        text: 'Which of the following is true about a binary search tree?',
        options: [
          'Left child is greater than the parent',
          'Right child is smaller than the parent',
          'Both children are always balanced',
          'All left descendants are less than the node and all right descendants are greater'
        ],
        correct: 'All left descendants are less than the node and all right descendants are greater'
      },
      {
        text: 'Which data structure is used to implement a backtracking algorithm?',
        options: [
          'Queue',
          'Stack',
          'Hash Table',
          'Tree'
        ],
        correct: 'Stack'
      },
      {
        text: 'What is a self-balancing binary search tree?',
        options: [
          'A tree that maintains its balance after insertions and deletions',
          'A tree that only allows unique values',
          'A tree with a fixed height',
          'A tree that can only grow to the left'
        ],
        correct: 'A tree that maintains its balance after insertions and deletions'
      },
      {
        text: 'Which of the following sorting algorithms can be implemented using a linked list?',
        options: [
          'Bubble sort',
          'Insertion sort',
          'Merge sort',
          'All of the above'
        ],
        correct: 'All of the above'
      },
      {
        text: 'What is the time complexity of accessing an element in a hash table?',
        options: [
          'O(1)',
          'O(n)',
          'O(log n)',
          'O(n log n)'
        ],
        correct: 'O(1)'
      },
      {
        text: 'Which of the following is an example of a non-linear data structure?',
        options: [
          'Array',
          'Queue',
          'Linked List',
          'Binary Tree'
        ],
        correct: 'Binary Tree'
      },
      {
        text: 'What is the purpose of a sentinel node in a linked list?',
        options: [
          'To indicate the end of the list',
          'To improve performance',
          'To store data',
          'To replace the head node'
        ],
        correct: 'To indicate the end of the list'
      },
      {
        text: 'What is the space complexity of a linked list?',
        options: [
          'O(1)',
          'O(n)',
          'O(n^2)',
          'O(log n)'
        ],
        correct: 'O(n)'
      },
      {
        text: 'In which data structure is the depth of the node defined as the number of edges from the root to the node?',
        options: [
          'Tree',
          'Graph',
          'Queue',
          'Stack'
        ],
        correct: 'Tree'
      }
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
