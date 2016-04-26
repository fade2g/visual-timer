export interface ITimerService {
  setTimerConfiguration: () => void;
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
}
export class TimerService implements ITimerService {

  constructor() {
    //
  }

  public setTimerConfiguration() {
    //
  }
  public startTimer() {
    console.log('timer service start has been called');
  }
  public pauseTimer() {
    //
  }
  public stopTimer() {
    //
  }
}
