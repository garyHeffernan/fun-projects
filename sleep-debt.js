const getSleepHours = day => { // here I created a function called getSleepHours with a single parameter named "day"
	
  if (day === 'Monday') {
    return 8;
  } 
    else if (day === 'Tuesday') {
    return 7;
  } 
    else if (day === 'Wednesday') {
    return 6;
  } 
    else if (day === 'Thursday') {
    return 5;
  } 
    else if (day === 'Friday') {
    return 4;
  } 
    else if (day === 'Saturday') {
    return 3;
  } 
    else if (day === 'Sunday') {
    return 2;
  } 
    else return 0;
  };

// testing the input
// console.log(getSleepHours('Monday'))
// console.log(getSleepHours('Tuesday'))
// console.log(getSleepHours('Wednesday'))
// console.log(getSleepHours('Thursday'))
// console.log(getSleepHours('Friday'))
// console.log(getSleepHours('Saturday'))
// console.log(getSleepHours('Sunday'))
// console.log(getSleepHours('Dogday'))

// 1. get the total sleep hours that you actually slept
// the concise body form of a function uses arrow notation and does not include braces or the return keyword
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')

//print to console to see if it works
// console.log(getActualSleepHours())

// 2. get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}; 

//testing to see if it works
// console.log(getIdealSleepHours())

// 3. calculate sleep debt, if any
const calculateSleepDebt = () => {
  
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDelta = actualSleepHours - idealSleepHours
    
	if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  }  else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${sleepDelta} more sleep than needed!`)
  } else {
    console.log(`You should get some rest, you got ${sleepDelta} less hours than needed!`)
  }
};

calculateSleepDebt();
