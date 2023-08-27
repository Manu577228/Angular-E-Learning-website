import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  courses = [
    {
      id: 1,
      name: 'Learn Angular',
      description:
        'Angular is an open-source, JavaScript framework written in TypeScript.',
      image: '../../assets/angular.jpg',
    },
    {
      id: 2,
      name: 'Learn Typescript',
      description:
        'TypeScript is a syntactic superset of JavaScript which adds static typing.',
      image: '../../assets/typescript.jpg',
    },
    {
      id: 3,
      name: 'Learn NodeJS',
      description:
        'Node. js is an JavaScript runtime environment for running web applications.',
      image: '../../assets/nodejs.jpg',
    },
    {
      id: 4,
      name: 'Learn ReactJS',
      description:
        'React is a JavaScript library developed by Facebook for building UI.',
      image: '../../assets/reactjs.jpg',
    },
  ];
}
