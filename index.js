// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

// function returnFirstTwoDrivers(driversArray){
//     return driversArray.slice(0,2);
// }
// function returnLastTwoDrivers(driversArray){
//     return driversArray.slice(2,4)
// }
// function returnFirstTwoDrivers(driversArray, ) {
//     return returnFirstTwoDrivers(driversArray);
//   }

function returnFirstTwoDrivers(driversArray) {
    return (driversArray.slice(0, 2))
}

function returnLastTwoDrivers(driversArray) {
    return (driversArray.slice(2, 4))
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers( arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
} 

