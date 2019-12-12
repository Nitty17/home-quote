import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sub-progress-bar',
  templateUrl: './sub-progress-bar.component.html',
  styleUrls: ['./sub-progress-bar.component.css']
})
export class SubProgressBarComponent implements OnInit {
  steps = [
    {id: 'yourHome', order: 1, name: 'Your home'},
    {id: 'homeConstruction', order: 2, name: 'Home construction'},
    {id: 'homeProtection', order: 3, name: 'Home protection'}];
  @Input() activeStepId: string;

  constructor() {
  }

  ngOnInit() {
  }

  getDisplayClass(stepId: string): string {
    if (this.activeStepId === 'homeCompleted') {
      return 'finished';
    }
    if (this.activeStepId === stepId) {
      return 'current';
    }
    const activeStep = this.steps.find(step => step.id === this.activeStepId);
    const thisStep = this.steps.find(step => step.id === stepId);
    if (activeStep && thisStep && thisStep.order < activeStep.order) {
      return 'finished';
    } else {
      return '';
    }
  }
}
