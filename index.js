// Code your solution in this file!

//1st code
const headQuarters = 42
function distanceFromHqInBlocks(pickUp) {
     
    if (pickUp < headQuarters) {
        return headQuarters - pickUp
    } else {
        return pickUp - headQuarters
    }
};
//2nd code
function distanceFromHqInFeet(blockNumber) {
// return distanceFromHqInBlocks(blockNumber) * 264
// line 15 is also the answer
    const blockTotal = distanceFromHqInBlocks(blockNumber)
    const feetTotal = blockTotal * 264
    return feetTotal
};

//3rd code
function distanceTravelledInFeet(startPoint, endPoint) {
    //const feetTravelled = end - start
    //return feetTravelled * 264
    //lines 24 & 25 were original answer, but doed not take into account if the end is less than the start.
    if (startPoint < endPoint) {
        return (endPoint - startPoint) * 264
    } else {
        return (startPoint - endPoint) * 264
    }
};

//4th code
function calculatesFarePrice(startPoint, endPoint) {
    //using function from 3rd code
    const feetTravelled = distanceTravelledInFeet(startPoint, endPoint);
    if(feetTravelled <= 400) {
        return 0.00
    } else if(feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02
    } else if(feetTravelled <= 2500) {
        return 25.00
    } else {
        return 'cannot travel that far'
    }
};