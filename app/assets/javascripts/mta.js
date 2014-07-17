// Line L : 8th           ---- 6th   -------------------------- UNION Square ---- 3rd ---- 1st
// Line N : Times Sq      ---- 34th  ----- 28th ----- 23rd ---- UNION Square ---- 8th
// Line 6 : Grand Central ---- 33rd  ----- 28th ----- 23rd ---- UNION Square ---- Astor Place
// Index #: 0             ---- 1     ----- 2    ----- 3    ---- 4            ---- 5                           

var mta = {
  lineL: ["L_8th", "L_6th", "Union Square", "L_3rd", "L_1st"],
  lineN: ["Times Square", "N_34th", "N_28th", "N_23rd", "Union Square", "N_8th"],
  line6: ["Grand Central", "6_33rd", "6_28th", "6_23rd", "Union Square", "Astor Place"]
};

var mtaPrompt = function () {
  // arrival & departure lines and stations 
  var mtaDepartureLine = mta.line6;
  var mtaDepartureStation = "6_23rd";

  var mtaArrivalLine = mta.line6;
  var mtaArrivalStation = "Grand Central";

  // arrival & departure station indices (or indexes if you must)
  var mtaDepartureIndex = mtaDepartureLine.indexOf(mtaDepartureStation);
  var mtaArrivalIndex = mtaArrivalLine.indexOf(mtaArrivalStation);
    
  // arrival & departure line, Union Square index
  var departureUnionSquareIndex = mtaDepartureLine.indexOf("Union Square");
  var arrivalUnionSquareIndex = mtaArrivalLine.indexOf("Union Square");

  // arrival & departure line station counts, including total station count
  if (mtaDepartureLine === mtaArrivalLine) {
    // var totalStations = mtaDepartureIndex - mtaArrivalIndex;

    if (mtaDepartureIndex > departureUnionSquareIndex) {
      var departureLineStations = mtaDepartureIndex - departureUnionSquareIndex;
      var departureStations = mtaDepartureLine.slice(departureUnionSquareIndex, mtaDepartureIndex+1);
      departureStations.reverse();

      var arrivalLineStations = mtaArrivalIndex - arrivalUnionSquareIndex-1;
      var arrivalStations = mtaArrivalLine.slice(mtaArrivalIndex, arrivalUnionSquareIndex);
      arrivalStations.reverse();
    } else {
      var departureLineStations = mtaDepartureIndex - mtaArrivalIndex
      var departureStations = mtaDepartureLine.slice(mtaDepartureIndex+1, mtaArrivalIndex);
      if (departureStations.length == 0) {
        // Stations are in the other order
        departureStations = mtaDepartureLine.slice(mtaArrivalIndex, mtaDepartureIndex+1);
        departureStations.reverse();
      }
      var arrivalLineStations = 0;
      var arrivalStations = "";
      // var arrivalStations = mtaArrivalLine.slice(mtaArrivalIndex, arrivalUnionSquareIndex);
     //    arrivalStations.reverse();
    } 
  } else {

    if (mtaDepartureIndex > departureUnionSquareIndex) {
      var departureLineStations = mtaDepartureIndex - departureUnionSquareIndex;
      var departureStations = mtaDepartureLine.slice(departureUnionSquareIndex, mtaDepartureIndex+1);
      departureStations.reverse();
    } else {
      var departureLineStations = departureUnionSquareIndex - mtaDepartureIndex;
      var departureStations = mtaDepartureLine.slice(mtaDepartureIndex, departureUnionSquareIndex+1);
    };

    if (mtaArrivalIndex > arrivalUnionSquareIndex) {
      var arrivalLineStations = mtaArrivalIndex - arrivalUnionSquareIndex;
      var arrivalStations = mtaArrivalLine.slice(arrivalUnionSquareIndex+1, mtaArrivalIndex+1);
    } else {
      var arrivalLineStations = arrivalUnionSquareIndex - mtaArrivalIndex;
      var arrivalStations = mtaArrivalLine.slice(mtaArrivalIndex, arrivalUnionSquareIndex);
      arrivalStations.reverse();
    }
  };

  var totalStations = departureLineStations + arrivalLineStations;

  // Result print out of station counts and station route
  console.log("MTA Departure index" + mtaDepartureIndex);
  console.log("MTA Arrival index" + mtaArrivalIndex);
  console.log("No. departure stations" + departureLineStations);  
  console.log("No. arrival stations" + arrivalLineStations);
  console.log("For your trip departing from " + mtaDepartureStation + " arriving at " + mtaArrivalStation);
  console.log("Total number of stations is " + totalStations);
  console.log("Departure Stations: " + departureStations)
  console.log("Where your station route will be " + departureStations.join(", ") + arrivalStations);
  
};

mtaPrompt();
