let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false
let runnerAge = 21
if (runnerAge > 18 && isEarly) {
  console.log('Your race number is '+ raceNumber + ' you will race at 9:30am')
} else if (runnerAge > 18 && !isEarly) {
  console.log('Your race number is '+ raceNumber + '. Late adults start at 11:00am');
} else if (runnerAge < 18) {
  console.log('Your race number is ' + raceNumber + '. Youth registrants run at 12:30pm (regardless of registration).')  
} else {
  console.log('Please see the registration desk.')
}
