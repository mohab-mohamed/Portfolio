import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('250ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('250ms', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  firstCaption: boolean;
  secondCaption: boolean;
  thirdCaption: boolean;
  fourthCaption: boolean;
  fifthCaption: boolean;
  sixthCaption: boolean;

  firstOpen: boolean;
  secondOpen: boolean;
  thirdOpen: boolean;
  fourthOpen: boolean;
  fifthOpen: boolean;
  sixthOpen: boolean;

  firstProjectImages: string[] = [
    'assets/astar-1.png',
    'assets/astar-2.png',
    'assets/astar-3.png',
    'assets/astar-4.png',
    'assets/astar-5.png',
  ];
  firstDeployed: string =
    'https://mohab-mohamed.github.io/AStar-Pathfinding-AI/';
  firstRepo: string =
    'https://github.com/mohab-mohamed/AStar-Pathfinding-AI/tree/gh-pages';
  firstDescription: string =
    'A* is a path search algorithm, which is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency. This application visualizes how the search algorithm finds the most optimal path through its branch-like search. Additionally, the user is able to see how A* can be used iteratively to find a goal through unknown terrain.';

  secondProjectImages: string[] = [
    'assets/scheduler-0.png',
    'assets/scheduler-1.png',
    'assets/scheduler-2.jpg',
  ];
  secondDeployed: string =
    'https://mohab-react-scheduler.herokuapp.com/';
  secondRepo: string =
    'https://github.com/mohab-mohamed/react-scheduler';
  secondDescription: string =
    'The Scheduler is a MERN stack application meant to aid a user in visualizing their free time. This is done by connecting their google account and calculating the amount of time that will be spent in meetings and upcoming tasks. Once the data is fetched/calculated it is displayed in one general overview donut graph and a smaller one designated for a breakdown of the tasks gathered.';

  thirdProjectImages: string[] = [
    'assets/travel-1.png',
    'assets/travel-2.png',
    'assets/travel-3.png',
    'assets/travel-4.png',
    'assets/travel-5.png',
  ];
  thirdRepo: string =
    'https://github.com/mohab-mohamed/alsafar-webapp';
  thirdDescription: string =
    'This travel application is a project initiated due to my father`s career as a travel agent, the technologies I chose to build with were TypeORM, Express, Angular, and NestJS. Above I showcase some of the features, such as a calendar picker I built from scratch and the autocomplete built for IATA codes.';

  fourthProjectImages: string[] = [
    'assets/stock-2.png',
    'assets/stock-1.png',
  ];
  fourthRepo: string =
    'https://github.com/mohab-mohamed/Hidden-Markov-Chain-Quant-Trading-Strategy';
  fourthDescription: string =
    'An experimental script I wrote to learn more about Hidden Markov Models (HMMs). A HMM is a statistical Markov model in which the system being modeled is assumed to be a Markov process with unobserved states. The script takes in historical data from an IEX trading API, which is stored in a spreadsheet and outputs a graph along with the data to perform some statistical tests upon (ex. how accurate does it predict a price increase within a swing).';

  fifthProjectImages: string[] = [
    'assets/brain-1.png',
    'assets/brain-2.png',
    'assets/brain-3.png',
  ];
  fifthRepo: string =
    'https://github.com/arnaghizadeh/augment_cells';
  fifthDescription: string =
    'Used a convolutional neural network to segment cells from microscopial images to aid my professor with his Immunology research. Examples of the segmentation shown above.';

  sixthProjectImages: string[] = [
    'assets/perceptron-2.png',
  ];
  sixthRepo: string =
    'https://github.com/mohab-mohamed/Perceptron-Neural-Network';
  sixthDescription: string =
    'Built a single layer perceptron neural network from scrach to train a model to accurately identify different digits.';
  constructor() {}

  ngOnInit(): void {}

  firstClick() {
    this.firstCaption = !this.firstCaption;
    this.firstOpen = !this.firstOpen;
    this.secondCaption = false;
    this.thirdCaption = false;
    this.fourthCaption = false;
    this.fifthCaption = false;
    this.sixthCaption = false;

    this.secondOpen = false;
    this.thirdOpen = false;
    this.fourthOpen = false;
    this.fifthOpen = false;
    this.sixthOpen = false;
  }

  secondClick() {
    this.firstCaption = false;
    this.secondOpen = !this.secondOpen;
    this.secondCaption = !this.secondCaption;
    this.thirdCaption = false;
    this.fourthCaption = false;
    this.fifthCaption = false;
    this.sixthCaption = false;

    this.firstOpen = false;
    this.thirdOpen = false;
    this.fourthOpen = false;
    this.fifthOpen = false;
    this.sixthOpen = false;
  }
  thirdClick() {
    this.firstCaption = false;
    this.secondCaption = false;
    this.thirdCaption = !this.thirdCaption;
    this.thirdOpen = !this.thirdOpen;
    this.fourthCaption = false;
    this.fifthCaption = false;
    this.sixthCaption = false;

    this.firstOpen = false;
    this.secondOpen = false;
    this.fourthOpen = false;
    this.fifthOpen = false;
    this.sixthOpen = false;
  }
  fourthClick() {
    this.firstCaption = false;
    this.secondCaption = false;
    this.thirdCaption = false;
    this.fourthCaption = !this.fourthCaption;
    this.fourthOpen = !this.fourthOpen;
    this.fifthCaption = false;
    this.sixthCaption = false;

    this.firstOpen = false;
    this.secondOpen = false;
    this.thirdOpen = false;
    this.fifthOpen = false;
    this.sixthOpen = false;
  }

  fifthClick() {
    this.firstCaption = false;
    this.secondCaption = false;
    this.thirdCaption = false;
    this.fourthCaption = false;
    this.fifthCaption = !this.fifthCaption;
    this.fifthOpen = !this.fifthOpen;
    this.sixthCaption = false;

    this.firstOpen = false;
    this.secondOpen = false;
    this.thirdOpen = false;
    this.fourthOpen = false;
    this.sixthOpen = false;
  }
  sixthClick() {
    this.firstCaption = false;
    this.secondCaption = false;
    this.thirdCaption = false;
    this.fourthCaption = false;
    this.fifthCaption = false;
    this.sixthCaption = !this.sixthCaption;
    this.sixthOpen = !this.sixthOpen;

    this.firstOpen = false;
    this.secondOpen = false;
    this.thirdOpen = false;
    this.fourthOpen = false;
    this.fifthOpen = false;
  }
}
