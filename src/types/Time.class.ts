export class Time {
  constructor(
    public days: number,
    public hours: number = 0,
    public minutes: number = 0,
    public seconds: number = 0
  ) {
    if (this.seconds > 59) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds %= 60;
    }
    if (this.minutes > 59) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }
    if (this.hours > 23) {
      this.days += Math.floor(this.hours / 24);
      this.hours %= 24;
    }
  }
}
