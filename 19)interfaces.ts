// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

//if there some logic to be implemented and we want to share it among sub classes it is better to use an
//abstract class.coz interfaces can not have method implementations.

//inheritance also available in interfaces
interface CloudCalendar extends ICalendar {
  sync(): void;
}

class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}

  addEvent(): void {}

  removeEvent(): void {}
}
