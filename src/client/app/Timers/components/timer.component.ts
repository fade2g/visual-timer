import {Component} from 'angular2/core';
import {TimerService, ITimerService} from '../../shared/services/timer.service';

@Component({
  selector: 'vt-timer',
  viewProviders: [TimerService],
  templateUrl: 'app/Timers/components/timer.component.html',
  styleUrls: ['app/Timers/components/timer.component.css']
})


export class TimersComponent {
  constructor(private timerService: TimerService) {
    this.timerService = timerService;
  }
  public start() {
    console.log('Will start the timer');
    this.timerService.startTimer();
  }

  public stop() {
    this.timerService.stopTimer();
  }
}
