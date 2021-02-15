import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.sass']
})
export class ProjectModalComponent implements OnInit {

  @Input() modalId: string;
  @Input() projectTitle: string;
  @Input() images: string[];
  @Input() description: string;
  @Input() deployedLink: string;
  @Input() githubRepo: string;
  @Input() carouselId: string;
  @Input() webOnly: boolean;
  @Input() mobileOnly: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log
  }

}
