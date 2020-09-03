import { Component } from '@angular/core';
import { JoyrideService, JoyrideStepService, StepDrawerService } from 'ngx-joyride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joyride';

  constructor(private readonly joyrideService: JoyrideService, private readonly joyrideStepService: JoyrideStepService, private readonly stepDrawerService: StepDrawerService) {}

  public onTourStart() {
		this.joyrideService.startTour(
			{ steps: ['firstStep', 'secondStep', 'thirdStep', 'fourthStep'], startWith: 'firstStep' } // Your steps order
		);
  }
  
  public onNextClick(skipCount: number) {
    for (let i = 0; i < skipCount; i++) {
      // this.stepDrawerService.remove(i); // How to close the other ones?
      this.joyrideStepService.next();
    }
  }
}
