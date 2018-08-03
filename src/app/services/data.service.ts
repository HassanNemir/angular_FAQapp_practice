import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];
  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'Hasssan',
        hide: true,
      }
    ];
   }
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  addQuestion(question: Question) {
    this.questions.unshift(question);
    // this ..
    localStorage.setItem('questions', JSON.stringify(this.questions));
    // is much shorter than these ..

    // let questions;
    // if (localStorage.getItem('questions') === null) {
    //   questions = [];
    //   questions.unshift(question);
    //   localStorage.setItem('questions', JSON.stringify(questions));
    // } else {
    //   questions = JSON.parse(localStorage.getItem('questions'));
    //   questions.unshift(question);
    //   localStorage.setItem('questions', JSON.stringify(questions));
    // }
  }
  removeQuestion(question: Question) {
    this.questions.map((q, i ) => {
      if (question === q) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    });
  }
}
