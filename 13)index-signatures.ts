//there are situations where we want to add properties dynamically.but it is not easy in ts because it
//concers about the shape of the object.

class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "mosh";
seats.A2 = "nandika";
seats["A3"] = "soisa";
