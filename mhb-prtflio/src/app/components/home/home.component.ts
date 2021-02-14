import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('250ms', style({transform: 'translateX(0)', 'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateX(0)', 'opacity': 1}),
          animate('250ms', style({transform: 'translateX(-100%)', 'opacity': 0})),
        ]
      )]
    )
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

  constructor() { }

  ngOnInit(): void {
  }

  firstClick() {
    this.firstCaption = !this.firstCaption
    this.firstOpen = !this.firstOpen
    this.secondCaption = false
    this.thirdCaption = false
    this.fourthCaption = false
    this.fifthCaption = false
    this.sixthCaption = false

    this.secondOpen = false
    this.thirdOpen = false
    this.fourthOpen = false
    this.fifthOpen = false
    this.sixthOpen = false
  }

  secondClick() {
    this.firstCaption = false
    this.secondOpen = !this.secondOpen
    this.secondCaption = !this.secondCaption
    this.thirdCaption = false
    this.fourthCaption = false
    this.fifthCaption = false
    this.sixthCaption = false

    this.firstOpen = false
    this.thirdOpen = false
    this.fourthOpen = false
    this.fifthOpen = false
    this.sixthOpen = false
  }
  thirdClick() {
    this.firstCaption = false
    this.secondCaption = false
    this.thirdCaption = !this.thirdCaption
    this.thirdOpen = !this.thirdOpen
    this.fourthCaption = false
    this.fifthCaption = false
    this.sixthCaption = false

    this.firstOpen = false
    this.secondOpen = false
    this.fourthOpen = false
    this.fifthOpen = false
    this.sixthOpen = false
  }
  fourthClick() {
    this.firstCaption = false
    this.secondCaption = false
    this.thirdCaption = false
    this.fourthCaption = !this.fourthCaption
    this.fourthOpen = !this.fourthOpen
    this.fifthCaption = false
    this.sixthCaption = false

    this.firstOpen = false
    this.secondOpen = false
    this.thirdOpen = false
    this.fifthOpen = false
    this.sixthOpen = false
  }
  
  fifthClick() {
    this.firstCaption = false
    this.secondCaption = false
    this.thirdCaption = false
    this.fourthCaption = false
    this.fifthCaption = !this.fifthCaption
    this.fifthOpen = !this.fifthOpen
    this.sixthCaption = false

    this.firstOpen = false
    this.secondOpen = false
    this.thirdOpen = false
    this.fourthOpen = false
    this.sixthOpen = false
  }
  sixthClick() {
    this.firstCaption = false
    this.secondCaption = false
    this.thirdCaption = false
    this.fourthCaption = false
    this.fifthCaption = false
    this.sixthCaption = !this.sixthCaption
    this.sixthOpen = !this.sixthOpen

    this.firstOpen = false
    this.secondOpen = false
    this.thirdOpen = false
    this.fourthOpen = false
    this.fifthOpen = false
  }

}
